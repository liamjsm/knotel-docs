#!/bin/bash
set -x -e

# set account identity
git config --global user.email "longliangyou@gmail.com"
git config --global user.name "CircleCI"

cd webapp

npm install
MESSAGE="CircleCI[$CIRCLE_BUILD_NUM]:$CIRCLE_SHA1@$CIRCLE_BRANCH[ci skip]"
COMMIT_MESSAGE="$MESSAGE" npm run deploy
