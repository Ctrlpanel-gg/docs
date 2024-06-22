---
sidebar_position: 6
---

# Transfer Pterodactyl Users

## What is this script good for?

- Migrating from another Pterodactyl Dashboard
- Users cannot register because they already have an account on your Pterodactyl instance

### Using Docker

```bash
docker exec -it ctrlpanel_standalone php app/Helpers/TransferUsers.php
```

### Using bare-metal Installation

Go into your Project directory likely `cd /var/www/controlpanel` or `cd /var/www/ctrlpanel`, and run:

```bash
php app/Helpers/TransferUsers.php
```
