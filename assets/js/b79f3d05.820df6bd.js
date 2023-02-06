"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,f=p["".concat(c,".").concat(g)]||p[g]||l[g]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(3117),o=(r(7294),r(3905)),i=r(4996);const a={sidebar_position:1},s="Products",c={unversionedId:"Guides/products",id:"version-0.9.1/Guides/products",title:"Products",description:"With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs.",source:"@site/versioned_docs/version-0.9.1/Guides/products.md",sourceDirName:"Guides",slug:"/Guides/products",permalink:"/docs/Guides/products",draft:!1,editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/versioned_docs/version-0.9.1/Guides/products.md",tags:[],version:"0.9.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Translating",permalink:"/docs/Contributing/translate"},next:{title:"Database backups",permalink:"/docs/Guides/backups"}},u={},d=[{value:"Credits System",id:"credits-system",level:3},{value:"Product Linking",id:"product-linking",level:2},{value:"Information",id:"information",level:3},{value:"Hiding nodes and eggs",id:"hiding-nodes-and-eggs",level:3},{value:"Tips",id:"tips",level:3}],l={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"products"},"Products"),(0,o.kt)("p",null,"With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs.\nYou can check out the pterodactyl server creation page for more information about the specific options like CPU and IO."),(0,o.kt)("img",{src:(0,i.Z)("/img/userguides/product-page.png")}),(0,o.kt)("h3",{id:"credits-system"},"Credits System"),(0,o.kt)("p",null,"Credits are charged hourly based on the monthly price you've configured (price / 30 / 24)\nThis means that the price of your products won\u2019t be charged right away when the user creates a server, but instead, the credits are reduced hourly\u2014giving the user the option to cancel and create servers freely anytime.\nWhen the user runs out of credits, his server will automatically be suspended."),(0,o.kt)("h2",{id:"product-linking"},"Product Linking"),(0,o.kt)("img",{width:"50%",height:"50%",src:(0,i.Z)("/img/userguides/product-linking-example.gif")}),(0,o.kt)("br",null),"Example of making a product for Minecraft servers.",(0,o.kt)("h3",{id:"information"},"Information"),(0,o.kt)("p",null,"Product linking allows you to configure the nodes and eggs this product can be a used on.\nFor example, you have a node that is more powerful than another node, you may most likely want to charge a bit extra for the usage of this node.\nOr you may have a node dedicated for Minecraft hosting and another node for discord bots. Using the node and egg links, you can easily keep your pricing and server creation separated."),(0,o.kt)("h3",{id:"hiding-nodes-and-eggs"},"Hiding nodes and eggs"),(0,o.kt)("p",null,"You can hide specific nodes or eggs from being used by not configuring them in any of your products. This way, they won\u2019t show up in the server creation page and therefore can\u2019t be used by your customers. This is great if you have some nodes or eggs that you want to exclude from Controlpanel."),(0,o.kt)("h3",{id:"tips"},"Tips"),(0,o.kt)("p",null,"If you have a well-configured product, you can use the Copy button to copy the product to create slight variations of it easily :)"))}p.isMDXComponent=!0}}]);