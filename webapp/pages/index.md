---
title: "Documentation Summary"
---

## Stack

The Knotel App is a [Meteor.js](https://www.meteor.com/) / [React.js](https://facebook.github.io/react/) server and web client.

The server serves the following
- [Knotel Mobile Clients](https://github.com/Knotable/knotel-mobile)
- [Knotel Discourse (community)](https://github.com/Knotable/knotel-discourse)
- Knotel Bot (tba)

All Knotel technology is served from our Amazon Web Services account, apart from email, which is sent via mailgun.

## How to setup your development environment

The app uses the latest version of [meteor.js](https://www.meteor.com/) with the ``react`` package added. Make sure you have meteor.js installed via your favorite package manager on your machine

1. The app itself is in ``/webapp`` so ``cd /webapp``

2. Run ``meteor npm install`` to add the necessary npm packages

3. ``cd /tools`` and run ``npm run init`` to initialize the knotel-tools

4. Run ``knotel-tools reset-db`` to populate your local db

5. Run ``knotel-tools start-app`` to start the app

6. Navigate to [``localhost:3000``](http://localhost:3000/) in your browser to see the app.

Your development environment is ready.

## Development rules

1. Keep it simple. No complex, specialized structures.

2. Keep [knotel-mobile](https://github.com/Knotable/knotel-mobile), our react-native client, in mind. It uses this server and follows this client's patterns.

3. This app follows the [Google Material Design Guidelines](https://www.google.com/design/spec/material-design/introduction.html) by default. Unless you are specifically told otherwise, follow the guidelines.

4. The app is using components from [Material-UI](http://www.material-ui.com/).

5. Only use global (non-component) CSS for grid layout & responsive utilities:

  a. `~/webapp/client/stylesheets/grid.import.styl`

  b. `~/webapp/client/stylesheets/utils.import.styl`

  This CSS is based on bootstrap v3.3.5

6. To add custom media queries and sudo elements in components, use [radium](https://github.com/FormidableLabs/radium),
Example: [room-filter.jsx](https://github.com/Knotable/knotel-rooms/blob/Feature/card%2313/webapp/client/components/room-filter.jsx#L3)

7. To learn more about the React inline style approach see [this video](https://youtu.be/ERB1TJBn32c) or [this SO answer](http://stackoverflow.com/questions/26882177/react-js-inline-style-best-practices#answer-31638988)

8. Javascript code style guide that we follow and enforce with our automatic linter: https://github.com/Knotable/node-style-guide.
  To lint before pushing to the repo, use `tools/lint-pr.sh` script. It will highglight what's needed to be fixed.
  Our linter can fix some lints automatically. Use `tools/fix.sh` to automatically fix what's possible.
  There are few rules overrides: lines can contain up to 130 characters and `if` blocks can be used without curly braces.

9. Don't use the color values directly (excluding #000 and #FFF). Use [webapp/imports/ui/knotelTheme.js](http://github.com/Knotable/knotel-rooms/blob/master/webapp/imports/ui/knotelTheme.js) for color values. You can use material-ui's colors or define custom in knotelThemes.rawTheme.extraColors. A color can be easily imported into the inline styles. And you can pass it automatically as a context to component tree using childContextTypes and getChildContext. Any component in the subtree can access it if contextTypes is defined. To learn more about passing info automatically through a tree see [this article](https://facebook.github.io/react/docs/context.html).

10. Follow camelCase for mongodb collection name. e.g.

  ```
  const DeactivatedUsers = new Mongo.Collection('deactivatedUsers');
  ```

## Dates

### Birthdays

We use javascript Date type to store birthday. Birthday stores in UTC timezone with 0 hours, 0 minutes & 0 seconds. Web browsers automatically converts any UTC Date to local time zone, So to display birthday locally on any UI, You must first convert the Date to UTC and then display birthday. Convert & display using momentJs:

``moment.utc(user.profile.birthday).format('MMMM, D')``

Or using pure javascript

```
user.profile.birthday.getUTCDate()
user.profile.birthday.getUTCMonth()
user.profile.birthday.getUTCFullYear()
```


##  Guidelines, Best practices, Resources

  1. [Following TODO App (Meteor+React)](https://github.com/meteor/todos/tree/react) is the best example of how to use Meteor with React, how to architecture the app, it has well written code for basic fundamentals like creating API with Meteor1.4, routing, components vs containers vs pages.

  2.  Official [Guide Section](https://facebook.github.io/react/docs/why-react.html) and [Tips Section](https://facebook.github.io/react/tips/introduction.html) of react docs describes the basic fundamentals of React components, Separation of Concerns, Reusability. These docs has everything that we need to know about creating well optimized and reusable components. MUST READ.

  3. Following [react/jsx guideline](https://github.com/airbnb/javascript/tree/master/react) from Airbnb has some best practices for working with react+jsx. Such as Always use ref callbacks, React.createClass vs stateless components. It's worth to mention the following [javascript/es6 guideline](https://github.com/airbnb/javascript) from Airbnb that has ultimate examples of how to write better code using ES6 syntaxes.
