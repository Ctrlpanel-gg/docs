---
sidebar_position: 1
---

# Getting started
:::warning
**DO NOT USE - DO NOT USE - DO NOT USE - DO NOT USE - DO NOT USE**


THESE DOCS ARE NOT FOR USE AS OF YET.

PLEASE REFER TO THE v0.8 DOCS.

VERSION 1.0 IS NOT RELEASED YET AND THESE DOCS ARE JUST A PLACEHOLDER

:::

:::info

It is recommended that you have some sort of Linux and MariaDB experience before installing this.

:::

:::info

If you already have Controlpanel Installed and want to Upgrade to v1.0 please refer to "Upgrading from v0.8"


:::

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Dependencies

- PHP `8.1` with the following extensions: `cli`, `openssl`, `gd`, `mysql`, `PDO`, `mbstring`, `tokenizer`, `bcmath`, `xml` or `dom`, `curl`, `zip`, and `fpm` if you are planning to use NGINX.
- MySQL `5.7.22` or higher (MySQL `8` recommended) **or** MariaDB `10.2` or higher.
- Redis (`redis-server`)
- A web server (Apache, NGINX, Caddy, etc.)
- `curl`
- `tar`
- `unzip`
- `git`
- `composer` v2

### Example Dependency Installation


The commands below are simply an example of how you might install these dependencies. Please consult with your
operating system's package manager to determine the correct packages to install.

```bash
# Add "add-apt-repository" command
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

# Add additional repositories for PHP, Redis, and MariaDB
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
add-apt-repository -y ppa:chris-lea/redis-server
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

# Update repositories list
apt update

# Add universe repository if you are on Ubuntu 18.04
apt-add-repository universe

# Install Dependencies
apt -y install php8.1 php8.1-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip,intl} mariadb-server nginx tar unzip git redis-server
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
git clone https://github.com/AVMG20/controlpanel.git ./
```


## Basic Setup

Now that all the files have been downloaded we need to configure some core aspects of the Panel.

>**You will need a database setup and a database user with the correct permissions created for that database before**
>**continuing any further.**

### Database Setup

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


## Web server Configuration

You should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called controlpanel.conf and place it in `/etc/nginx/sites-available/`, or — if on CentOS, `/etc/nginx/conf.d/.`

## How to add this config

```
cd /etc/nginx/sites-available/
nano controlpanel.conf
```
### Example Nginx Config

```nginx
server {
        listen 80;
        root /var/www/controlpanel/public;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name YOUR.DOMAIN.COM;

        location / {
                try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```

### Enable Configuration

The final step is to enable your NGINX configuration and restart it.

```bash
# You do not need to symlink this file if you are using CentOS.
sudo ln -s /etc/nginx/sites-available/controlpanel.conf /etc/nginx/sites-enabled/controlpanel.conf

# Check for nginx errors
sudo nginx -t

# You need to restart nginx regardless of OS. only do this you haven't received any errors
systemctl restart nginx
```

### Adding SSL

There are many ways to add SSL to your site. A simple solution is to use Cert bot from Let’s Encrypt. Cert bot will automatically install the certificates for you and keep your SSL certifications up to date!

```bash
sudo apt update
#install certbot for nginx
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
#install certificates
sudo certbot --nginx -d yourdomain.com
```


## Panel Installation

First, we will have to install all composer packages and populate our Database.
For this, navigate into your `/var/www/controlpanel` again and run the following commands

```bash
php artisan key:generate
php artisan migrate --seed --force
php artisan storage:link
composer install --no-dev --optimize-autoloader
```


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

### Connect Pterodactyl

To Connect your Pterodactyl Instance run the following commmand

```bash
cd /var/www/controlpanel
php artisan s:pterodactyl:link
```

This will ask you for your Pterodactyl URL (https://your.ptero.com)<br/>
and also for your Pterodactyl API Key (https://your.ptero.com/admin/api)

**MAKE SURE THE KEY HAS ALL PERMISSIONS SET TO "READ & WRITE"!**

Once your Pterodactyl Instance is successfully connected, we can sync the Nodes, Eggs and Nests by running

```bash
php artisan s:pterodactyl:sync
```

###First admin User
Now lets create yourself! This is easily done by running
```bash
s:user:create
```

The Console will ask for your Pterodactyl ID (which is usually 1). <br/>
You can grab that ID from your Userlist on Pterodactyl<br/>
Input your desired Password and the first user is ready to log-in!

## Queue Listeners

### Crontab Configuration

The first thing we need to do is create a new cron job that runs every minute to process specific Dashboard tasks such as billing users hourly and suspending unpaid servers. To open the crontab run: `crontab -e` and paste the following configuration into crontab.

```bash
* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1
```

### Create Queue Worker

Next, you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible for sending emails and handling many other background tasks for the Dashboard.

Create a file called `controlpanel.service` in `/etc/systemd/system` with the contents below.

```bash
# Controlpanel Queue Worker File
# ----------------------------------

[Unit]
Description=Controlpanel Queue Worker

[Service]
# On some systems the user and group might be different.
# Some systems use `apache` or `nginx` as the user and group.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/controlpanel/artisan queue:work --sleep=3 --tries=3

[Install]
WantedBy=multi-user.target
```

Finally, enable the service and set it to boot on machine start.

```bash
sudo systemctl enable --now controlpanel.service
```
