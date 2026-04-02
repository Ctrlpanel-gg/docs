---
sidebar_position: 3
title: Updating
---

# Updating to beta from latest stable

:::caution
Updating to the beta version is only available from the latest stable release! Select "1.1.x (Latest)" from the dropdown in the top-right corner and follow the update instructions first.
:::

:::danger
We don't recommend testing beta on production installs, as this version may contain unknown critical bugs. Ideally, clone your database from the current version and set up a second test instance of CtrlPanel alongside your production install on a separate domain. **Rolling back after an update is NOT possible.**
:::

:::danger
Always backup your database and any code changes before updating! It's better to not need them, than to lose everything when you do. We've explained how to do that [here](/docs/guides/backup).

Without a backup, you won't be able to roll back without losing all your data.
:::

## Enable Maintenance Mode

```bash
cd /var/www/ctrlpanel
php artisan down
```

## Pulling the New Files

```bash
git stash
git checkout development
git pull
```

## Update Dependencies

```bash
COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader
```

## Updating the Database

```bash
php artisan migrate --seed --force
```

## Clear Compiled Template Cache

```bash
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan config:clear
php artisan settings:clear-cache
```

## Rebuild Settings Cache via UI

After clearing caches, open your application Settings, navigate to the User tab, and click Save. This refreshes the settings cache for normal credit calculation runtime behavior.

## Set Permissions

```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data /var/www/ctrlpanel/
chmod -R 755 /var/www/ctrlpanel

# If using NGINX on CentOS:
chown -R nginx:nginx /var/www/ctrlpanel/
chmod -R 755 /var/www/ctrlpanel

# If using Apache on CentOS
chown -R apache:apache /var/www/ctrlpanel/
chmod -R 755 /var/www/ctrlpanel
```

## Restarting Queue Workers

After every update, you should restart the queue worker to ensure that the new code is loaded in and used.

```bash
php artisan queue:restart
```

## Disable Maintenance Mode

```bash
php artisan up
```

## Disclaimer

If you notice any bugs 🐛, would like something to be improved , added or just need help with beta version, let us know by creating a forum post in [`#🧪┃beta-feedback`](https://discord.com/channels/787829714483019826/1489042641998971061) channel on our [Discord server](https://discord.gg/ctrlpanel-gg-787829714483019826).  
**For any major security risk, create** [GitHub vulnerability report](https://github.com/Ctrlpanel-gg/panel/security/advisories/new) and DM `1day2die` in Discord. Avoid discussing vulnerabilities in public chats, and also do not create reports on public trackers!
