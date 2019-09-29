#! /bin/sh

npm config set registry http://registry.npmjs.org

npm login

npm publish

# npm config set registry https://registry.npm.taobao.org
