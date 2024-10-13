---
sidebar_position: 4
---

:::info

Please only use Ctrlpanel installations that are not modifyed by plugins/modules/scripts or themes.

:::

This repository is using the Playwright framework to provide E2E to help developers of the project speed up development and provide a more stable and secure product.    
If you want to support and help us by adding tests, Playwright has some awesome documentation which you can find [here](https://playwright.dev/docs/intro), but below are some provided examples of basic Playwright testing incase you want to skip the documentation.  
  
## Setup  
### Requirements  
- A instance of Ctrlpanel that's already set up.
- A administrator account & client account on your dashboard
- Basic knowledge of JS ([NodeJS](https://nodejs.org)) **OR** TS ([Typescript](https://www.typescriptlang.org/))
- NodeJS v18 or newer

### Instructions
1: Clone [this](https://github.com/Ctrlpanel-gg/ctrlpanel-tests) GitHub repository
2: Run `npm install` to install node modules  
3: Run `npx playwright install` to install Playwright browsers  
4: Rename `.env.example` to `.env`
5: Change your `.env` with your dashboard's information  
6: You're ready to begin testing!
  
## Testing  
### CLI  
` npx playwright test `  
### UI  
` npx playwright test --ui `  

## Start your Tests
### Simple Rules
Because you need to be logged in for almost everything, we already took care of this. Playwright tests are loaded by regex matches.    

To create a test that runs on a user account, name it like so:  
```shell
[What is the test testing].[Permissions].[What is this file].js  
```
For example: **server.user.test.js** (Testing servers using a user account)  

We setup a `admin` and `user` test env this way.   

### Make the test
Playwright comes with a codegen function `npx playwright codegen`.  
When using this it's easy to get the selection of elements and write the test.  

To see Playwright's full documentation, we suggest reading [this](https://playwright.dev/docs/intro) which can help you with developing your tests.