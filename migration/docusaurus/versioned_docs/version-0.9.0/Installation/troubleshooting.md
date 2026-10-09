---
sidebar_position: 4
---

# Troubleshooting

## Getting Error Logs

### Text Output

The following command will grab the last 100 lines of logs from the dashboard, and it will output it into the console.

```
tail -n 100 /var/www/controlpanel/storage/logs/laravel.log
```

### Hastebin Output

The following command will grab the last 100 lines of logs from the dashboard and output the link to a hastebin that it pasted it into. Hint: You can change the hastebin link.

```
tail -n 100 /var/www/controlpanel/storage/logs/laravel.log | nc pteropaste.com 99
```
