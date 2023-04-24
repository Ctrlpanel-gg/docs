"use strict";(self.webpackChunkctrlpanel=self.webpackChunkctrlpanel||[]).push([[1617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(3743);const r="tableOfContentsInline_prmo";function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return a.createElement("div",{className:r},a.createElement(o.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(3117),o=n(7294),r=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){const t=(0,o.useRef)(void 0),n=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),c=s(i,{anchorTopOffset:n.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?o.createElement("ul",{className:r?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const m=o.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:d,...f}=e;const k=(0,r.L)(),h=u??k.tableOfContents.minHeadingLevel,v=d??k.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>i({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return p((0,o.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:v}}),[c,s,h,v])),o.createElement(m,(0,a.Z)({toc:b,className:n,linkClassName:c},f))}},1410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(3117),o=(n(7294),n(3905)),r=n(3901);const l={sidebar_position:2},i="Database backups",c={unversionedId:"Guides/backups",id:"version-0.9.1/Guides/backups",title:"Database backups",description:"All important data is stored in the database. This includes all servers, users, and other information.",source:"@site/versioned_docs/version-0.9.1/Guides/backups.md",sourceDirName:"Guides",slug:"/Guides/backups",permalink:"/docs/Guides/backups",draft:!1,editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/versioned_docs/version-0.9.1/Guides/backups.md",tags:[],version:"0.9.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Products",permalink:"/docs/Guides/products"},next:{title:"Adding translation Files",permalink:"/docs/Guides/translation"}},s={},u=[{value:"How to back up",id:"how-to-back-up",level:3},{value:"How to restore",id:"how-to-restore",level:3},{value:"How to automatically backup",id:"how-to-automatically-backup",level:3},{value:"Appliaction key",id:"appliaction-key",level:2},{value:"Backup the application key",id:"backup-the-application-key",level:3},{value:"Restore the application key",id:"restore-the-application-key",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-backups"},"Database backups"),(0,o.kt)("p",null,"All important data is stored in the database. This includes all servers, users, and other information.",(0,o.kt)("br",{parentName:"p"}),"\n","It's important to keep backups of your database to ensure that you can restore your panel if something goes wrong."),(0,o.kt)(r.Z,{toc:u,mdxType:"TOCInline"}),(0,o.kt)("h3",{id:"how-to-back-up"},"How to back up"),(0,o.kt)("p",null,"You can use MySQL dump to back up your database.",(0,o.kt)("br",{parentName:"p"}),"\n","This command will create a backup file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/controlpanel/")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump -u root -p controlpanel > /var/www/controlpanel/backup.sql\n")),(0,o.kt)("h3",{id:"how-to-restore"},"How to restore"),(0,o.kt)("p",null,"To restore a backup, you need a fresh database. If you already have a database, you can use the following command to drop it."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Warning, this will delete all Controlpanel related data! Make sure your database is backed up before continuing."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mysql -u root -p controlpanel -e "DROP DATABASE controlpanel"\n'))),(0,o.kt)("p",null,"Then you can restore the backup. You can also restore the backup on any other new server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\nCREATE DATABASE controlpanel;\nCREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nexit\nmysql -u root -p controlpanel < /var/www/controlpanel/backup.sql\n")),(0,o.kt)("p",null,"If you have a backup from an older version of ControlPanel, you have to migrate the database to the latest version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/controlpanel\nsudo php artisan migrate --seed --force\n")),(0,o.kt)("h3",{id:"how-to-automatically-backup"},"How to automatically backup"),(0,o.kt)("p",null,"You can automatically back up your database every day at midnight, for example.\nFirst, create a read only user for the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/controlpanel/backups\nmysql -u root -p\nCREATE USER 'controlpanelbackupuser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT LOCK TABLES, SELECT ON controlpanel.* TO 'controlpanelbackupuser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nexit\n")),(0,o.kt)("p",null,"Then create a cronjob to run the following command at midnight.\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"crontab -e")," and add the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"0 0 * * * mysqldump -u controlpanelbackupuser --password=<USE_YOUR_OWN_PASSWORD> --single-transaction --quick --lock-tables=false controlpanel > /var/www/controlpanel/backups-$(date +\\%F).sql\n")),(0,o.kt)("p",null,"This will create a backup at /var/www/controlpanel/backups-$(date +\\%F).sql every day at midnight.\nEvery file will have the date when it was made in the filename, so you can also resolve issues that happened a few days ago."),(0,o.kt)("h2",{id:"appliaction-key"},"Appliaction key"),(0,o.kt)("p",null,"The application key is used to encrypt the data in the database, if its lost you will not be able to decrypt the data in the database."),(0,o.kt)("h3",{id:"backup-the-application-key"},"Backup the application key"),(0,o.kt)("p",null,"To backup the appliaction key you need to get it from the .env file\nyou can get there with this command:\n",(0,o.kt)("inlineCode",{parentName:"p"},"nano /var/www/controlpanel/.env"),"\nkeep this key safe you will need later!"),(0,o.kt)("h3",{id:"restore-the-application-key"},"Restore the application key"),(0,o.kt)("p",null,"After you have reinstalled the panel go back into the .env\n",(0,o.kt)("inlineCode",{parentName:"p"},"nano /var/www/controlpanel/.env"),"\nYou can then change the new key with the old key!"))}d.isMDXComponent=!0}}]);