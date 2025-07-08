---
sidebar_position: 5
---

# Updating

:::caution
This guide is for updates 1.0.X -> 1.0.X

If you want to upgrade from version 0.9.X to 1.0.X, please follow our 1.0 update guide which can be found [here](/docs/1.0.x/Installation/updating).
:::

## Enable Maintenance Mode

```bash
cd /var/www/ctrlpanel
sudo php artisan down
```

## Pulling the New Files

```bash
sudo git checkout 1.0.8
sudo git stash
sudo git pull
sudo chmod -R 755 /var/www/ctrlpanel
```

## Update Dependencies

```bash
COMPOSER_ALLOW_SUPERUSER=1 sudo composer install --no-dev --optimize-autoloader
```

## Updating the Database

```bash
sudo php artisan migrate --seed --force
```

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
