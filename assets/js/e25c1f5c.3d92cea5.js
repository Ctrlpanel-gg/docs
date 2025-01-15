"use strict";(self.webpackChunkctrlpanel=self.webpackChunkctrlpanel||[]).push([[9906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={sidebar_position:5},i="Updating",l={unversionedId:"Installation/updating",id:"version-0.9.1/Installation/updating",title:"Updating",description:"This guide is for updates 0.9.0 -> 0.9.X",source:"@site/versioned_docs/version-0.9.1/Installation/updating.md",sourceDirName:"Installation",slug:"/Installation/updating",permalink:"/docs/0.9.1/Installation/updating",draft:!1,editUrl:"https://github.com/Ctrlpanel-gg/docs/tree/main/versioned_docs/version-0.9.1/Installation/updating.md",tags:[],version:"0.9.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/0.9.1/Installation/troubleshooting"},next:{title:"Contributing",permalink:"/docs/0.9.1/Contributing/"}},s={},p=[{value:"Enable Maintenance Mode",id:"enable-maintenance-mode",level:3},{value:"Pulling the New Files",id:"pulling-the-new-files",level:3},{value:"Update Dependencies",id:"update-dependencies",level:3},{value:"Updating the Database",id:"updating-the-database",level:3},{value:"Clear Compiled Template Cache",id:"clear-compiled-template-cache",level:3},{value:"Set Permissions",id:"set-permissions",level:3},{value:"Restarting Queue Workers",id:"restarting-queue-workers",level:3},{value:"Disable Maintenance Mode",id:"disable-maintenance-mode",level:3},{value:"Disclaimer",id:"disclaimer",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updating"},"Updating"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide is for updates 0.9.0 -> 0.9.X\nIf you update from 0.8.X or older, please follow our 0.9 update guide which can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.9/Installation/updating"},"here"))),(0,r.kt)("h3",{id:"enable-maintenance-mode"},"Enable Maintenance Mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/controlpanel\nsudo php artisan down\n")),(0,r.kt)("h3",{id:"pulling-the-new-files"},"Pulling the New Files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo git stash\nsudo git pull\nsudo chmod -R 755 /var/www/controlpanel\n")),(0,r.kt)("h3",{id:"update-dependencies"},"Update Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo composer install --no-dev --optimize-autoloader\n")),(0,r.kt)("h3",{id:"updating-the-database"},"Updating the Database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan migrate --seed --force\n")),(0,r.kt)("h3",{id:"clear-compiled-template-cache"},"Clear Compiled Template Cache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan view:clear\nsudo php artisan config:clear\n")),(0,r.kt)("h3",{id:"set-permissions"},"Set Permissions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nsudo chown -R www-data:www-data /var/www/controlpanel/\n\n# If using NGINX on CentOS:\nsudo chown -R nginx:nginx /var/www/controlpanel/\n\n# If using Apache on CentOS\nsudo chown -R apache:apache /var/www/controlpanel/\n")),(0,r.kt)("h3",{id:"restarting-queue-workers"},"Restarting Queue Workers"),(0,r.kt)("p",null,"After every update, you should restart the queue worker to ensure that the new code is loaded in and used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan queue:restart\n")),(0,r.kt)("h3",{id:"disable-maintenance-mode"},"Disable Maintenance Mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan up\n")),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,"Warning, The dashboard is currently in pre-release and may contain some bugs \ud83d\udc1b ",(0,r.kt)("br",null),"\nUse This dashboard at your own risk."),(0,r.kt)("p",null,"If you notice any bugs or would like something to be improved or added, let us know by making a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ControlPanel-gg/dashboard/issues/new/choose"},"GitHub Issue"),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"for any major security risk, contact")," ",(0,r.kt)("em",{parentName:"p"},"1Day2Die#6718")))}d.isMDXComponent=!0}}]);