"use strict";(self.webpackChunkctrlpanel=self.webpackChunkctrlpanel||[]).push([[910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:4},o=void 0,s={unversionedId:"Contributing/CTRLPanel Test",id:"version-1.0/Contributing/CTRLPanel Test",title:"CTRLPanel Test",description:"Please only use CTRLPanel installations that are not modifyed by plugins/modules/scripts or themes.",source:"@site/versioned_docs/version-1.0/Contributing/CTRLPanel Test.md",sourceDirName:"Contributing",slug:"/Contributing/CTRLPanel Test",permalink:"/docs/Contributing/CTRLPanel Test",draft:!1,editUrl:"https://github.com/Ctrlpanel-gg/panel/versioned_docs/version-1.0/Contributing/CTRLPanel Test.md",tags:[],version:"1.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-1.0/tutorialSidebar",previous:{title:"Translating",permalink:"/docs/Contributing/translate"},next:{title:"Products",permalink:"/docs/Guides/products"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Instructions",id:"instructions",level:3},{value:"Testing",id:"testing",level:2},{value:"CLI",id:"cli",level:3},{value:"UI",id:"ui",level:3},{value:"Write your own tests",id:"write-your-own-tests",level:2},{value:"Simple rules",id:"simple-rules",level:3},{value:"Make the test",id:"make-the-test",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please only use CTRLPanel installations that are not modifyed by plugins/modules/scripts or themes.")),(0,a.kt)("p",null,"This repository is using the playwright framework to provide E2E to help developers of the project to speed up development and provide a more stable and secure product.",(0,a.kt)("br",{parentName:"p"}),"\n","In case you wanna help by adding some tests, playwright got a awsome documentaion ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"here")," but here are some basics we already took care of so you can start right away.  "),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A setup version of CTRLPanel with the version you wanna test  "),(0,a.kt)("li",{parentName:"ul"},"A admin account & a user account on this panel  "),(0,a.kt)("li",{parentName:"ul"},"Basic knowlage of JS (or TS)"),(0,a.kt)("li",{parentName:"ul"},"NodeJS 18+  ")),(0,a.kt)("h3",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"1: clone ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ctrlpanel-gg/ctrlpanel-tests"},"this")," repo",(0,a.kt)("br",{parentName:"p"}),"\n","2: run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," to install modules",(0,a.kt)("br",{parentName:"p"}),"\n","3: run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright install")," to install playwright browsers",(0,a.kt)("br",{parentName:"p"}),"\n","4: rename .env.example to .env",(0,a.kt)("br",{parentName:"p"}),"\n","5: populate .env with your data",(0,a.kt)("br",{parentName:"p"}),"\n","6: you are ready to go  "),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\xb4npx playwright test"),"  "),(0,a.kt)("h3",{id:"ui"},"UI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright test --ui"),"  "),(0,a.kt)("h2",{id:"write-your-own-tests"},"Write your own tests"),(0,a.kt)("h3",{id:"simple-rules"},"Simple rules"),(0,a.kt)("p",null,"Because you need to be logged in for almost everything, we already took care of this.",(0,a.kt)("br",{parentName:"p"}),"\n","Playwright tests are loaded by regex matches.",(0,a.kt)("br",{parentName:"p"}),"\n","To create a test that runs on a user account, name it like so:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[What is the test testing].[Permissions].[What is this file].js  \n")),(0,a.kt)("p",null,"So for example: ",(0,a.kt)("strong",{parentName:"p"},"server.user.test.js")," (Testing servers, with a user account, and its a test)",(0,a.kt)("br",{parentName:"p"}),"\n","We setup a ",(0,a.kt)("em",{parentName:"p"},"admin")," and ",(0,a.kt)("em",{parentName:"p"},"user")," test env this way.   "),(0,a.kt)("h3",{id:"make-the-test"},"Make the test"),(0,a.kt)("p",null,"Playwright comes with a codegen funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright codegen"),".",(0,a.kt)("br",{parentName:"p"}),"\n","With this its easy to get the selection of elements you want quickly and then write the test."))}c.isMDXComponent=!0}}]);