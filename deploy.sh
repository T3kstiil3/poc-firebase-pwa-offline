#!/usr/bin/env sh

# abort on errors
set -e

# build
ionic build --prod -- --base-href /poc-ionic-firebase-pwa-offline/

git add www
git commit -m 'deploy ✨🚀'

git subtree push --prefix www origin gh-pages