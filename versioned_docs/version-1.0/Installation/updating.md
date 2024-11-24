---
sidebar_position: 5
---

# Updating

:::caution
This guide is for updates 0.9.X -> 1.0
If you update from 0.8.X or older, please follow our 0.9 update guide which can be found [here](/docs/0.9/Installation/updating)
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

:::caution Important Step for Updating from Version 0.9.X to 1.0
```bash
sudo rm -rf /var/www/controlpanel/vendor
```
:::

```bash
apt install php8.3-redis
sudo composer install --no-dev --optimize-autoloader
```

### Updating the Database
Make sure you have a _working_ backup of your database. A Guide can be found [here](docs/Guides/backups)
```bash
sudo php artisan migrate --seed --force
```

:::caution Important Step for Updating from Version 0.9.X to 1.0
Version 1.0 introduces a new permissions system. You will need to seed the permissions table.
```bash
php artisan db:seed --class=PermissionsSeeder
```
:::

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
If you notice any bugs 🐛 or would like something to be improved or added, let us know by making a [GitHub Issue](https://github.com/ControlPanel-gg/dashboard/issues/new/choose).<br /> **For any major security risk, contact** _1day2die_ on Discord<br/>
Use This dashboard at your own risk.
