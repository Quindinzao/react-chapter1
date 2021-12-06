## Início:
-yarn init -y

## React:
- yarn add react
- yarn add react-dom

## Babel:
- yarn add @babel/core @babel/cli @babel/preset-env -D
- yarn add @babel/preset-react -D
- yarn babel caminho/do/arquivo -o dist/bundle.js
- yarn add babel-loader

## Webpack
- yarn add webpack webpack-cli -D
- yarn add html-webpack-plugin -D
- yarn add webpack-dev-server -D
- yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
- yarn add @babel/preset-typescript -D
- run:
  - yarn webpack serve
  - ## Linux or Mac
    - NODE_ENV=production yarn webpack
  - ## All
    - yarn add cross-env -D

## SCSS
- yarn add node-sass
- yarn add sass-loader

## TypeScript
- yarn add typescript -D
- yarn tsc init
- yarn add @types/react-dom -D