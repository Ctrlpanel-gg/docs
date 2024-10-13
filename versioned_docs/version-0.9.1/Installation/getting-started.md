---
sidebar_position: 1
---

# Getting started

:::info

It is highly recommended that you have some basic Linux expierence and have used MySQL / MariaDB in the past. This will help you significantlly with your setup.

:::

:::warning

Ctrlpanel is still being developed to this day! We have not released our v1.0.0 just yet. You may encounter bugs. If you do, please report them [here](https://github.com/ctrlpanel-gg/panel/issues)

:::

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Dependencies

- PHP `8.3` with the following extensions: `cli`, `openssl`, `gd`, `mysql`, `PDO`, `mbstring`, `tokenizer`, `bcmath`, `xml` or `dom`, `curl`, `zip`, and `fpm` if you are planning to use NGINX.
- MySQL `5.7.22` or higher (MySQL `8` recommended) **or** MariaDB `10.2` or higher.
- A web server (Apache, NGINX, etc.)
- `curl`
- `git`
- `composer`

### Example Dependency Installation

_If you already have Pterodactyl installed, please check that you also install PHP 8.3!_

The commands below are simply an example of how you might install these dependencies. Please consult with your
operating system's package manager to determine the correct packages to install.

```bash
# Add "add-apt-repository" command
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

# Add additional repositories for PHP (Ubuntu 20.04 and Ubuntu 22.04)
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

# MariaDB repo setup script (Ubuntu 20.04)
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

# Update repositories list
apt update

# Install Dependencies
apt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx git
```

### Extra Dependency Used on this Dashboard

You need to install this, use the appropriate PHP version (php -v)
Extra dependency used for handling currency's

```bash
apt -y install php8.3-intl
```

### Installing Composer

_If you already have Pterodactyl installed, you can skip this step!_

Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll
need composer installed before continuing in this process.

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Download Files

The first step in this process is to create the folder where the panel will live and then move ourselves into that
newly created folder. Below is an example of how to perform this operation.

```bash
mkdir -p /var/www/controlpanel && cd /var/www/controlpanel
```

```bash
git clone https://github.com/Ctrlpanel-gg/panel.git ./
```

## Database Setup

:::info
You will need a database setup and a database user with the correct permissions created for that database before
continuing any further.
:::

To make a database and database user, you can follow this guide.
This is for MariaDB. Please change the USE_YOUR_OWN_PASSWORD part to your password. Also, 127.0.0.1 is for localhost. Please have basic knowledge of Linux before attempting this. Use at your own responsibility.

```bash
mysql -u root -p
CREATE DATABASE controlpanel;
CREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';
FLUSH PRIVILEGES;
EXIT;
```

## Installing Сomposer Packages

First, we will have to install all composer packages.
For this, run the following command

```bash
COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader
```

## Web Server Configuration

This is a basic NGINX configuration. Please replace any `<domain>` placeholders with your domain name being used. Since NGINX is being used, we will put our configuration (`ctrlpanel.conf`) in `/etc/nginx/sites-available/`, or — if on CentOS, `/etc/nginx/conf.d/.`

### Setting up the Web Server

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
  <TabItem value="nginx-ssl" label="Nginx With SSL" default>

   Before we touch anything with NGINX, we first have to generate our SSL certificates. Make sure your domain you're using for your Ctrlpanel setup has a A record pointed at your IPv4 for your machine and is not proxied. Run the following commands to start the installation for SSL.

   ```bash
   sudo apt update
   sudo apt install certbot
   sudo apt install python3-certbot-nginx
   ```
   Once the installation is complete, you now need to generate the SSL certificates. To do so, run the following command below. Replace any `YOUR.DOMAIN.HERE` placeholders with the domain you're using for your Ctrlpanel setup.

   ```bash
   certbot certonly --nginx -d YOUR.DOMAIN.HERE
   ```
   It will save all certificates to `/etc/letsencrypt/live/YOUR.DOMAIN.HERE/`.

   Now that SSL is ready to be used, let's setup NGINX. To do so, run the following command below to get rid of NGINX's default configuration and to avoid any other errors.

   ```bash
   rm /etc/nginx/sites-enabled/default
   ```
   Once done, we now have to open the NGINX configuration file. This depends on your OS.

   Debian/Ubuntu Based OSes:
   ```bash
   nano /etc/nginx/sites-avaliable/ctrlpanel.conf
   ```

   RHEL, CentOS, Rocky Linux, or AlmaLinux based OSes:
   ```bash
   nano /etc/nginx/conf.d/ctrlpanel.conf
   ```

   There, you want to paste in the configuration which is stated below. Be sure to change any `YOUR.DOMAIN.HERE` placeholders with your Ctrlpanel setup.

   ```conf
   server {
       # Replace YOUR.DOMAIN.HERE with your domain.
       listen 80;
       server_name YOUR.DOMAIN.HERE;
       return 301 https://$server_name$request_uri;
   }
   
   server {
       # Replace YOUR.DOMAIN.HERE with your domain.
       listen 443 ssl http2;
       server_name YOUR.DOMAIN.HERE;
   
       root /var/www/controlpanel/public;
       index index.php;
   
       access_log /var/log/nginx/ctrlpanel.app-access.log;
       error_log  /var/log/nginx/ctrlpanel.app-error.log error;
   
       # Allow large upload sizes
       client_max_body_size 100m;
       client_body_timeout 120s;
   
       sendfile off;
   
       # SSL Configuration - Replace any YOUR.DOMAIN.HERE with the domain you're     using for         your Ctrlpanel setup.
       ssl_certificate /etc/letsencrypt/live/YOUR.DOMAIN.HERE/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/YOUR.DOMAIN.HERE/privkey.pem;
       ssl_session_cache shared:SSL:10m;
       ssl_protocols TLSv1.2 TLSv1.3;
       ssl_ciphers           "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-     CM-SHA38     4:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20       POLY1305  :DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
       ssl_prefer_server_ciphers on;
   
       # See https://hstspreload.org/ before uncommenting the line below.
       # add_header Strict-Transport-Security "max-age=15768000; preload;";
       add_header X-Content-Type-Options nosniff;
       add_header X-XSS-Protection "1; mode=block";
       add_header X-Robots-Tag none;
       add_header Content-Security-Policy "frame-ancestors 'self'";
       add_header X-Frame-Options DENY;
       add_header Referrer-Policy same-origin;
   
       location / {
           try_files $uri $uri/ /index.php?$query_string;
       }
   
       location ~ \.php$ {
           fastcgi_split_path_info ^(.+\.php)(/.+)$;
           fastcgi_pass unix:/run/php/php8.3-fpm.sock;
           fastcgi_index index.php;
           include fastcgi_params;
           fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
           fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
           fastcgi_param HTTP_PROXY "";
           fastcgi_intercept_errors off;
           fastcgi_buffer_size 16k;
           fastcgi_buffers 4 16k;
           fastcgi_connect_timeout 300;
           fastcgi_send_timeout 300;
           fastcgi_read_timeout 300;
           include /etc/nginx/fastcgi_params;
       }
   
       location ~ /\.ht {
           deny all;
       }
   }
   ```

   ### Enable Configuration

   The last step is to enable the NGINX configuration. To do that, we have to restart it.

   ```bash
   # You do not need to symlink this file if you are using CentOS.
   sudo ln -s /etc/nginx/sites-available/ctrlpanel.conf /etc/nginx/sites-enabled/ctrlpanel.conf

   # Check for nginx errors
   sudo nginx -t

   # You need to restart nginx regardless of OS. only do this you haven't received any errors
   systemctl restart nginx
   ```

  </TabItem>
  <TabItem value="nginx-nossl" label="Nginx Without SSL">

   Before we setup the configuration, we must delete NGINX's example configuration. To do so, run the following command below.

   ```bash
   rm /etc/nginx/sites-enabled/default
   ```
   Once done, we now have to open the NGINX configuration file. This depends on your OS.

   Debian/Ubuntu Based OSes:
   ```bash
   nano /etc/nginx/sites-avaliable/ctrlpanel.conf
   ```

   RHEL, CentOS, Rocky Linux, or AlmaLinux based OSes:
   ```bash
   nano /etc/nginx/conf.d/ctrlpanel.conf
   ```

   There, you want to paste in the configuration which is stated below. Be sure to change any `YOUR.DOMAIN.HERE` placeholders with your Ctrlpanel setup.

   ```conf
   server {
        # Replace YOUR.DOMAIN.HERE with your domain.
        listen 80;
        server_name YOUR.DOMAIN.HERE;
    
        root /var/www/controlpanel/public;
        index index.html index.htm index.php;
        charset utf-8;
    
        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }
    
        location = /favicon.ico { access_log off; log_not_found off; }
        location = /robots.txt  { access_log off; log_not_found off; }
    
        access_log off;
        error_log  /var/log/nginx/ctrlpanel.app-error.log error;
    
        # Allow larger upload sizes
        client_max_body_size 100m;
        client_body_timeout 120s;
    
        sendfile off;
    
        location ~ \.php$ {
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/run/php/php8.3-fpm.sock;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param HTTP_PROXY "";
            fastcgi_intercept_errors off;
            fastcgi_buffer_size 16k;
            fastcgi_buffers 4 16k;
            fastcgi_connect_timeout 300;
            fastcgi_send_timeout 300;
            fastcgi_read_timeout 300;
        }
    
        location ~ /\.ht {
            deny all;
        }
    }
   ```

   ### Enable Configuration

   The last step is to enable the NGINX configuration. To do that, we have to restart it.

   ```bash
   # You do not need to symlink this file if you are using CentOS.
   sudo ln -s /etc/nginx/sites-available/ctrlpanel.conf /etc/nginx/sites-enabled/ctrlpanel.conf

   # Check for nginx errors
   sudo nginx -t

   # You need to restart nginx regardless of OS. only do this you haven't received any errors
   systemctl restart nginx
   ```

  </TabItem>
  <TabItem value="apache-ssl" label="Apache With SSL">

   Before we setup the configuration, we have to delete Apache's default configuration. Run the command below to delete it.

   ```bash
   a2dissite 000-default.conf
   ```
   Once done, we now have to open the NGINX configuration file. This depends on your OS.

   Debian/Ubuntu Based OSes:
   ```bash
   nano /etc/apache2/sites-avaliable/ctrlpanel.conf
   ```

   RHEL, CentOS, Rocky Linux, or AlmaLinux based OSes:
   ```bash
   nano /etc/httpd/conf.d/ctrlpanel.conf
   ```

   There, you want to paste in the configuration which is stated below. Be sure to change any `YOUR.DOMAIN.HERE` placeholders with your Ctrlpanel setup.

   ```conf
   <VirtualHost *:80>
        # Replace YOUR.DOMAIN.HERE with your domain.
        ServerName YOUR.DOMAIN.HERE
    
        RewriteEngine On
        RewriteCond %{HTTPS} !=on
        RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] 
    </VirtualHost>
    
    <VirtualHost *:443>
        # Replace YOUR.DOMAIN.HERE with your domain.
        ServerName YOUR.DOMAIN.HERE
        DocumentRoot "/var/www/controlpanel/public"
    
        AllowEncodedSlashes On
    
        php_value upload_max_filesize 100M
        php_value post_max_size 100M
    
        <Directory "/var/www/controlpanel/public">
            Require all granted
            AllowOverride all
        </Directory>
    
        SSLEngine on
        SSLCertificateFile /etc/letsencrypt/live/YOUR.DOMAIN.HERE/fullchain.pem
        SSLCertificateKeyFile /etc/letsencrypt/live/YOUR.DOMAIN.HERE/privkey.pem
    </VirtualHost> 
   ```

   ### Enable Configuration

   Now that we've successfully created the configuration file for our web server, the last step is to restart it. **NOTE** This step can be skipped if your OS is based off of RHEL, Rocky Linux, or AlmaLinux.

   ```bash
   # You do not need to run any of these commands on RHEL, Rocky Linux, or AlmaLinux
   sudo ln -s /etc/apache2/sites-available/ctrlpanel.conf /etc/apache2/sites-enabled/ctrlpanel.conf
   sudo a2enmod rewrite
   sudo a2enmod ssl
   sudo systemctl restart apache2
   ```

  </TabItem>
  <TabItem value="apache-nossl" label="Apache Without SSL">

   Before we setup the configuration, we have to delete Apache's default configuration. Run the command below to delete it.

   ```bash
   a2dissite 000-default.conf
   ```
   Once done, we now have to open the NGINX configuration file. This depends on your OS.

   Debian/Ubuntu Based OSes:
   ```bash
   nano /etc/apache2/sites-avaliable/ctrlpanel.conf
   ```

   RHEL, CentOS, Rocky Linux, or AlmaLinux based OSes:
   ```bash
   nano /etc/httpd/conf.d/ctrlpanel.conf
   ```

   There, you want to paste in the configuration which is stated below. Be sure to change any `YOUR.DOMAIN.HERE` placeholders with your Ctrlpanel setup.

    ```conf
    <VirtualHost *:80>
        # Replace YOUR.DOMAIN.HERE with your domain.
        ServerName YOUR.DOMAIN.HERE
        DocumentRoot "/var/www/controlpanel/public"
        
        AllowEncodedSlashes On
        
        php_value upload_max_filesize 100M
        php_value post_max_size 100M
        
        <Directory "/var/www/controlpanel/public">
            AllowOverride all
            Require all granted
        </Directory>
    </VirtualHost>
    ```

   ### Enable Configuration

   Now that we've successfully created the configuration file for our web server, the last step is to restart it. **NOTE** This step can be skipped if your OS is based off of RHEL, Rocky Linux, or AlmaLinux.

   ```bash
   # You do not need to run any of these commands on RHEL, Rocky Linux, or AlmaLinux
   sudo ln -s /etc/apache2/sites-available/ctrlpanel.conf /etc/apache2/sites-enabled/ctrlpanel.conf
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

  </TabItem>
</Tabs>

### Set Permissions

The last step in the installation process is to set the correct permissions on the Panel files so that the web server can
use them correctly.

```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data /var/www/controlpanel/
chmod -R 755 storage/* bootstrap/cache/

# If using NGINX on CentOS:
chown -R nginx:nginx /var/www/controlpanel/
chmod -R 755 storage/* bootstrap/cache/

# If using Apache on CentOS
chown -R apache:apache /var/www/controlpanel/
chmod -R 755 storage/* bootstrap/cache/

****
```

Once this is done, you should be able to access the dashboard via your web browser.

## Queue Listeners

### Crontab Configuration

The first thing we need to do is create a new cron job that runs every minute to process specific Dashboard tasks such as billing users hourly and suspending unpaid servers. To setup crontab, run the following commands:

```bash
crontab -e
* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1
```

Paste the second line into the crontable, then save.

### Create Queue Worker

Next, you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible for sending emails and handling many other background tasks for the Dashboard.

Create a file called `ctrlpanel.service` in `/etc/systemd/system` with the contents below.

```bash
# Ctrlpanel Queue Worker File
# ----------------------------------

[Unit]
Description=Ctrlpanel Queue Worker

[Service]
# On some systems the user and group might be different.
# Some systems use `apache` or `nginx` as the user and group.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/controlpanel/artisan queue:work --sleep=3 --tries=3
StartLimitBurst=0

[Install]
WantedBy=multi-user.target
```

Finally, enable the service and set it to boot on machine start.

```bash
sudo systemctl enable --now ctrlpanel.service
```

#### Navigate to the installer
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info

If you see the error **"php version: 8.3.6 (minimum required 8.1)"** on the main installer page, then just ignore it. This is due to the specifics of checking version compatibility. PHP8.3 has been tested and works stably!

<img src={useBaseUrl('/img/userguides/installer-error.png')} />

:::

To begin installation, go to `https://YOUR_DOMAIN_HERE/install` and follow the installer instructions.

If you encounter problems with the email setup, you can skip it and set it up later.

Once the installer has been completed, you will be redirected to the login page. Sign in with your Pterodactyl username/email and the password you set during the installer.
