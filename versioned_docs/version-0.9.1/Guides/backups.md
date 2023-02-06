---
sidebar_position: 2
---

# Database backups

All important data is stored in the database. This includes all servers, users, and other information.  
It's important to keep backups of your database to ensure that you can restore your panel if something goes wrong.

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

### How to back up

You can use MySQL dump to back up your database.  
This command will create a backup file in the `/var/www/controlpanel/` folder.

```bash
mysqldump -u root -p controlpanel > /var/www/controlpanel/backup.sql
```

### How to restore

To restore a backup, you need a fresh database. If you already have a database, you can use the following command to drop it.

:::warning

Warning, this will delete all Controlpanel related data! Make sure your database is backed up before continuing.
```bash
mysql -u root -p controlpanel -e "DROP DATABASE controlpanel"
```

:::

Then you can restore the backup. You can also restore the backup on any other new server.

```bash
mysql -u root -p
CREATE DATABASE controlpanel;
CREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';
FLUSH PRIVILEGES;
exit
mysql -u root -p controlpanel < /var/www/controlpanel/backup.sql
```

If you have a backup from an older version of ControlPanel, you have to migrate the database to the latest version.

```bash
cd /var/www/controlpanel
sudo php artisan migrate --seed --force
```

### How to automatically backup

You can automatically back up your database every day at midnight, for example.
First, create a read only user for the database.

```bash
mkdir -p /var/www/controlpanel/backups
mysql -u root -p
CREATE USER 'controlpanelbackupuser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT LOCK TABLES, SELECT ON controlpanel.* TO 'controlpanelbackupuser'@'127.0.0.1';
FLUSH PRIVILEGES;
exit
```

Then create a cronjob to run the following command at midnight.
Run `crontab -e` and add the following line:

```bash
0 0 * * * mysqldump -u controlpanelbackupuser --password=<USE_YOUR_OWN_PASSWORD> --single-transaction --quick --lock-tables=false controlpanel > /var/www/controlpanel/backups-$(date +\%F).sql
```

This will create a backup at /var/www/controlpanel/backups-$(date +\%F).sql every day at midnight.
Every file will have the date when it was made in the filename, so you can also resolve issues that happened a few days ago.

## Appliaction key
The application key is used to encrypt the data in the database, if its lost you will not be able to decrypt the data in the database.

### Backup the application key
To backup the appliaction key you need to get it from the .env file
you can get there with this command:
```nano /var/www/controlpanel/.env```
keep this key safe you will need later!

### Restore the application key
After you have reinstalled the panel go back into the .env
```nano /var/www/controlpanel/.env```
You can then change the new key with the old key!
