---
sidebar_position: 4
---

import DocusaurusImageUrl from '@site/static/img/docusaurus.png';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Themes

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Install a theme

:::info
You should always follow the instructions of the theme you want to install. 
:::
 
Most themes are installed by placing files in the `/themes` and `/public/themes` folders.  

Then you can select the theme in your `settings > system > design`
<img src={useBaseUrl('/img/userguides/themes-page.png')} />

## Create a theme

### Basic setup
Ctrlpanel.gg uses the module [laravel-themer](https://github.com/qirolab/laravel-themer).  
To start creating your own theme run the following command
```sh
php artisan make:theme
```
This will ask you some basic questions and will setup a base for you to start with.  

### Bladefiles & layout
Now you can find a copy of the original default theme files in the new folder the command above just created.  
You should start by modifying those two files first because those are responsible for the main layout of the dashboard.   
`/themes/<YourThemeName>/views/layouts/app.blade.php`  
`/themes/<YourThemeName>/views/layouts/main.blade.php`  

### CSS
You can create a new folder in `/themes/<YourThemeName>/app.css` with your own custom CSS.  
Import the CSS in your blade files with the following line
```blade
<link rel="stylesheet" href="{{ asset('themes/<YourThemeName>/app.css') }}">
```
and remove the line
```blade
@vite('themes/default/sass/app.scss')
```

### Sharing the theme (Optional)
Make sure you include both the `/themes` and `/public/themes` folder and a file to guide other users on how to install your theme.  
Keep the installation instructions as simple as possible and verify you didn´t forget anything, no matter how small the step might seem to you. 

You can upload your theme to our [Market](https://market.ctrlpanel.gg/) or share it however you like.