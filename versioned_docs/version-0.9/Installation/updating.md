---
sidebar_position: 5
---

# Updating

:::warning

Make sure you upgrade your PHP version to 8.1 before updating to v0.9 or higher.
```bash
apt -y install php8.1 php8.1-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip}
apt -y install php8.1-intl
```
And don´t forget to change the php version in your nginx/apache config files.
```bash
cd /etc/nginx/sites-available/
nano controlpanel.conf
systemctl restart nginx
```
Also check your queue worker config file.
ExecStart=/usr/bin/php needs to point to your php 8.1 binary. You can check the version with /usr/bin/php -v 
```bash
cd /etc/systemd/system/
nano controlpanel.service
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
Make sure composer actualy uses php 8.1 and not longer 8.0!
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

### Restarting Queue Workers

After every update, you should restart the queue worker to ensure that the new code is loaded in and used.

```bash
sudo php artisan queue:restart
```

### Disable Maintenance Mode

```bash
sudo php artisan up
```

## Disclaimer

Warning, The dashboard is currently in pre-release and may contain some bugs 🐛 <br/>
Use This dashboard at your own risk.

If you notice any bugs or would like something to be improved or added, let us know by making a [GitHub Issue](https://github.com/ControlPanel-gg/dashboard/issues/new/choose)<br /> **for any major security risk, contact** _1Day2Die#6718_
