"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3768:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="General Info",l={unversionedId:"v1.x/Packages/general-info",id:"v1.x/Packages/general-info",isDocsHomePage:!1,title:"General Info",description:"What are Packages",source:"@site/docs/v1.x/Packages/general-info.md",sourceDirName:"v1.x/Packages",slug:"/v1.x/Packages/general-info",permalink:"/docs/v1.x/Packages/general-info",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/v1.x/Packages/general-info.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Updating",permalink:"/docs/v1.x/Installation/updating"},next:{title:"Creating a Package",permalink:"/docs/v1.x/Packages/creating-a-package"}},c=[{value:"What are Packages",id:"what-are-packages",children:[]},{value:"Installation",id:"installation",children:[{value:"Navigate to your CP.GG installation",id:"navigate-to-your-cpgg-installation",children:[]},{value:"Run Composer",id:"run-composer",children:[]},{value:"Uninstall a Package",id:"uninstall-a-package",children:[]}]}],s={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-info"},"General Info"),(0,r.kt)("h2",{id:"what-are-packages"},"What are Packages"),(0,r.kt)("p",null,'As a "Package" we declare mostly third-party and some core extentions to Controlpanel.'),(0,r.kt)("p",null,"These Packages can add more functionality to your CPGG installation with ease and without you having to worry about custom code to your core installation."),(0,r.kt)("p",null,"Some ",(0,r.kt)("strong",{parentName:"p"},"Core Packages")," the official CPGG Team offers and maintains are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packagist.org/packages/controlpanel/vouchers"},"Vouchers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packagist.org/packages/1day2die/cpgg-ticketsystem"},"Ticketsystem"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Installing your package and thus extending your Controlpanel installation is extremly simple."),(0,r.kt)("p",null,"All you need for that is "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Name of the package"),(0,r.kt)("li",{parentName:"ul"},"Your Console/Terminal")),(0,r.kt)("h3",{id:"navigate-to-your-cpgg-installation"},"Navigate to your CP.GG installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd /var/www/controlpanel"),"  (this path may differ from your installation)"),(0,r.kt)("h3",{id:"run-composer"},"Run Composer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"composer require <package-name>")),(0,r.kt)("p",null,"for example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"composer require controlpanel/vouchers")," (this would install the vouchers package)"),(0,r.kt)("p",null,"There is nothing more you need to do.\nThe corresponding Package will download and connect to your installation."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some Packages may require you to run ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan migrate"),". ",(0,r.kt)("br",null),"\nThe creator of the Package should have more details to this if required or if more steps are needed"))),(0,r.kt)("h3",{id:"uninstall-a-package"},"Uninstall a Package"),(0,r.kt)("p",null,"To remove a package simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"composer remove <package-name>")))}p.isMDXComponent=!0}}]);