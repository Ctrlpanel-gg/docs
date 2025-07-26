---
sidebar_position: 2
---

# Database backups

All important data is stored in the database. This includes all servers, users, and other sensitive information. It's important to keep backups of your database to ensure that you can restore your panel if something goes wrong.

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

Warning, this will delete all Controlpanel related data! Make sure your database is backed up or has nothing valuable before continuing.
```bash
mysql -u root -p controlpanel -e "DROP DATABASE controlpanel"
```

:::

Once you make sure that there isn't a table called ` controlpanel `, you can continue with restoring your database by running the commands below.

```bash
mysql -u root -p
CREATE DATABASE controlpanel;
CREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';
FLUSH PRIVILEGES;
exit
mysql -u root -p controlpanel < /var/www/controlpanel/backup.sql
```

If you have a backup from an older version of Ctrlpanel, you have to migrate the database to the latest version by running the command below.

```bash
cd /var/www/controlpanel
sudo php artisan migrate --seed --force
```

### How to Backup Automatically

Using crontab, you are able to allow backups created at a specific time, for example every midnight. But to first continue, you have to create a read-only account that can access the tables in MySQL/MariaDB. To do so, run the following commands.

```bash
mkdir -p /var/www/controlpanel/backups
mysql -u root -p
CREATE USER 'controlpanelbackupuser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';
GRANT LOCK TABLES, SELECT ON controlpanel.* TO 'controlpanelbackupuser'@'127.0.0.1';
FLUSH PRIVILEGES;
exit
```

Once you've created a read-only MySQL/MariaDB user that can access the `controlpanel` database, it's time to add it to the crontab to start the backup. For the purpose of this, we will be setting the time as every midnight however you are able to change it. If you're new to crontabs, we suggest using [crontab.guru](https://crontab.guru/). Run `crontab -e` and add the following line:

```bash
0 0 * * * mysqldump -u controlpanelbackupuser --password=<USE_YOUR_OWN_PASSWORD> --single-transaction --quick --lock-tables=false controlpanel > /var/www/controlpanel/backups-$(date +\%F).sql
```

This will create a backup at /var/www/controlpanel/backups-$(date +\%F).sql every day at midnight. The `$(date +\%F)` will be replaced with the date.
This is done to ensure that if you encounter a issue you know the date of your databases and restore them with ease.

## Appliaction key
The application key is used to encrypt the data in the database and if it's lost, you will not be able to decrypt the data in the database meaning it will become useless.

### Backup the application key
To backup the appliaction key you need to get it from the `.env` file.
You can find this file by running the following command:

```nano /var/www/controlpanel/.env```

You want to ensure you have a copy of it somewhere so in case you need the key, you can find it and easily restore the database without any issues.

### Restoring the application key
Once you have your dashboard reinstalled, run this command to open the .env and replace the `APP_KEY` section:
```nano /var/www/controlpanel/.env```

Once done, you should not encounter any issues. If you do however, we'll be waiting for you in our [Discord](https://discord.gg/4Y6HjD2uyU).