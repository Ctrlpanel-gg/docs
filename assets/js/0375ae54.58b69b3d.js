"use strict";(self.webpackChunkctrlpanel=self.webpackChunkctrlpanel||[]).push([[8858],{2718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>h});var a=t(3117),o=(t(7294),t(3905)),l=t(3901),i=t(4866),r=t(5162),s=t(4996);const p={sidebar_position:1},c="Getting started",u={unversionedId:"Installation/getting-started",id:"version-0.9.1/Installation/getting-started",title:"Getting started",description:"It is recommended that you have some sort of Linux and MariaDB experience before installing this.",source:"@site/versioned_docs/version-0.9.1/Installation/getting-started.md",sourceDirName:"Installation",slug:"/Installation/getting-started",permalink:"/docs/0.9.1/Installation/getting-started",draft:!1,editUrl:"https://github.com/Ctrlpanel-gg/docs/tree/main/versioned_docs/version-0.9.1/Installation/getting-started.md",tags:[],version:"0.9.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.9.1/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/0.9.1/intro"},next:{title:"Additional Configuration",permalink:"/docs/0.9.1/Installation/additional-configuration"}},d={},h=[{value:"Dependencies",id:"dependencies",level:2},{value:"Example Dependency Installation",id:"example-dependency-installation",level:3},{value:"Extra Dependency Used on this Dashboard",id:"extra-dependency-used-on-this-dashboard",level:3},{value:"Installing Composer",id:"installing-composer",level:3},{value:"Download Files",id:"download-files",level:2},{value:"Database Setup",id:"database-setup",level:2},{value:"Installing \u0421omposer Packages",id:"installing-\u0441omposer-packages",level:2},{value:"Web Server Configuration",id:"web-server-configuration",level:2},{value:"Setting up the Web Server",id:"setting-up-the-web-server",level:3},{value:"Set Permissions",id:"set-permissions",level:3},{value:"Queue Listeners",id:"queue-listeners",level:2},{value:"Crontab Configuration",id:"crontab-configuration",level:3},{value:"Create Queue Worker",id:"create-queue-worker",level:3},{value:"Navigate to the installer",id:"navigate-to-the-installer",level:4}],m={toc:h};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended that you have some sort of Linux and MariaDB experience before installing this.\nThis guide requires you to already have a working pterodactyl installation.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Ctrlpanel is still being developed to this day! We have not released our v1.0.0 just yet. You may encounter bugs. If you do, please report them ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ctrlpanel-gg/panel/issues"},"here"))),(0,o.kt)(l.Z,{toc:h,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP ",(0,o.kt)("inlineCode",{parentName:"li"},"8.3")," with the following extensions: ",(0,o.kt)("inlineCode",{parentName:"li"},"cli"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"openssl"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"gd"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mysql"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PDO"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mbstring"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenizer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"bcmath"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"xml")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"dom"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"curl"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"zip"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"fpm")," if you are planning to use NGINX."),(0,o.kt)("li",{parentName:"ul"},"MySQL ",(0,o.kt)("inlineCode",{parentName:"li"},"5.7.22")," or higher (MySQL ",(0,o.kt)("inlineCode",{parentName:"li"},"8")," recommended) ",(0,o.kt)("strong",{parentName:"li"},"or")," MariaDB ",(0,o.kt)("inlineCode",{parentName:"li"},"10.2")," or higher."),(0,o.kt)("li",{parentName:"ul"},"A web server (Apache, NGINX, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"curl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"composer"))),(0,o.kt)("h3",{id:"example-dependency-installation"},"Example Dependency Installation"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you already have Pterodactyl installed, please check that you also install PHP 8.3!")),(0,o.kt)("p",null,"The commands below are simply an example of how you might install these dependencies. Please consult with your\noperating system's package manager to determine the correct packages to install."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Add "add-apt-repository" command\napt -y install software-properties-common curl apt-transport-https ca-certificates gnupg\n\n# Add additional repositories for PHP (Ubuntu 20.04 and Ubuntu 22.04)\nLC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php\n\n# MariaDB repo setup script (Ubuntu 20.04)\ncurl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash\n\n# Update repositories list\napt update\n\n# Install Dependencies\napt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx git\n')),(0,o.kt)("h3",{id:"extra-dependency-used-on-this-dashboard"},"Extra Dependency Used on this Dashboard"),(0,o.kt)("p",null,"You need to install this, use the appropriate PHP version (php -v)\nExtra dependency used for handling currency's"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt -y install php8.3-intl\n")),(0,o.kt)("h3",{id:"installing-composer"},"Installing Composer"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you already have Pterodactyl installed, you can skip this step!")),(0,o.kt)("p",null,"Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll\nneed composer installed before continuing in this process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer\n")),(0,o.kt)("h2",{id:"download-files"},"Download Files"),(0,o.kt)("p",null,"The first step in this process is to create the folder where the panel will live and then move ourselves into that\nnewly created folder. Below is an example of how to perform this operation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/controlpanel && cd /var/www/controlpanel\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Ctrlpanel-gg/panel.git ./\n")),(0,o.kt)("h2",{id:"database-setup"},"Database Setup"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You will need a database setup and a database user with the correct permissions created for that database before\ncontinuing any further.")),(0,o.kt)("p",null,"To make a database and database user, you can follow this guide.\nThis is for MariaDB. Please change the USE_YOUR_OWN_PASSWORD part to your password. Also, 127.0.0.1 is for localhost. Please have basic knowledge of Linux before attempting this. Use at your own responsibility."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\nCREATE DATABASE controlpanel;\nCREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nEXIT;\n")),(0,o.kt)("h2",{id:"installing-\u0441omposer-packages"},"Installing \u0421omposer Packages"),(0,o.kt)("p",null,"First, we will have to install all composer packages.\nFor this, run the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader\n")),(0,o.kt)("h2",{id:"web-server-configuration"},"Web Server Configuration"),(0,o.kt)("p",null,"This is a basic NGINX configuration. Please replace any ",(0,o.kt)("inlineCode",{parentName:"p"},"<domain>")," placeholders with your domain name being used. Since NGINX is being used, we will put our configuration (",(0,o.kt)("inlineCode",{parentName:"p"},"ctrlpanel.conf"),") in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/"),", or \u2014 if on CentOS, ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/.")),(0,o.kt)("h3",{id:"setting-up-the-web-server"},"Setting up the Web Server"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"nginx-ssl",label:"Nginx With SSL",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"   Before we touch anything with NGINX, we first have to generate our SSL certificates. Make sure your domain you're using for your Ctrlpanel setup has a A record pointed at your IPv4 for your machine and is not proxied. Run the following commands to start the installation for SSL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install certbot\nsudo apt install python3-certbot-nginx\n")),(0,o.kt)("p",null,"   Once the installation is complete, you now need to generate the SSL certificates. To do so, run the following command below. Replace any ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR.DOMAIN.HERE")," placeholders with the domain you're using for your Ctrlpanel setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"certbot certonly --nginx -d YOUR.DOMAIN.HERE\n")),(0,o.kt)("p",null,"   It will save all certificates to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/YOUR.DOMAIN.HERE/"),"."),(0,o.kt)("p",null,"   Now that SSL is ready to be used, let's setup NGINX. To do so, run the following command below to get rid of NGINX's default configuration and to avoid any other errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm /etc/nginx/sites-enabled/default\n")),(0,o.kt)("p",null,"   Once done, we now have to open the NGINX configuration file. This depends on your OS."),(0,o.kt)("p",null,"   Debian/Ubuntu Based OSes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nginx/sites-available/ctrlpanel.conf\n")),(0,o.kt)("p",null,"   RHEL, CentOS, Rocky Linux, or AlmaLinux based OSes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nginx/conf.d/ctrlpanel.conf\n")),(0,o.kt)("p",null,"   There, you want to paste in the configuration which is stated below. Be sure to change any ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR.DOMAIN.HERE")," placeholders with your Ctrlpanel setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n    # Replace YOUR.DOMAIN.HERE with your domain.\n    listen 80;\n    server_name YOUR.DOMAIN.HERE;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    # Replace YOUR.DOMAIN.HERE with your domain.\n    listen 443 ssl http2;\n    server_name YOUR.DOMAIN.HERE;\n\n    root /var/www/controlpanel/public;\n    index index.php;\n\n    access_log /var/log/nginx/ctrlpanel.app-access.log;\n    error_log  /var/log/nginx/ctrlpanel.app-error.log error;\n\n    # Allow large upload sizes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration - Replace any YOUR.DOMAIN.HERE with the domain you\'re     using for         your Ctrlpanel setup.\n    ssl_certificate /etc/letsencrypt/live/YOUR.DOMAIN.HERE/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/YOUR.DOMAIN.HERE/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers           "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-     CM-SHA38     4:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20       POLY1305  :DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.3-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')),(0,o.kt)("p",null,"   ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("font",{size:"5"},"Enable Configuration"))),(0,o.kt)("p",null,"   The last step is to enable the NGINX configuration. To do that, we have to restart it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# You do not need to symlink this file if you are using CentOS.\nsudo ln -s /etc/nginx/sites-available/ctrlpanel.conf /etc/nginx/sites-enabled/ctrlpanel.conf\n\n# Check for nginx errors\nsudo nginx -t\n\n# You need to restart nginx regardless of OS. only do this you haven't received any errors\nsystemctl restart nginx\n"))),(0,o.kt)(r.Z,{value:"nginx-nossl",label:"Nginx Without SSL",mdxType:"TabItem"},(0,o.kt)("p",null,"   Before we setup the configuration, we must delete NGINX's example configuration. To do so, run the following command below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm /etc/nginx/sites-enabled/default\n")),(0,o.kt)("p",null,"   Once done, we now have to open the NGINX configuration file. This depends on your OS."),(0,o.kt)("p",null,"   Debian/Ubuntu Based OSes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nginx/sites-available/ctrlpanel.conf\n")),(0,o.kt)("p",null,"   RHEL, CentOS, Rocky Linux, or AlmaLinux based OSes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nginx/conf.d/ctrlpanel.conf\n")),(0,o.kt)("p",null,"   There, you want to paste in the configuration which is stated below. Be sure to change any ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR.DOMAIN.HERE")," placeholders with your Ctrlpanel setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n     # Replace YOUR.DOMAIN.HERE with your domain.\n     listen 80;\n     server_name YOUR.DOMAIN.HERE;\n \n     root /var/www/controlpanel/public;\n     index index.html index.htm index.php;\n     charset utf-8;\n \n     location / {\n         try_files $uri $uri/ /index.php?$query_string;\n     }\n \n     location = /favicon.ico { access_log off; log_not_found off; }\n     location = /robots.txt  { access_log off; log_not_found off; }\n \n     access_log off;\n     error_log  /var/log/nginx/ctrlpanel.app-error.log error;\n \n     # Allow larger upload sizes\n     client_max_body_size 100m;\n     client_body_timeout 120s;\n \n     sendfile off;\n \n     location ~ \\.php$ {\n         fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n         fastcgi_pass unix:/run/php/php8.3-fpm.sock;\n         fastcgi_index index.php;\n         include fastcgi_params;\n         fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n         fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n         fastcgi_param HTTP_PROXY "";\n         fastcgi_intercept_errors off;\n         fastcgi_buffer_size 16k;\n         fastcgi_buffers 4 16k;\n         fastcgi_connect_timeout 300;\n         fastcgi_send_timeout 300;\n         fastcgi_read_timeout 300;\n     }\n \n     location ~ /\\.ht {\n         deny all;\n     }\n }\n')),(0,o.kt)("p",null,"   ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("font",{size:"5"},"Enable Configuration"))),(0,o.kt)("p",null,"   The last step is to enable the NGINX configuration. To do that, we have to restart it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# You do not need to symlink this file if you are using CentOS.\nsudo ln -s /etc/nginx/sites-available/ctrlpanel.conf /etc/nginx/sites-enabled/ctrlpanel.conf\n\n# Check for nginx errors\nsudo nginx -t\n\n# You need to restart nginx regardless of OS. only do this you haven't received any errors\nsystemctl restart nginx\n"))),(0,o.kt)(r.Z,{value:"apache-ssl",label:"Apache With SSL",mdxType:"TabItem"},(0,o.kt)("p",null,"   Before we setup the configuration, we have to delete Apache's default configuration. Run the command below to delete it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"a2dissite 000-default.conf\n")),(0,o.kt)("p",null,"   Once done, we now have to open the NGINX configuration file. This depends on your OS."),(0,o.kt)("p",null,"   Debian/Ubuntu Based OSes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/apache2/sites-available/ctrlpanel.conf\n")),(0,o.kt)("p",null,"   RHEL, CentOS, Rocky Linux, or AlmaLinux based OSes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/httpd/conf.d/ctrlpanel.conf\n")),(0,o.kt)("p",null,"   There, you want to paste in the configuration which is stated below. Be sure to change any ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR.DOMAIN.HERE")," placeholders with your Ctrlpanel setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'<VirtualHost *:80>\n     # Replace YOUR.DOMAIN.HERE with your domain.\n     ServerName YOUR.DOMAIN.HERE\n \n     RewriteEngine On\n     RewriteCond %{HTTPS} !=on\n     RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] \n </VirtualHost>\n \n <VirtualHost *:443>\n     # Replace YOUR.DOMAIN.HERE with your domain.\n     ServerName YOUR.DOMAIN.HERE\n     DocumentRoot "/var/www/controlpanel/public"\n \n     AllowEncodedSlashes On\n \n     php_value upload_max_filesize 100M\n     php_value post_max_size 100M\n \n     <Directory "/var/www/controlpanel/public">\n         Require all granted\n         AllowOverride all\n     </Directory>\n \n     SSLEngine on\n     SSLCertificateFile /etc/letsencrypt/live/YOUR.DOMAIN.HERE/fullchain.pem\n     SSLCertificateKeyFile /etc/letsencrypt/live/YOUR.DOMAIN.HERE/privkey.pem\n </VirtualHost> \n')),(0,o.kt)("p",null,"   ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("font",{size:"5"},"Enable Configuration"))),(0,o.kt)("p",null,"   Now that we've successfully created the configuration file for our web server, the last step is to restart it. ",(0,o.kt)("strong",{parentName:"p"},"NOTE")," This step can be skipped if your OS is based off of RHEL, Rocky Linux, or AlmaLinux."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# You do not need to run any of these commands on RHEL, Rocky Linux, or AlmaLinux\nsudo ln -s /etc/apache2/sites-available/ctrlpanel.conf /etc/apache2/sites-enabled/ctrlpanel.conf\nsudo a2enmod rewrite\nsudo a2enmod ssl\nsudo systemctl restart apache2\n"))),(0,o.kt)(r.Z,{value:"apache-nossl",label:"Apache Without SSL",mdxType:"TabItem"},(0,o.kt)("p",null,"   Before we setup the configuration, we have to delete Apache's default configuration. Run the command below to delete it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"a2dissite 000-default.conf\n")),(0,o.kt)("p",null,"   Once done, we now have to open the NGINX configuration file. This depends on your OS."),(0,o.kt)("p",null,"   Debian/Ubuntu Based OSes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/apache2/sites-available/ctrlpanel.conf\n")),(0,o.kt)("p",null,"   RHEL, CentOS, Rocky Linux, or AlmaLinux based OSes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/httpd/conf.d/ctrlpanel.conf\n")),(0,o.kt)("p",null,"   There, you want to paste in the configuration which is stated below. Be sure to change any ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR.DOMAIN.HERE")," placeholders with your Ctrlpanel setup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```conf\n<VirtualHost *:80>\n    # Replace YOUR.DOMAIN.HERE with your domain.\n    ServerName YOUR.DOMAIN.HERE\n    DocumentRoot "/var/www/controlpanel/public"\n    \n    AllowEncodedSlashes On\n    \n    php_value upload_max_filesize 100M\n    php_value post_max_size 100M\n    \n    <Directory "/var/www/controlpanel/public">\n        AllowOverride all\n        Require all granted\n    </Directory>\n</VirtualHost>\n```\n')),(0,o.kt)("p",null,"   ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("font",{size:"5"},"Enable Configuration"))),(0,o.kt)("p",null,"   Now that we've successfully created the configuration file for our web server, the last step is to restart it. ",(0,o.kt)("strong",{parentName:"p"},"NOTE")," This step can be skipped if your OS is based off of RHEL, Rocky Linux, or AlmaLinux."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# You do not need to run any of these commands on RHEL, Rocky Linux, or AlmaLinux\nsudo ln -s /etc/apache2/sites-available/ctrlpanel.conf /etc/apache2/sites-enabled/ctrlpanel.conf\nsudo a2enmod rewrite\nsudo systemctl restart apache2\n")))),(0,o.kt)("h3",{id:"set-permissions"},"Set Permissions"),(0,o.kt)("p",null,"The last step in the installation process is to set the correct permissions on the Panel files so that the web server can\nuse them correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nchown -R www-data:www-data /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n# If using NGINX on CentOS:\nchown -R nginx:nginx /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n# If using Apache on CentOS\nchown -R apache:apache /var/www/controlpanel/\nchmod -R 755 storage/* bootstrap/cache/\n\n****\n")),(0,o.kt)("p",null,"Once this is done, you should be able to access the dashboard via your web browser."),(0,o.kt)("h2",{id:"queue-listeners"},"Queue Listeners"),(0,o.kt)("h3",{id:"crontab-configuration"},"Crontab Configuration"),(0,o.kt)("p",null,"The first thing we need to do is create a new cron job that runs every minute to process specific Dashboard tasks such as billing users hourly and suspending unpaid servers. To setup crontab, we first have to open it. To do so, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crontab -e\n")),(0,o.kt)("p",null,"If it prompts you for a file editor, choose number 1. Once It's opened, go to a line that doesn't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," in front of it. Then paste in this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1\n")),(0,o.kt)("h3",{id:"create-queue-worker"},"Create Queue Worker"),(0,o.kt)("p",null,"Next, you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible for sending emails and handling many other background tasks for the Dashboard."),(0,o.kt)("p",null,"Create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrlpanel.service")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," with the contents below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Ctrlpanel Queue Worker File\n# ----------------------------------\n\n[Unit]\nDescription=Ctrlpanel Queue Worker\n\n[Service]\n# On some systems the user and group might be different.\n# Some systems use `apache` or `nginx` as the user and group.\nUser=www-data\nGroup=www-data\nRestart=always\nExecStart=/usr/bin/php /var/www/controlpanel/artisan queue:work --sleep=3 --tries=3\nStartLimitBurst=0\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Finally, enable the service and set it to boot on machine start."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now ctrlpanel.service\n")),(0,o.kt)("h4",{id:"navigate-to-the-installer"},"Navigate to the installer"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you see the error ",(0,o.kt)("strong",{parentName:"p"},'"php version: 8.3.6 (minimum required 8.1)"')," on the main installer page, then just ignore it. This is due to the specifics of checking version compatibility. PHP8.3 has been tested and works stably!"),(0,o.kt)("img",{src:(0,s.Z)("/img/userguides/installer-error.png")})),(0,o.kt)("p",null,"To begin installation, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://YOUR_DOMAIN_HERE/install")," and follow the installer instructions."),(0,o.kt)("p",null,"If you encounter problems with the email setup, you can skip it and set it up later."),(0,o.kt)("p",null,"Once the installer has been completed, you will be redirected to the login page. Sign in with your Pterodactyl username/email and the password you set during the installer."))}g.isMDXComponent=!0}}]);