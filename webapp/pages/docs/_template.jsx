import React from 'react'
import { Link } from 'react-router'
import Breakpoint from 'components/Breakpoint'

import find from 'lodash/find'
import filter from 'lodash/filter'
import includes from 'lodash/includes'
import sortBy from 'lodash/sortBy';

import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import typography from 'utils/typography'
const { rhythm } = typography

function sortByFilename(posts) {
  // index.md should be the first post
  return sortBy(posts, post => post.path);
}

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  handleTopicChange (e) {
    return this.context.router.push(e.target.value)
  },

  componentDidMount(){
    const { route, location } = this.props
    // when browse to /docs/, if index.md is not exist or not published
    // redirect to the first(sorted by filename) article of /docs/
    const pages = this.getPublishedPages(route.pages, route.path)
    if (route.path === location.pathname){
      this.context.router.push(pages[0].path);
    }
  },

  getPublishedPages(pages, path){
    return sortByFilename(filter(pages, page => {
      return page.path.startsWith(path) && (page.data.published !== false)
    }));
  },

  render () {
    const { route } = this.props
    const pages = this.getPublishedPages(route.pages, route.path)
    const childPages = pages.map((page) => {
      return {
        title: page.data.title,
        path: page.path,
      }
    })
    const docOptions = childPages.map((child) =>
      <option
        key={prefixLink(child.path)}
        value={prefixLink(child.path)}
      >
        {child.title}
      </option>
    )
    const docPages = childPages.map((child) => {
      const isActive = prefixLink(child.path) === this.props.location.pathname
      return (
        <li
          key={child.path}
          style={{
            marginBottom: rhythm(1/2),
          }}
        >
          <Link
            to={prefixLink(child.path)}
            style={{
              textDecoration: 'none',
            }}
          >
            {isActive ? <strong>{child.title}</strong> : child.title}
          </Link>
        </li>
      )
    })
    return (
      <div>
        <Breakpoint
          mobile
        >
          <div
            style={{
              overflowY: 'auto',
              paddingRight: `calc(${rhythm(1/2)} - 1px)`,
              position: 'absolute',
              width: `calc(${rhythm(8)} - 1px)`,
              borderRight: '1px solid lightgrey',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                marginLeft: 0,
                marginTop: rhythm(1/2),
              }}
            >
              {docPages}
            </ul>
          </div>
          <div
            style={{
              padding: `0 ${rhythm(1)}`,
              paddingLeft: `calc(${rhythm(8)} + ${rhythm(1)})`,
            }}
          >
            {this.props.children}
          </div>
        </Breakpoint>
        <Breakpoint>
          <strong>Topics:</strong>
          {' '}
          <select
            defaultValue={this.props.location.pathname}
            onChange={this.handleTopicChange}
          >
            {docOptions}
          </select>
          <br />
          <br />
          {this.props.children}
        </Breakpoint>
      </div>
    )
  },
})
