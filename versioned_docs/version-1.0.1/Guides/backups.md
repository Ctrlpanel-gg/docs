---
sidebar_position: 2
---

# Database backups

:::info
Users, folders and filenames have been renamed from "controlpanel" ⇒ "ctrlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.
:::

All important data is stored in the database. This includes all servers, users, and other information.  
It's important to keep backups of your database to ensure that you can restore your panel if something goes wrong.

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## How to back up

You can use MySQL dump to back up your database.  
This command will create a backup file in the `/var/www/ctrlpanel/` folder.

```bash
mysqldump -u root -p ctrlpanel > /var/www/ctrlpanel/backup.sql
```

## How to restore

To restore a backup, you need a fresh database. If you already have a database, you can use the following command to drop it.

:::warning

Warning, this will delete all CtrlPanel related data! Make sure your database is backed up before continuing.

```bash
mysql -u root -p ctrlpanel -e "DROP DATABASE ctrlpanel"
```

:::

Then you can restore the backup. You can also restore the backup on any other new server.

```bash
mysql -u root -p
CREATE DATABASE ctrlpanel;
CREATE USER 'ctrlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT ALL PRIVILEGES ON ctrlpanel.* TO 'ctrlpaneluser'@'127.0.0.1';
FLUSH PRIVILEGES;
exit
mysql -u root -p ctrlpanel < /var/www/ctrlpanel/backup.sql
```

If you have a backup from an older version of CtrlPanel, you have to migrate the database to the latest version.

```bash
cd /var/www/ctrlpanel
sudo php artisan migrate --seed --force
```

## How to automatically backup

You can automatically back up your database every day at midnight, for example.
First, create a read only user for the database.

```bash
mkdir -p /var/www/ctrlpanel/backups
mysql -u root -p
CREATE USER 'ctrlpanelbackupuser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT LOCK TABLES, SELECT ON ctrlpanel.* TO 'ctrlpanelbackupuser'@'127.0.0.1';
FLUSH PRIVILEGES;
exit
```

Then create a cronjob to run the following command at midnight.
Run `crontab -e` and add the following line:

```bash
0 0 * * * mysqldump -u ctrlpanelbackupuser --password=<USE_YOUR_OWN_PASSWORD> --single-transaction --quick --lock-tables=false ctrlpanel > /var/www/ctrlpanel/backups-$(date +\%F).sql
```

This will create a backup at /var/www/ctrlpanel/backups-$(date +\%F).sql every day at midnight.
Every file will have the date when it was made in the filename, so you can also resolve issues that happened a few days ago.

## Appliaction key

The application key is used to encrypt the data in the database, if its lost you will not be able to decrypt the data in the database.

### Backup the application key

To backup the appliaction key you need to get it from the .env file
you can get there with this command:
```nano /var/www/ctrlpanel/.env```
keep this key safe you will need later!

### Restore the application key

After you have reinstalled the panel go back into the .env
```nano /var/www/ctrlpanel/.env```
You can then change the new key with the old key!
