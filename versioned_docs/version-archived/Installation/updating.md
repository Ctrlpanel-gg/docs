---
sidebar_position: 5
---

# Updating

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
