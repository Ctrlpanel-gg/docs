---
sidebar_position: 1
---

# General Info

## What are Packages

As a "Package" we declare mostly third-party and some core extentions to Controlpanel.


These Packages can add more functionality to your CPGG installation with ease and without you having to worry about custom code to your core installation.

Some **Core Packages** the official CPGG Team offers and maintains are

- [Vouchers](https://packagist.org/packages/controlpanel/vouchers)
- [Ticketsystem](https://packagist.org/packages/1day2die/cpgg-ticketsystem)

## Installation

Installing your package and thus extending your Controlpanel installation is extremly simple.

All you need for that is 

- the Name of the package
- Your Console/Terminal

### Navigate to your CP.GG installation
`cd /var/www/controlpanel`  (this path may differ from your installation)

### Run Composer
`composer require <package-name>`

for example

`composer require controlpanel/vouchers` (this would install the vouchers package)

There is nothing more you need to do. 
The corresponding Package will download and connect to your installation.


:::caution

Some Packages may require you to run `php artisan migrate`. <br/>
The creator of the Package should have more details to this if required or if more steps are needed

:::

### Uninstall a Package
To remove a package simply run `composer remove <package-name>`