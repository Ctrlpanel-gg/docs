"use strict";(self.webpackChunkctrlpanel=self.webpackChunkctrlpanel||[]).push([[4965],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(a),d=r,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const o={sidebar_position:1},l="General Info",i={unversionedId:"Packages/general-info",id:"Packages/general-info",title:"General Info",description:"What are Packages",source:"@site/docs/Packages/general-info.md",sourceDirName:"Packages",slug:"/Packages/general-info",permalink:"/docs/next/Packages/general-info",draft:!1,editUrl:"https://github.com/Ctrlpanel-gg/panel/docs/Packages/general-info.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Updating",permalink:"/docs/next/Installation/updating"},next:{title:"Creating a Package",permalink:"/docs/next/Packages/creating-a-package"}},c={},p=[{value:"What are Packages",id:"what-are-packages",level:2},{value:"Installation",id:"installation",level:2},{value:"Navigate to your CP.GG installation",id:"navigate-to-your-cpgg-installation",level:3},{value:"Run Composer",id:"run-composer",level:3},{value:"Uninstall a Package",id:"uninstall-a-package",level:3}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-info"},"General Info"),(0,r.kt)("h2",{id:"what-are-packages"},"What are Packages"),(0,r.kt)("p",null,'As a "Package" we declare mostly third-party and some core extentions to Controlpanel.'),(0,r.kt)("p",null,"These Packages can add more functionality to your CPGG installation with ease and without you having to worry about custom code to your core installation."),(0,r.kt)("p",null,"Some ",(0,r.kt)("strong",{parentName:"p"},"Core Packages")," the official CPGG Team offers and maintains are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packagist.org/packages/controlpanel/vouchers"},"Vouchers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packagist.org/packages/1day2die/cpgg-ticketsystem"},"Ticketsystem"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Installing your package and thus extending your Controlpanel installation is extremly simple."),(0,r.kt)("p",null,"All you need for that is "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Name of the package"),(0,r.kt)("li",{parentName:"ul"},"Your Console/Terminal")),(0,r.kt)("h3",{id:"navigate-to-your-cpgg-installation"},"Navigate to your CP.GG installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd /var/www/controlpanel"),"  (this path may differ from your installation)"),(0,r.kt)("h3",{id:"run-composer"},"Run Composer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"composer require <package-name>")),(0,r.kt)("p",null,"for example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"composer require controlpanel/vouchers")," (this would install the vouchers package)"),(0,r.kt)("p",null,"There is nothing more you need to do.\nThe corresponding Package will download and connect to your installation."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some Packages may require you to run ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan migrate"),". ",(0,r.kt)("br",null),"\nThe creator of the Package should have more details to this if required or if more steps are needed")),(0,r.kt)("h3",{id:"uninstall-a-package"},"Uninstall a Package"),(0,r.kt)("p",null,"To remove a package simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"composer remove <package-name>")))}u.isMDXComponent=!0}}]);