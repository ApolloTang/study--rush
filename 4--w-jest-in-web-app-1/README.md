## Quick start

```
  nvm use 14.17.3
  yarn global add @microsoft/rush@5.52.0
  yarn global add pnpm@6.7.1

  rush install
  cd apps/web-app-1/
  rushx dev
```

```
Rush build:watch
```

## Description of this project

This version is a copy of `2--w-project-reference`.
The different is that the ui components (dependencies of web-app-1) are managed by heft and configuration are rigged. 

The rigged setup is model after this study [https://github.com/ApolloTang/study--rush--node-app/tree/main/03-node-apps-w-ts-proj-ref](https://github.com/ApolloTang/study--rush--node-app/tree/main/03-node-apps-w-ts-proj-ref). It was mordify so that it can handle `jsx`.

