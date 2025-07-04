---
sidebar_position: 5
---

# Updating

:::warning

Make sure you upgrade your PHP version to 8.3 before updating to v0.9 or higher.
```bash
apt -y install php8.3 php8.3-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip}
apt -y install php8.3-intl
```
Do not forget to change the PHP version in the NGINX / Apache web configuration to 8.3 as well.
```bash
cd /etc/nginx/sites-available/
nano controlpanel.conf
systemctl restart nginx
```

:::

### Enable Maintenance Mode

```bash
cd /var/www/controlpanel
sudo php artisan down
```

### Pulling the New Files

```bash
sudo git stash
sudo git pull
sudo chmod -R 755 /var/www/controlpanel
```

### Update Dependencies

:::caution
Please delete your old vendor folder before running the composer command.
```bash
sudo rm -rf /var/www/controlpanel/vendor
```
:::

:::info
Make sure composer actualy uses PHP8.3 and not 7.4!
```bash
sudo composer install --no-dev --optimize-autoloader
```
:::

### Updating the Database

```bash
sudo php artisan migrate --seed --force
```

### Clear Compiled Template Cache

```bash
sudo php artisan view:clear
sudo php artisan config:clear
```

### Set Permissions

```bash
# If using NGINX or Apache (not on CentOS):
sudo chown -R www-data:www-data /var/www/controlpanel/

# If using NGINX on CentOS:
sudo chown -R nginx:nginx /var/www/controlpanel/

# If using Apache on CentOS
sudo chown -R apache:apache /var/www/controlpanel/
```

### Updating Queue Workers

:::info
Before continuing, run the following command to find where your PHP8.3 directory is:
```bash
which php8.3
```
If you use the default `/usr/bin/php` and your default is another PHP version your setup will not work. For example, if your PHP8.3 is found at `/usr/bin/php8.3` you would update the `ExecStart` line accordingly:
```bash
ExecStart=/usr/bin/php8.3 /var/www/controlpanel/artisan queue:work --sleep=3 --tries=3
```
This will ensure that you're using the correct version of PHP.
:::

Run the following commands to edit the systemd file:

```bash
cd /etc/systemd/system
nano ctrlpanel.service
```

Delete the content and paste in this:

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

To put it into effect, run:

```bash
systemctl restart ctrlpanel.service
```

### Restart Queue Workers

After every update, you should restart the queue worker to ensure that the new code is loaded in and used.

```bash
sudo php artisan queue:restart
sudo systemd
```

### Disable Maintenance Mode

```bash
sudo php artisan up
```

## Disclaimer

Warning, The dashboard is currently in pre-release and may contain some bugs 🐛 <br/>
Use This dashboard at your own risk.

If you notice any bugs or would like something to be improved or added, let us know by making a [GitHub Issue](https://github.com/ControlPanel-gg/dashboard/issues/new/choose)<br /> **for any major security risk, contact** _1Day2Die#6718_
