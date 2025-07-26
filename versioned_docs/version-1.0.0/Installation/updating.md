---
sidebar_position: 5
---

# Updating

:::caution
This guide is for updates 0.9.X -> 1.0.X

If you update from 0.8.X or older, please follow our 0.9 update guide which can be found [here](/docs/0.9.x/Installation/updating).<br/>
If you want to upgrade from version 1.0.X, use [this](/docs/1.0.x/Installation/updating) guide
:::

## Enable Maintenance Mode

```bash
cd /var/www/controlpanel
sudo php artisan down
```

## Name change

In April 2023, CtrlPanel changed its name from ControlPanel to CtrlPanel. For a long time we continued to use the old name in the names of directories, databases and other things, but it's time to finally abandon the old name. This guide will help you do this, just read the description of the commands carefully and execute them in the correct order

### Directory

Let's start with a simple one, change the name of the directory

```bash
mv /var/www/controlpanel/ /var/www/ctrlpanel/
```

And now let's move into it in advance **:)**

```bash
cd /var/www/ctrlpanel/
```

### Queue Listeners

Well, great, we've taken the first steps. Let's fix the directory in the path of the crontab and the queue worker

#### Crontab

Go to the crontab editor using the following command:

```bash
crontab -e
```

Find the line related to CtrlPanel, it will look something like this:

```
* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1
```

Change `controlpanel` to `ctrlpanel` in directory name. You should get the following result, you can just copy and paste the following line instead of the old one:

```
* * * * * php /var/www/ctrlpanel/artisan schedule:run >> /dev/null 2>&1
```

Now save the file, if you are using `nano` then press `Ctrl+X`, press `Y`, and `Enter`

#### Queue Worker

Now let's fix the queue worker, a pretty easy task.

First, let's define the name of your queue worker file, it can be called either `ctrlpanel.service` or `controlpanel.service`. We have prepared command that will simplify this task. Just copy and paste it into your terminal

```bash
QUEUE_WORKER_FIND='[ -f /etc/systemd/system/ctrlpanel.service ] && echo -e "\nFile name: ctrlpanel.service" || ([ -f /etc/systemd/system/controlpanel.service ] && echo -e "\nFile name: controlpanel.service" || echo -e "\nQueue Worker not found!")'
eval $QUEUE_WORKER_FIND
```

After executing the command, you will see the name of your file in the console.
Depending on the file name, the procedure will be slightly different. Select the appropriate tab below:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ctrlpanel.service" label="CtrlPanel.service" default>
Great. Let's fix the queue worker so that it works in the newly renamed directory. First, let's stop and unload it

```bash
systemctl stop ctrlpanel.service
systemctl disable ctrlpanel.service
```

</TabItem>
<TabItem value="controlpanel.service" label="ControlPanel.service">
Great. Let's fix the queue worker so that it works in the newly renamed directory. First, let's stop and unload it

```bash
systemctl stop controlpanel.service
systemctl disable controlpanel.service
```

Let's rename the file. To do this, run the following command:

```bash
mv /etc/systemd/system/controlpanel.service /etc/systemd/system/ctrlpanel.service
```

</TabItem>
</Tabs>

Now we can edit the paths, let's open the file with the command:

```bash
nano /etc/systemd/system/ctrlpanel.service
```

Find the line `ExecStart=/usr/bin/php /var/www/controlpanel/artisan queue:work --sleep=3 --tries=3` and replace `controlpanel` with `ctrlpanel` in directory path

The final file should look like this, you can also just copy and paste the contents below instead of the old one:

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
ExecStart=/usr/bin/php /var/www/ctrlpanel/artisan queue:work --sleep=3 --tries=3
StartLimitBurst=0

[Install]
WantedBy=multi-user.target
```

Now save the file, if you are using `nano` then press `Ctrl+X`, press `Y`, and `Enter`

Let's load service, and also check if it is running. To do this, run the following commands:

```bash
# Load service and enable it
systemctl enable --now ctrlpanel.service

# Check status, it should be "Active: active (running)"
systemctl status ctrlpanel.service
```

Congratulations, you have finished updating the queue worker

### Database

Let's rename the database, as well as the user used to connect

#### Enter mysql shell

To do this, enter this command in the terminal:

```bash
mysql -u root -p
```

#### Create new database and user

> Please change the `USE_YOUR_OWN_PASSWORD` part to your password. Also, 127.0.0.1 is for localhost, сhange this if the database is on a separate server.

```sql
CREATE USER 'ctrlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
CREATE DATABASE ctrlpanel;
GRANT ALL PRIVILEGES ON ctrlpanel.* TO 'ctrlpaneluser'@'127.0.0.1';
FLUSH PRIVILEGES;
EXIT;
```

#### Transfer data from the old database to the new one

```bash
mysqldump -u root -p controlpanel > /var/www/ctrlpanel/transfer.sql
mysql -u root -p ctrlpanel < /var/www/ctrlpanel/transfer.sql
```

#### Update user privileges

Enter MySQL shell

```bash
mysql -u root -p
```

And run the following SQL commands:

```sql
GRANT ALL PRIVILEGES ON ctrlpanel.* TO 'ctrlpaneluser'@'127.0.0.1';
FLUSH PRIVILEGES;
EXIT;
```

#### Update the connection data in the .env file

We have changed the name of the database and the user, now we need to change the names in the .env file so that ctrlpanel can access them.

Let's open the .env file located in the CtrlPanel directory, run the following command:

```bash
nano /var/www/ctrlpanel/.env
```

Find the section that contains the data for connecting to your MySQL server, it looks something like this:

```bash
### --- DB Settings (required) --- ###
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=controlpanel
DB_USERNAME=controlpaneluser
DB_PASSWORD=YOUR_OWN_PASSWORD
### --- DB Settings End --- ###
```

:::info
If your password contains special characters, escape it using double quotes

```bash
DB_PASSWORD="YOUR_OWN_PASSWORD"
```

:::

Replace the variables `DB_DATABASE`, `DB_USERNAME` and `DB_PASSWORD` with new ones, the result should look something like this:

```bash
### --- DB Settings (required) --- ###
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ctrlpanel
DB_USERNAME=ctrlpaneluser
DB_PASSWORD=YOUR_OWN_PASSWORD
### --- DB Settings End --- ###
```

Now save the file, if you are using `nano` then press `Ctrl+X`, press `Y`, and `Enter`

### Nginx

The last step, let's change the directory in the nginx configuration for your CtrlPanel

Let's define the name of your configuration file, to do this, run this command:

```bash
NGINX_FIND='[ -f /etc/nginx/sites-enabled/ctrlpanel.conf ] && echo -e "\nFile name: ctrlpanel.conf" || ([ -f /etc/nginx/sites-enabled/controlpanel.conf ] && echo -e "\nFile name: controlpanel.conf" || echo -e "\nNginx configuration not found!")'
eval $NGINX_FIND
```

After executing the command, you will see the name of your file in the console.
Depending on the file name, the procedure will be slightly different. Select the appropriate tab below:

<Tabs>
<TabItem value="ctrlpanel.conf" label="CtrlPanel.conf" default>
</TabItem>
<TabItem value="controlpanel.conf" label="ControlPanel.conf">

Let's delete the symlink, rename the file, and create a symlink with the correct name. The commands are attached below as always **:D**

```bash
# Delete old symlink
rm -rf /etc/nginx/sites-enabled/controlpanel.conf

# Rename existing configuration file
mv /etc/nginx/sites-available/controlpanel.conf /etc/nginx/sites-available/ctrlpanel.conf

# Create symlink with new name
ln -s /etc/nginx/sites-available/ctrlpanel.conf /etc/nginx/sites-enabled/ctrlpanel.conf
```

</TabItem>
</Tabs>

Open the file, enter the following command:

```bash
nano /etc/nginx/sites-available/ctrlpanel.conf
```

Find the following line

```conf
root /var/www/controlpanel/public;
```

and change directory name to the `ctrlpanel` instead of `controlpanel`.
You should get the following result:

```conf
root /var/www/ctrlpanel/public;
```

Now save the file, if you are using `nano` then press `Ctrl+X`, press `Y`, and `Enter`

Don't forget to check the configuration, and restart nginx for the changes to take effect

```bash
# Check for nginx errors
nginx -t

# Restart nginx to apply changes
systemctl restart nginx
```

### Storage Linking

Run this command to fix the symlink of storage, otherwise the display of logos and other images will not work for you

```bash
php artisan storage:link
```

## Updating PHP version

CtrlPanel 1.0.0 has been updated to Laravel 11, which requires a minimum version of PHP 8.2. We will help you upgrade your used version of php to 8.3. It will not take much time, provided that you are careful.

### Check your current PHP version

To do this, run the following command:

```bash
php -v
```

If you see version 8.1 or lower, then you need to install PHP 8.2 or higher, as well as all the necessary extensions.
If you see 8.2 or higher, you can skip next steps, but make sure that you have all the necessary extensions and your nginx uses the correct PHP-FPM.

### Installing PHP 8.3

Update the package list, and install PHP 8.3 from the apt repository

```bash
apt update
apt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip,intl,redis}
```

### Checking if PHP 8.3 used by default

After installing the required PHP version, let's make sure that it is installed by default for the `php` command. This is important for the correct operation of the CtrlPanel

```bash
php -v
```

If you see version 8.3, then everything is fine, and you can skip next step, if the PHP version is still 8.1 or lower, then update the default version for the `php` commamd using the following command:

```bash
update-alternatives --set php /usr/bin/php8.3
```

> Note: Path may vary depending on your system. This is just an example

### Change PHP-FPM version for CtrlPanel's nginx config

Open the file, enter the following command:

```bash
nano /etc/nginx/sites-available/ctrlpanel.conf
```

Find the following line inside `location ~ \.php$` block

> Note: The version may vary, but it should not be lower than `8.2`

```conf
fastcgi_pass unix:/run/php/php8.1-fpm.sock;
```

and change PHP-FPM socket version to `8.3`. You should get the following result:

```conf
fastcgi_pass unix:/run/php/php8.3-fpm.sock;
```

Now save the file, if you are using `nano` then press `Ctrl+X`, press `Y`, and `Enter`

Check the configuration, and restart nginx for the changes to take effect

```bash
# Check for nginx errors
nginx -t

# Restart nginx to apply changes
systemctl restart nginx
```

Congratulations! Everything is ready, you can continue updating **:3**

## Pulling the New Files

```bash
sudo git fetch origin
sudo git checkout 1.0.0
sudo git stash
sudo git reset --hard origin/main
sudo chmod -R 755 /var/www/ctrlpanel
```

## Update Dependencies

:::caution Important Step for Updating from Version 0.9.X to 1.0.0

```bash
sudo rm -rf /var/www/ctrlpanel/vendor
```

:::

Reinstall composer packages

```bash
COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader
```

Make sure that you have the php-redis extension installed

```bash
apt install php8.3-redis
```

## Updating the Database

Make sure you have a _working_ backup of your database. A Guide can be found [here](/docs/1.0.0/Guides/backups)

```bash
sudo php artisan migrate --seed --force
```

:::caution Important Step for Updating from Version 0.9.X to 1.0
Version 1.0 introduces a new permissions system. You will need to seed the permissions table.

```bash
php artisan db:seed --class=PermissionsSeeder
```

:::

## Clear Compiled Template Cache

```bash
sudo php artisan view:clear
sudo php artisan config:clear
```

## Set Permissions

```bash
# If using NGINX or Apache (not on CentOS):
sudo chown -R www-data:www-data /var/www/ctrlpanel/

# If using NGINX on CentOS:
sudo chown -R nginx:nginx /var/www/ctrlpanel/

# If using Apache on CentOS
sudo chown -R apache:apache /var/www/ctrlpanel/
```

## Restarting Queue Workers

After every update, you should restart the queue worker to ensure that the new code is loaded in and used.

```bash
sudo php artisan queue:restart
```

## Disable Maintenance Mode

```bash
sudo php artisan up
```

## Disclaimer

If you notice any bugs 🐛 or would like something to be improved or added, let us know by making a [GitHub Issue](https://github.com/CtrlPanel-gg/panel/issues/new/choose).<br /> **For any major security risk, create** [GitHub vulnerability report](https://github.com/Ctrlpanel-gg/panel/security/advisories/new). Avoid discussing vulnerabilities in public chats, and also do not create reports on public trackers!
