---
sidebar_position: 5
---

# Uninstallation

:::info
Users, folders and filenames have been renamed from "controlpanel" ⇒ "ctrlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.
:::

:::warning

You will loose all data that you have stored in your Ctrlpanel.
Note: This will only work if you followed our documentation, you might need to modify the commands to fit your installation.

:::

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Stop everything

You need to stop ctrlpanel and all of its services before you can uninstall it.

```bash
cd /var/www/ctrlpanel
sudo php artisan down

sudo systemctl stop ctrlpanel
```

## Remove

### Service and cronjob

You have to stop and remove the service and cronjob.

```bash
sudo systemctl stop ctrlpanel
sudo systemctl disable ctrlpanel
sudo rm /etc/systemd/system/ctrlpanel.service
sudo systemctl daemon-reload
sudo systemctl reset-failed
```

To open the crontab run: `crontab -e` and remove the following configuration from crontab.

```bash
* * * * * php /var/www/ctrlpanel/artisan schedule:run >> /dev/null 2>&1
```

### Webconfig and SSL certificates

You now have to remove the webconfig and restart it

```bash
# NGINX
sudo unlink /etc/nginx/sites-enabled/ctrlpanel.conf
sudo rm /etc/nginx/sites-available/ctrlpanel.conf
sudo systemctl reload nginx
# Apache2
sudo a2dissite ctrlpanel.conf
sudo rm /etc/apache2/sites-available/ctrlpanel.conf
sudo systemctl reload apache2

sudo certbot delete --cert-name <Your Domain>
```

### Database and User

You now have to remove the database and user.

```bash
sudo mysql -u root -p -e "DROP DATABASE ctrlpanel;"
sudo mysql -u root -p -e "DROP USER 'ctrlpaneluser'@'127.0.0.1';"
sudo mysql -u root -p -e "FLUSH PRIVILEGES;"
```

### Files

You now have to remove the files.

```bash
sudo rm -rf /var/www/ctrlpanel
```

### Extra Dependency

You need to uninstall this, use the appropriate PHP version (php -v)

```bash
sudo apt remove php8.3-{intl,redis}
```

### Pterodactyl API Key

Login to your pterodactyl panel and go to the admin page.  
Then go to the API tab (`/admin/api`) and delete the key you made for ctrlpanel.
