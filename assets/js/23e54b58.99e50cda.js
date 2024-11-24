"use strict";(self.webpackChunkctrlpanel=self.webpackChunkctrlpanel||[]).push([[5527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(3743);const l="tableOfContentsInline_prmo";function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return a.createElement("div",{className:l},a.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(3117),r=n(7294),l=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=c(o,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=r.memo(d);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...h}=e;const f=(0,l.L)(),v=m??f.tableOfContents.minHeadingLevel,g=d??f.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return u((0,r.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[s,c,v,g])),r.createElement(p,(0,a.Z)({toc:y,className:n,linkClassName:s},h))}},8753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(3117),r=(n(7294),n(3905)),l=n(4996),i=n(3901);const o={sidebar_position:4},s="Themes",c={unversionedId:"Guides/themes",id:"version-0.9.1/Guides/themes",title:"Themes",description:"Install a theme",source:"@site/versioned_docs/version-0.9.1/Guides/themes.md",sourceDirName:"Guides",slug:"/Guides/themes",permalink:"/docs/0.9.1/Guides/themes",draft:!1,editUrl:"https://github.com/Ctrlpanel-gg/panel/versioned_docs/version-0.9.1/Guides/themes.md",tags:[],version:"0.9.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Adding Translation Files",permalink:"/docs/0.9.1/Guides/translation"},next:{title:"Uninstalling",permalink:"/docs/0.9.1/Guides/uninstalling"}},m={},u=[{value:"Install a theme",id:"install-a-theme",level:2},{value:"Create a theme",id:"create-a-theme",level:2},{value:"Basic setup",id:"basic-setup",level:3},{value:"Bladefiles &amp; layout",id:"bladefiles--layout",level:3},{value:"CSS",id:"css",level:3},{value:"Sharing the theme (Optional)",id:"sharing-the-theme-optional",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"themes"},"Themes"),(0,r.kt)(i.Z,{toc:u,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"install-a-theme"},"Install a theme"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You should always follow the instructions of the theme you want to install. ")),(0,r.kt)("p",null,"Most themes are installed by placing files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/themes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/themes")," folders.  "),(0,r.kt)("p",null,"Then you can select the theme in your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings > system > design")),(0,r.kt)("img",{src:(0,l.Z)("/img/userguides/themes-page.png")}),(0,r.kt)("h2",{id:"create-a-theme"},"Create a theme"),(0,r.kt)("h3",{id:"basic-setup"},"Basic setup"),(0,r.kt)("p",null,"Ctrlpanel.gg uses the module ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/qirolab/laravel-themer"},"laravel-themer"),".",(0,r.kt)("br",{parentName:"p"}),"\n","To start creating your own theme run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"php artisan make:theme\n")),(0,r.kt)("p",null,"This will ask you some basic questions and will setup a base for you to start with.  "),(0,r.kt)("h3",{id:"bladefiles--layout"},"Bladefiles & layout"),(0,r.kt)("p",null,"Now you can find a copy of the original default theme files in the new folder the command above just created.",(0,r.kt)("br",{parentName:"p"}),"\n","You should start by modifying those two files first because those are responsible for the main layout of the dashboard.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/themes/<YourThemeName>/views/layouts/app.blade.php"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/themes/<YourThemeName>/views/layouts/main.blade.php"),"  "),(0,r.kt)("h3",{id:"css"},"CSS"),(0,r.kt)("p",null,"You can create a new folder in ",(0,r.kt)("inlineCode",{parentName:"p"},"/themes/<YourThemeName>/app.css")," with your own custom CSS.",(0,r.kt)("br",{parentName:"p"}),"\n","Import the CSS in your blade files with the following line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-blade"},'<link rel="stylesheet" href="{{ asset(\'themes/<YourThemeName>/app.css\') }}">\n')),(0,r.kt)("p",null,"and remove the line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-blade"},"@vite('themes/default/sass/app.scss')\n")),(0,r.kt)("h3",{id:"sharing-the-theme-optional"},"Sharing the theme (Optional)"),(0,r.kt)("p",null,"Make sure you include both the ",(0,r.kt)("inlineCode",{parentName:"p"},"/themes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/public/themes")," folder and a file to guide other users on how to install your theme.",(0,r.kt)("br",{parentName:"p"}),"\n","Keep the installation instructions as simple as possible and verify you didn\xb4t forget anything, no matter how small the step might seem to you. "),(0,r.kt)("p",null,"You can upload your theme to our ",(0,r.kt)("a",{parentName:"p",href:"https://market.ctrlpanel.gg/"},"Market")," or share it however you like."))}p.isMDXComponent=!0}}]);