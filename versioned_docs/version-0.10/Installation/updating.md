---
sidebar_position: 5
---

# Updating

:::caution
This guide is for updates 0.9.0 -> 0.9.X
If you update from 0.8.X or older, please follow our 0.9 update guide. (Version dropdown top right)
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

```bash
sudo composer install --no-dev --optimize-autoloader
```

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
