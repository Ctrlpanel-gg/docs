---
sidebar_position: 4
---

# Uninstalling

These instructions are for the default instalation. If needed please change the fields accordingly to how you setup your dashboard.

:::warning

This will delete all data on your dashboard. This will only work if you follow the documentation.

:::

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

### Disable Everything

Before we can even start uninstalling Ctrlpanel, we must disable everything to stop it from running anymore. Run the following commands to stop dashboard:

```bash
cd /var/www/controlpanel
sudo php artisan down

sudo systemctl stop controlpanel
```
## Remove

### Service and cronjob Removal

The first step is to uninstall the .service file and the cronjob. To do so, run the following commands:

```bash
sudo systemctl stop controlpanel
sudo systemctl disable controlpanel
sudo rm /etc/systemd/system/controlpanel.service
sudo systemctl daemon-reload
sudo systemctl reset-failed
```

To open the crontab, run: `crontab -e` and remove the following configuration from crontab:

```bash
* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1
```

### Website Configuration and SSL certificates Removal

We will now uninstall the website configuration and remove all SSL certificates.

```bash
# NGINX
sudo unlink /etc/nginx/sites-enabled/controlpanel.conf
sudo rm /etc/nginx/sites-available/controlpanel.conf
sudo systemctl reload nginx
# Apache2
sudo a2dissite controlpanel.conf
sudo rm /etc/apache2/sites-available/controlpanel.conf
sudo systemctl reload apache2

sudo certbot delete --cert-name <Your Domain>
```

### Database Removal

It's time to remove the database. To completely remove everything run the following commands:

```bash
sudo mysql -u root -p -e "DROP DATABASE controlpanel;"
sudo mysql -u root -p -e "DROP USER 'controlpaneluser'@'127.0.0.1';"
sudo mysql -u root -p -e "FLUSH PRIVILEGES;"
```

### File Removal

Haha, this is a easy one! To remove all the files it's just one command. The command is:

```bash
sudo rm -rf /var/www/controlpanel
```

### Extra Dependency Removal (optional)

:::warning

Make sure nothing else that you're running requires this extra dependency. If they do, ignore this step.

:::

There's a extra dependency that we required you installed. To remove it, run the command below. Change the `8.3` to the corrisponding PHP version you have installed, which you can find by running `php -v`.

```bash
sudo apt remove php8.3-intl
```

### Pterodactyl API Key Removal (optional)

:::warning

Make sure nothing else that you're running requires the API key you set for Ctrlpanel. If something is, ignore this step.

:::

Log into your Pterodactyl panel and enter the Admin area. Go to the `Application API` (or you can use the endpoint `/admin/api`) and delete the API that you created for Ctrlpanel.


Did you encounter any issues? We hope not, however if you have please feel free to create a support thread on our [Discord](https://discord.gg/4Y6HjD2uyU).