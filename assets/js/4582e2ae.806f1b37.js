"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[6501],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(3117),r=(t(7294),t(3905));const o={sidebar_position:5},i="Updating",l={unversionedId:"Installation/updating",id:"version-0.9/Installation/updating",title:"Updating",description:"Make sure you upgrade your PHP version to 8.1 before updating to v0.9 or higher.",source:"@site/versioned_docs/version-0.9/Installation/updating.md",sourceDirName:"Installation",slug:"/Installation/updating",permalink:"/docs/0.9/Installation/updating",draft:!1,editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/versioned_docs/version-0.9/Installation/updating.md",tags:[],version:"0.9",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-0.9/tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/0.9/Installation/troubleshooting"},next:{title:"Contributing",permalink:"/docs/0.9/Contributing/"}},s={},p=[{value:"Enable Maintenance Mode",id:"enable-maintenance-mode",level:3},{value:"Pulling the New Files",id:"pulling-the-new-files",level:3},{value:"Update Dependencies",id:"update-dependencies",level:3},{value:"Updating the Database",id:"updating-the-database",level:3},{value:"Clear Compiled Template Cache",id:"clear-compiled-template-cache",level:3},{value:"Set Permissions",id:"set-permissions",level:3},{value:"Restarting Queue Workers",id:"restarting-queue-workers",level:3},{value:"Disable Maintenance Mode",id:"disable-maintenance-mode",level:3},{value:"Disclaimer",id:"disclaimer",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updating"},"Updating"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you upgrade your PHP version to 8.1 before updating to v0.9 or higher."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt -y install php8.1 php8.1-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip}\napt -y install php8.1-intl\n")),(0,r.kt)("p",{parentName:"admonition"},"And don\xb4t forget to change the php version in your nginx/apache config files."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/nginx/sites-available/\nnano controlpanel.conf\nsystemctl restart nginx\n")),(0,r.kt)("p",{parentName:"admonition"},"Also check your queue worker config file.\nExecStart=/usr/bin/php needs to point to your php 8.1 binary. You can check the version with /usr/bin/php -v "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/systemd/system/\nnano controlpanel.service\n"))),(0,r.kt)("h3",{id:"enable-maintenance-mode"},"Enable Maintenance Mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/controlpanel\nsudo php artisan down\n")),(0,r.kt)("h3",{id:"pulling-the-new-files"},"Pulling the New Files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo git stash\nsudo git pull\nsudo chmod -R 755 /var/www/controlpanel\n")),(0,r.kt)("h3",{id:"update-dependencies"},"Update Dependencies"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please delete your old vendor folder before running the composer command."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /var/www/controlpanel/vendor\n"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure composer actualy uses php 8.1 and not longer 8.0!"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo composer install --no-dev --optimize-autoloader\n"))),(0,r.kt)("h3",{id:"updating-the-database"},"Updating the Database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan migrate --seed --force\n")),(0,r.kt)("h3",{id:"clear-compiled-template-cache"},"Clear Compiled Template Cache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan view:clear\nsudo php artisan config:clear\n")),(0,r.kt)("h3",{id:"set-permissions"},"Set Permissions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nsudo chown -R www-data:www-data /var/www/controlpanel/\n\n# If using NGINX on CentOS:\nsudo chown -R nginx:nginx /var/www/controlpanel/\n\n# If using Apache on CentOS\nsudo chown -R apache:apache /var/www/controlpanel/\n")),(0,r.kt)("h3",{id:"restarting-queue-workers"},"Restarting Queue Workers"),(0,r.kt)("p",null,"After every update, you should restart the queue worker to ensure that the new code is loaded in and used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan queue:restart\n")),(0,r.kt)("h3",{id:"disable-maintenance-mode"},"Disable Maintenance Mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo php artisan up\n")),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,"Warning, The dashboard is currently in pre-release and may contain some bugs \ud83d\udc1b ",(0,r.kt)("br",null),"\nUse This dashboard at your own risk."),(0,r.kt)("p",null,"If you notice any bugs or would like something to be improved or added, let us know by making a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ControlPanel-gg/dashboard/issues/new/choose"},"GitHub Issue"),(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"for any major security risk, contact")," ",(0,r.kt)("em",{parentName:"p"},"1Day2Die#6718")))}c.isMDXComponent=!0}}]);