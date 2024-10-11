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
- A web server (Apache, NGINX, Caddy, etc.)
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

First, lets open the file for the configuration.

Ubuntu, Debian, etc.:

```
nano /etc/nginx/sites-available/ctrlpanel.conf
```

CentOS:

```
nano /etc/nginx/conf.d/ctrlpanel.conf
```

Now paste in the following configuration. Replace any `<domain>` placeholders with your Ctrlpanel setup domain.

```nginx
server {
        listen 80;
        root /var/www/controlpanel/public;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name <domain>;

        location / {
                try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```

SSL will be shown later in the documentation. Please do not join our Discord asking how to add SSL.

### Enable Configuration

The final step is to enable your NGINX configuration and restart it.

```bash
# You do not need to symlink this file if you are using CentOS.
sudo ln -s /etc/nginx/sites-available/ctrlpanel.conf /etc/nginx/sites-enabled/ctrlpanel.conf

# Check for nginx errors
sudo nginx -t

# You need to restart nginx regardless of OS. Only do this you haven't received any errors
systemctl restart nginx
```

### Adding SSL

There are many ways to add SSL to your site. A simple solution is to use Cert bot from Let’s Encrypt. Cert bot will automatically install the certificates for you and keep your SSL certifications up to date!

```bash
sudo apt update
# Install certbot for SSL
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
# Install certificates into the configuration
sudo certbot --nginx -d <domain>
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

## Running the installer

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info

If you see the error **"php version: 8.3.6 (minimum required 8.1)"** on the main installer page, then just ignore it. This is due to the specifics of checking version compatibility. PHP8.3 has been tested and works stably!

<img src={useBaseUrl('/img/userguides/installer-error.png')} />

:::

#### Navigate to the installer

:::info

If you see the error **"php version: 8.3.6 (minimum required 8.1)"** on the main installer page, then just ignore it. This is due to the specifics of checking version compatibility. PHP8.3 has been tested and works stably!

<img src={useBaseUrl('/img/userguides/installer-error.png')} />

:::

To begin installation, go to `https://YOUR_DOMAIN_HERE/install` and follow the installer instructions.

If you encounter problems with the email setup, you can skip it and set it up later.

Once the installer has been completed, you will be redirected to the login page. Sign in with your Pterodactyl username/email and the password you set during the installer.
