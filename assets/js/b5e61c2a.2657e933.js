"use strict";(self.webpackChunkctrlpanel=self.webpackChunkctrlpanel||[]).push([[7985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:4},o=void 0,s={unversionedId:"Contributing/CTRLPanel Test",id:"version-0.9.1/Contributing/CTRLPanel Test",title:"CTRLPanel Test",description:"Please only use Ctrlpanel installations that are not modifyed by plugins/modules/scripts or themes.",source:"@site/versioned_docs/version-0.9.1/Contributing/CTRLPanel Test.md",sourceDirName:"Contributing",slug:"/Contributing/CTRLPanel Test",permalink:"/docs/0.9.1/Contributing/CTRLPanel Test",draft:!1,editUrl:"https://github.com/Ctrlpanel-gg/docs/tree/main/versioned_docs/version-0.9.1/Contributing/CTRLPanel Test.md",tags:[],version:"0.9.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Translating",permalink:"/docs/0.9.1/Contributing/translate"},next:{title:"Products",permalink:"/docs/0.9.1/Guides/products"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Instructions",id:"instructions",level:3},{value:"Testing",id:"testing",level:2},{value:"CLI",id:"cli",level:3},{value:"UI",id:"ui",level:3},{value:"Start your Tests",id:"start-your-tests",level:2},{value:"Simple Rules",id:"simple-rules",level:3},{value:"Make the test",id:"make-the-test",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please only use Ctrlpanel installations that are not modifyed by plugins/modules/scripts or themes.")),(0,a.kt)("p",null,"This repository is using the Playwright framework to provide E2E to help developers of the project speed up development and provide a more stable and secure product.",(0,a.kt)("br",{parentName:"p"}),"\n","If you want to support and help us by adding tests, Playwright has some awesome documentation which you can find ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"here"),", but below are some provided examples of basic Playwright testing incase you want to skip the documentation.  "),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A instance of Ctrlpanel that's already set up."),(0,a.kt)("li",{parentName:"ul"},"A administrator account & client account on your dashboard"),(0,a.kt)("li",{parentName:"ul"},"Basic knowledge of JS (",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org"},"NodeJS"),") ",(0,a.kt)("strong",{parentName:"li"},"OR")," TS (",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"Typescript"),")"),(0,a.kt)("li",{parentName:"ul"},"NodeJS v18 or newer")),(0,a.kt)("h3",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"1: Clone ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ctrlpanel-gg/ctrlpanel-tests"},"this")," GitHub repository\n2: Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," to install node modules",(0,a.kt)("br",{parentName:"p"}),"\n","3: Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright install")," to install Playwright browsers",(0,a.kt)("br",{parentName:"p"}),"\n","4: Rename ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," to ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\n5: Change your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," with your dashboard's information",(0,a.kt)("br",{parentName:"p"}),"\n","6: You're ready to begin testing!"),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright test"),"  "),(0,a.kt)("h3",{id:"ui"},"UI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright test --ui"),"  "),(0,a.kt)("h2",{id:"start-your-tests"},"Start your Tests"),(0,a.kt)("h3",{id:"simple-rules"},"Simple Rules"),(0,a.kt)("p",null,"Because you need to be logged in for almost everything, we already took care of this. Playwright tests are loaded by regex matches.    "),(0,a.kt)("p",null,"To create a test that runs on a user account, name it like so:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[What is the test testing].[Permissions].[What is this file].js  \n")),(0,a.kt)("p",null,"For example: ",(0,a.kt)("strong",{parentName:"p"},"server.user.test.js")," (Testing servers using a user account)  "),(0,a.kt)("p",null,"We setup a ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," test env this way.   "),(0,a.kt)("h3",{id:"make-the-test"},"Make the test"),(0,a.kt)("p",null,"Playwright comes with a codegen function ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright codegen"),".",(0,a.kt)("br",{parentName:"p"}),"\n","When using this it's easy to get the selection of elements and write the test.  "),(0,a.kt)("p",null,"To see Playwright's full documentation, we suggest reading ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"this")," which can help you with developing your tests."))}c.isMDXComponent=!0}}]);