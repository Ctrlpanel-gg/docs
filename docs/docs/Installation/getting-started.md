---
sidebar_position: 1
---

# Getting started


:::info

It is recommended that you have some sort of Linux experience and MariaDB experience before installing this

:::

:::warning

Warning, The dashboard is currently in pre-release and may contain some bugs. Use This dashboard at your own risk.

:::

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Dependencies
* PHP `7.4` or `8.0` (recommended) with the following extensions: `cli`, `openssl`, `gd`, `mysql`, `PDO`, `mbstring`, `tokenizer`, `bcmath`, `xml` or `dom`, `curl`, `zip`, and `fpm` if you are planning to use NGINX.
* MySQL `5.7.22` or higher (MySQL `8` recommended) **or** MariaDB `10.2` or higher.
* Redis (`redis-server`)
* A webserver (Apache, NGINX, Caddy, etc.)
* `curl`
* `tar`
* `unzip`
* `git`
* `composer` v2

### Example Dependency Installation
_if you already have pterodactyl installed you can skip this step!_

The commands below are simply an example of how you might install these dependencies. Please consult with your
operating system's package manager to determine the correct packages to install.

``` bash
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
apt -y install php8.0 php8.0-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```
### Extra dependency used on this dashboard
you need to install this, use the appropriate php version (php -v)
```bash
sudo apt-get install php8.0-intl
```

### Installing Composer
_if you already have pterodactyl installed you can skip this step!_

Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll
need composer installed before continuing in this process.

``` bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Download Files
The first step in this process is to create the folder where the panel will live and then move ourselves into that
newly created folder. Below is an example of how to perform this operation.

``` bash
mkdir -p /var/www/dashboard
cd /var/www/dashboard
```

``` bash
git clone https://github.com/ControlPanel-gg/dashboard.git ./
chmod -R 755 storage/* bootstrap/cache/
```

## Installation
Now that all of the files have been downloaded we need to configure some core aspects of the Panel.

**You will need a database setup and a database user with the correct permissions created for that database before**
**continuing any further.**


First, we will copy over our default environment settings file, install core dependencies, and then generate a
new application encryption key.

``` bash
cp .env.example .env
composer install --no-dev --optimize-autoloader

# Only run the command below if you are installing this Panel for the first time
php artisan key:generate --force


# you should create a symbolic link from public/storage to storage/app/public
php artisan storage:link
```

Back up your encryption key (APP_KEY in the `.env` file). It is used as an encryption key for all data that needs to be stored securely (e.g. api keys).
Store it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable -- even if you have database backups.

### Database Setup
To make a database and database user, you can follow this guide.
This is for MariaDB. Please change the USE_YOUR_OWN_PASSWORD part to your password. Also, 127.0.0.1 is for localhost. Please have basic knowledge of Linux before attempting this. Use at your own responsibility.
```bash
mysql -u root -p
CREATE DATABASE dashboard;
CREATE USER 'dashboarduser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT ALL PRIVILEGES ON *.* TO 'dashboarduser'@'127.0.0.1' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

### Environment Configuration
Edit the .env to your needs

Please **do not** forget to enter the database crediantials in here, or the next step won't work
Please **do not** forget to enter your pterodactyl API key in here, or the next steps won't work

``` bash
nano .env
```

We need to set up all of the base data for the Panel in the database you created earlier. **The command below
may take some time to run depending on your machine. Please _DO NOT_ exit the process until it is completed!** This
command will set up the database tables and add all configuration options and default items.

``` bash
php artisan migrate --seed --force
```

### Add some example products
This step is optional, only run this once
``` bash
php artisan db:seed --class=ExampleItemsSeeder --force
```

### Add The First User
``` bash
php artisan make:user
```
### Set Permissions
The last step in the installation process is to set the correct permissions on the Panel files so that the webserver can
use them correctly.

``` bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data /var/www/dashboard/*

# If using NGINX on CentOS:
chown -R nginx:nginx /var/www/dashboard/*

# If using Apache on CentOS
chown -R apache:apache /var/www/dashboard/*
```
## Queue Listeners

### Crontab Configuration
The first thing we need to do is create a new cron job that runs every minute to process specific Dashboard tasks. like billing users hourly and suspending unpaid servers. to open de crontab run: `crontab -e` and paste the following configuration into to crontab

```bash
* * * * * php /var/www/dashboard/artisan schedule:run >> /dev/null 2>&1
```

### Create Queue Worker
Next you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible for sending emails and handling many other background tasks for the Dashboard.

Create a file called `dashboard.service` in `/etc/systemd/system` with the contents below.

```bash
# Dashboard Queue Worker File
# ----------------------------------

[Unit]
Description=Dashboard Queue Worker

[Service]
# On some systems the user and group might be different.
# Some systems use `apache` or `nginx` as the user and group.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/dashboard/artisan queue:work --sleep=3 --tries=3

[Install]
WantedBy=multi-user.target
```

Finally, enable the service and set it to boot on machine start.
```bash
sudo systemctl enable --now dashboard.service
```

### Discord Auth
Edit the .env file and look for discord related options :) make sure to fill out the desired options correctly.

**Setting up auth**<br/>
[How](http://faq.demostoreprestashop.com/faq.php?fid=133&pid=41) to get CLIENT_ID and CLIENT_SECRET <br />
for the redirect uri you have to use YOUR_WEBSITE_URI + /auth/callback (example: https://bitsec.dev/auth/callback)

**Adding the discord bot**<br/>
if you would like to automatically force new users into your discord server after they have verified, you will need to set up a discord bot. This can be an already existing discord bot in your server.

1. add your discord bot to your server and give him the appropriate permissions.
2. add your discord bot token to the .env file.
3. add your discord server(guild) ID to the .env file.

That's it! The dashboard can now use your bot to make API calls to discord to place new users into your discord server. your bot will not come online as we only use it to make API calls when some 1 verifies, you can still use your bot as your normally would :)

**Custom role reward**<br/>
If you would like to give your users a custom role automatically when they verify their discord account, you have to copy the ID of an existing role from your discord server and place it in the .env as well.