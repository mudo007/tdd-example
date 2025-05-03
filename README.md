# node-container-template

## Requirements

- Extensions: Remote Development, Dev Containers, Docker
- cmd + shift +p: Dev Containers: Rebuild and Reopen in container
- test that ssh forward is working inside : ssh -T git@github.com
- remove the program line from the ~/.gitconfig

## Configuring ESLint+ Prettier

- init node (npm init -y)
- create hello world file src/index.ts
- create .gitignore
- npm install --save-dev typescript ts-node
- npm install --save-dev jest ts-jest @types/jest
- npx tsc --init --rootDir src --outDir dist --esModuleInterop true --resolveJsonModule true --lib ES2020,DOM
- npx ts-jest config:init
- npm set-script build "tsc"
- npm set-script test "jest --coverage"
- npm set-script watch:test "jest --watch"
- npm set-script start "node dist/index.js"

## eslint

- npm init @eslint/config@latest (do not add the json linter)
- add the eslint line on the devcontainer.json
- add the capitalized-comments rule

## prettier

- npm install --save-dev --save-exact prettier

- extension esbenp.prettier-vscode
- configure formatter and format on save
- create .prettierrc with tabwidth 4
- create settings for trailingcomma and sameicolons
- create devcontainers settings for formatonsave and defaultformatter

## general

- create the container settings to autosave on window change
- add the poststart command for npm install
- install gitlens

## prettier + eslint

- npm install --save-dev eslint-plugin-prettier eslint-config-prettier
- import eslintPluginPrettier from "eslint-plugin-prettier/recommended"; and add eslintPluginPrettier to the list
- add editor.codeActionsOnSave to settings aa

## talk about cloning inside container
aa
