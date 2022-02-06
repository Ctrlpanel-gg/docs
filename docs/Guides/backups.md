---
sidebar_position: 2
---

# Database backups

:::info

Users, folders and filenames have been renamed from "dashboard" -> "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.

:::

All important data is stored in the database. This includes all servers, users, and other information.  
Its important to keep backups of your database to ensure that you can restore your panel if something goes wrong.

### How to backup

You can use mysql dump to backup your database.  
This commnad will create a backup file in the `/var/www/controlpanel/` folder.

```bash
mysqldump -u root -p controlpanel > /var/www/controlpanel/backup.sql
```

### How to restore

To restore a backup, you need a fresh database. If you already have a database, you can use the following command to drop it.

```bash
mysql -u root -p controlpanel -e "DROP DATABASE controlpanel"
```

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

### How to automatically backup

You can automatically backup your database every day at midnight for example.
First create a read only user for the database.

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
Every file will have the date when it was made in the filename, so you can also resolve issues that happend a few days ago.
