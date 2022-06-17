"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[120],{3905:function(t,e,r){r.d(e,{Zo:function(){return h},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},h=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,u=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(u,i(i({ref:e},h),{},{components:r})):a.createElement(u,i({ref:e},h))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(t,e,r){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!a(t)}r.d(e,{Z:function(){return n},b:function(){return a}})},4996:function(t,e,r){r.d(e,{C:function(){return o},Z:function(){return i}});var a=r(2263),n=r(3919);function o(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,p=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(s)return e+r;var h=r.startsWith(e)?r:e+r.replace(/^\//,"");return p?t+h:h}(o,r,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},3873:function(t,e,r){r.d(e,{Z:function(){return s}});var a=r(7294),n=r(6010),o="tableOfContentsInline_0DDH";function i(t){var e=t.toc,r=t.isChild;return e.length?a.createElement("ul",{className:r?"":"table-of-contents"},e.map((function(t){return a.createElement("li",{key:t.id},a.createElement("a",{href:"#"+t.id,dangerouslySetInnerHTML:{__html:t.value}}),a.createElement(i,{isChild:!0,toc:t.children}))}))):null}var s=function(t){var e=t.toc;return a.createElement("div",{className:(0,n.Z)(o)},a.createElement(i,{toc:e}))}},8875:function(t,e,r){r.r(e),r.d(e,{contentTitle:function(){return h},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=r(4996),s=r(3873),l=["components"],p={sidebar_position:2},h=void 0,c={unversionedId:"Third-Party/Programs",id:"Third-Party/Programs",isDocsHomePage:!1,title:"Programs",description:"Third party stuff is not supported by the controlpanel team.",source:"@site/docs/Third-Party/Programs.md",sourceDirName:"Third-Party",slug:"/Third-Party/Programs",permalink:"/docs/Third-Party/Programs",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/Third-Party/Programs.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Themes",permalink:"/docs/Third-Party/Themes"}},d=[{value:"Versions Disclaimer",id:"versions-disclaimer",children:[]},{value:"Discord bot",id:"discord-bot",children:[{value:"Xyter",id:"xyter",children:[]}]},{value:"Software",id:"software",children:[{value:"Grafana Dashboard",id:"grafana-dashboard",children:[]},{value:"Allocations Manager",id:"allocations-manager",children:[]}]},{value:"API Wrappers",id:"api-wrappers",children:[{value:"Typescript",id:"typescript",children:[]},{value:"Javascript",id:"javascript",children:[]}]},{value:"Scripts",id:"scripts",children:[{value:"Transfer pterodactyl users to controlpanel",id:"transfer-pterodactyl-users-to-controlpanel",children:[]}]},{value:"Installers",id:"installers",children:[{value:"Ferks ControlPanel-Installer",id:"ferks-controlpanel-installer",children:[]},{value:"UnrexIstIq&#39;s Controlpanel-Themes Installer",id:"unrexistiqs-controlpanel-themes-installer",children:[]}]}],m={toc:d};function u(t){var e=t.components,r=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Third party stuff is not supported by the controlpanel team.",(0,o.kt)("br",{parentName:"p"}),"\n","You\xb4ll need some basic linux knowledge or ",(0,o.kt)("a",{parentName:"p",href:"https://google.com"},"Google")," to install/use it."))),(0,o.kt)(s.Z,{toc:d,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"versions-disclaimer"},"Versions Disclaimer"),(0,o.kt)("p",null,"The version number next to download is the panel version this program was made for, any newer version might work but is not guaranteed.  "),(0,o.kt)("h2",{id:"discord-bot"},"Discord bot"),(0,o.kt)("h3",{id:"xyter"},"Xyter"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ZynerOrg"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-ZynerOrg-red?style=for-the-badge",alt:"Author - ZynerOrg"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ZynerOrg/xyter"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.7.3-brightgreen?style=for-the-badge",alt:"Repository - 0.7.3"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://xyter.zyner.org"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://bot.zyner.org/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Invite-Official_bot-important?style=for-the-badge&logo=discord",alt:"Invite - Official bot"}))),(0,o.kt)("p",null,"This is a ",(0,o.kt)("a",{parentName:"p",href:"https://discord.js.org/"},"discord.js")," bot that features vouchers from CPGG and is made to be a multi-purpose bot for other stuff too."),(0,o.kt)("h2",{id:"software"},"Software"),(0,o.kt)("h3",{id:"grafana-dashboard"},"Grafana Dashboard"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EBG-PW"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-EBG--PW-red?style=for-the-badge",alt:"Author - EBG-PW"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.7.3-brightgreen?style=for-the-badge",alt:"Repository - 0.7.3"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"}))),(0,o.kt)("p",null,"This is a standalone software that will track statistics using ",(0,o.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InfluxDB")," and ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),"."),(0,o.kt)("img",{src:(0,i.Z)("/img/thirdparty/GrafanaStats.png")}),(0,o.kt)("h3",{id:"allocations-manager"},"Allocations Manager"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/BolverBlitz"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-BolverBlitz-red?style=for-the-badge",alt:"Author - BolverBlitz"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BolverBlitz/ControlpanelAllocationManager"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.7.3-brightgreen?style=for-the-badge",alt:"Repository - 0.7.3"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BolverBlitz/ControlpanelAllocationManager"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"}))),(0,o.kt)("p",null,"This is a standalone software detects if a node is over a certain limit of its allocated resources and will remove the products liked to the node from CPGG."),(0,o.kt)("h2",{id:"api-wrappers"},"API Wrappers"),(0,o.kt)("h3",{id:"typescript"},"Typescript"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/j122j"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-j122j-red?style=for-the-badge",alt:"Author - j122j"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/j122j/controlpanel.gg"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.5.0-brightgreen?style=for-the-badge",alt:"Repository - 0.5.0"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/j122j/controlpanel.gg"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"}))),(0,o.kt)("p",null,"An API wrapper for CPGG built using TypeScript"),(0,o.kt)("h3",{id:"javascript"},"Javascript"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/somerandomcloud"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-somerandomcloud-red?style=for-the-badge",alt:"Author - somerandomcloud"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/somerandomcloud/ControlPanel-Api"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.5.0-brightgreen?style=for-the-badge",alt:"Repository - 0.5.0"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/somerandomcloud/ControlPanel-Api"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"}))),(0,o.kt)("p",null,"An API wrapper for CPGG built using JavaScript"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/DeathHound6"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-DeathHound6-red?style=for-the-badge",alt:"Author - DeathHound6"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DeathHound6/control-panel-api-wrapper"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.5.0-brightgreen?style=for-the-badge",alt:"Repository - 0.5.0"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DeathHound6/control-panel-api-wrapper"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"}))),(0,o.kt)("p",null,"An API wrapper for CPGG built using JavaScript"),(0,o.kt)("h2",{id:"scripts"},"Scripts"),(0,o.kt)("h3",{id:"transfer-pterodactyl-users-to-controlpanel"},"Transfer pterodactyl users to controlpanel"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/EBG-PW"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-EBG--PW-red?style=for-the-badge",alt:"Author - EBG-PW"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.7.3-brightgreen?style=for-the-badge",alt:"Repository - 0.7.3"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"}))),(0,o.kt)("p",null,"This script will move all users from Pterodactyl to CPGG, to make the transition easier.",(0,o.kt)("br",{parentName:"p"}),"\n","If you use the DB backup, it needs permissions for ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/backup.sql")," (run with sudo).",(0,o.kt)("br",{parentName:"p"}),"\n","It will move all users that are not admin in Pterodactyl."),(0,o.kt)("h2",{id:"installers"},"Installers"),(0,o.kt)("h3",{id:"ferks-controlpanel-installer"},"Ferks ControlPanel-Installer"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ferks-FK"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-Ferks--FK-red?style=for-the-badge",alt:"Author - Ferks-FK"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ferks-FK/ControlPanel-Installer"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.7.3-brightgreen?style=for-the-badge",alt:"Repository - 0.7.3"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ferks-FK/ControlPanel-Installer"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"}))),(0,o.kt)("p",null,"This script will install CPGG on your server.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Automatic installation of the CPGG (dependencies, database, cronjob, nginx).  "),(0,o.kt)("li",{parentName:"ul"},"automatic configuration of UFW (firewall for Ubuntu/Debian).  "),(0,o.kt)("li",{parentName:"ul"},"(Optional) automatic configuration of Let's Encrypt.  "),(0,o.kt)("li",{parentName:"ul"},"(Optional) Automatic panel upgrade to a newer version.")),(0,o.kt)("h3",{id:"unrexistiqs-controlpanel-themes-installer"},"UnrexIstIq's Controlpanel-Themes Installer"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/dxrknxs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Author-dxrknxs-red?style=for-the-badge",alt:"Author - dxrknxs"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dxrknxs/Controlpanel-Themes"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Repository-0.7.4-brightgreen?style=for-the-badge",alt:"Repository - 0.7.4"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dxrknxs/Controlpanel-Themes"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-blue?style=for-the-badge",alt:"Documentation"}))),(0,o.kt)("p",null,"With this Script, you can install all now registered Themes.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only works with the newest Version.")))}u.isMDXComponent=!0},6010:function(t,e,r){function a(t){var e,r,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=a(t[e]))&&(n&&(n+=" "),n+=r);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function n(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=a(t))&&(n&&(n+=" "),n+=e);return n}r.d(e,{Z:function(){return n}})}}]);