---
sidebar_position: 2
---

# Webserver Configuration

You should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called dashboard.conf and place it in `/etc/nginx/sites-available/`, or — if on CentOS, `/etc/nginx/conf.d/.`

### Example Nginx config
```nginx 
server {
        listen 80;
        root /var/www/dashboard/public;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name YOUR.DOMAIN.COM;

        location / {
                try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```

### Enable configuration
The final step is to enable your NGINX configuration and restart it.

```bash
# You do not need to symlink this file if you are using CentOS.
sudo ln -s /etc/nginx/sites-available/dashboard.conf /etc/nginx/sites-enabled/dashboard.conf

# Check for nginx errors
sudo nginx -t

# You need to restart nginx regardless of OS. only do this you haven't received any errors
systemctl restart nginx
```


### Adding SSL

There are many ways to add SSL to your site. A simple solution is to use Certbot from Let’s Encrypt. Cerbot will automatically install the certificates for you and keep your SSL certifications up to date!
```bash 
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

