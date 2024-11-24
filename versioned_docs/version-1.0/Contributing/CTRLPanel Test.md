---
sidebar_position: 4
---

:::info

Please only use CTRLPanel installations that are not modifyed by plugins/modules/scripts or themes.

:::

This repository is using the playwright framework to provide E2E to help developers of the project to speed up development and provide a more stable and secure product.    
In case you wanna help by adding some tests, playwright got a awsome documentaion [here](https://playwright.dev/docs/intro) but here are some basics we already took care of so you can start right away.  
  
## Setup  
### Requirements  
- A setup version of CTRLPanel with the version you wanna test  
- A admin account & a user account on this panel  
- Basic knowlage of JS (or TS)
- NodeJS 18+  

### Instructions
1: clone [this](https://github.com/Ctrlpanel-gg/ctrlpanel-tests) repo  
2: run `npm install` to install modules  
3: run `npx playwright install` to install playwright browsers  
4: rename .env.example to .env  
5: populate .env with your data  
6: you are ready to go  
  
## Testing  
### CLI  
`´npx playwright test`  
### UI  
`npx playwright test --ui`  

## Write your own tests
### Simple rules
Because you need to be logged in for almost everything, we already took care of this.  
Playwright tests are loaded by regex matches.    
To create a test that runs on a user account, name it like so:  
```shell
[What is the test testing].[Permissions].[What is this file].js  
```
So for example: **server.user.test.js** (Testing servers, with a user account, and its a test)  
We setup a _admin_ and _user_ test env this way.   

### Make the test
Playwright comes with a codegen funktion `npx playwright codegen`.  
With this its easy to get the selection of elements you want quickly and then write the test.  