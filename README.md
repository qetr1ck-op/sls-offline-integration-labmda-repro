Based on the [discussion](https://github.com/dherault/serverless-offline/issues/517)

1. Totally vanila project created by `sls create --template aws-nodejs-typescript` which is based on webpack+tsc precompilation phase
2. Added `serverless-offline` plugin

Steps to introduce:
  - npm i
  - npm start
  - visit `http://localhost:3000/hello-async` for repro bug with async/await handler
  - visit `http://localhost:3000/hello-callback` for repro bug with usual callback handler
