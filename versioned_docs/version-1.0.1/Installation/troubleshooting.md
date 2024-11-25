---
sidebar_position: 4
---

# Troubleshooting

We understand that you may encounter some issues on the way of setting up your dashboard, however our support is ready for you! If you need any help feel free to reach out to us on our [Discord](https://discord.gg/ctrlpanel-gg-787829714483019826).

When contacting support, we recommend adding logs to your support thread to speed up the time it takes you to get support. How do you do that? Well, how about we scroll a bit more downwards...

## Getting Error Logs

If you ever face any issues, we always ask for logs to understand more about whats happening and what's the error with your setup. These logs do not contain any confidential or sensitive information and only contains error logs. There are 2 options for logs, either the recommended way which uses Pteropaste to output logs which helps us, or the advanced route which outputs the errors directly into console.

### Hastebin Output (recommended)

This uses a website called pteropaste that is hosted by Pterodactyl and the thing we use to send your last 100 lines of your Ctrlpanel errors. The command below will output a link which redirects to a text copy of Ctrlpanel's error log which can assist you and others with issues you're facing. Ensure that port 80 and 443 is unblocked on your network to face no issues.

```bash
tail -n 100 /var/www/ctrlpanel/storage/logs/laravel.log | nc pteropaste.com 99
```

### Text Output (advanced)

The text output option is for more advanced users. It takes Ctrlpanel's logs and outputs them directly into console. We suggest that only advanced Linux users take this option as the output may be large in size.

```bash
tail -n 100 /var/www/ctrlpanel/storage/logs/laravel.log
```

Using either option will help us help you with your issues. If you need any support regarding Ctrlpanel, create a support thread on our [Discord](https://discord.gg/ctrlpanel-gg-787829714483019826).
