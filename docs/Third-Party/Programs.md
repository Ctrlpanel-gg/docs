---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import TOCInline from '@theme/TOCInline';

:::info

Third party stuff is not supported by the controlpanel team.  
You´ll need some basic linux knowledge or [Google](https://google.com) to install/use it.

:::

<TOCInline toc={toc} />

## Versions Disclaimer
The version number next to download is the panel version this program was made for, any newer version might work but is not guaranteed.  

## Discord bot

### Xyter
[![Author - ZynerOrg](https://img.shields.io/badge/Author-ZynerOrg-red?style=for-the-badge)](https://github.com/ZynerOrg)
[![Repository - 0.7.3](https://img.shields.io/badge/Repository-0.7.3-brightgreen?style=for-the-badge)](https://github.com/ZynerOrg/xyter)
[![Documentation](https://img.shields.io/badge/Documentation-blue?style=for-the-badge)](https://xyter.zyner.org)
[![Invite - Official bot](https://img.shields.io/badge/Invite-Official_bot-important?style=for-the-badge&logo=discord)](https://bot.zyner.org/)

This is a [discord.js](https://discord.js.org/) bot that features vouchers from CPGG and is made to be a multi-purpose bot for other stuff too.

## Software

### Grafana Dashboard
[![Author - EBG-PW](https://img.shields.io/badge/Author-EBG--PW-red?style=for-the-badge)](https://github.com/EBG-PW)
[![Repository - 0.7.3](https://img.shields.io/badge/Repository-0.7.3-brightgreen?style=for-the-badge)](https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts)
[![Documentation](https://img.shields.io/badge/Documentation-blue?style=for-the-badge)](https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts)

This is a standalone software that will track statistics using [InfluxDB](https://www.influxdata.com/) and [Grafana](https://grafana.com/).

<img src={useBaseUrl('/img/thirdparty/GrafanaStats.png')} />

#### Made by BolverBlitz#4881

### Allocations Manager
[![Dashboard - 0.7.3](https://img.shields.io/badge/Dashboard-0.7.3-brightgreen?style=for-the-badge)](https://github.com/ControlPanel-gg/dashboard/releases/tag/0.7.3)


This is a standalone software dedects if a node is over a certain limit of its allocated resources and will remove the products liked to the node from controlpanel.  
Download: [For panel 0.7.3](https://github.com/BolverBlitz/ControlpanelAllocationManager)

## API Wrappers

### Typescript
Download: [For panel 0.5.0](https://www.npmjs.com/package/controlpanel.gg)  
Install: `npm i controlpanel.gg`

#### Made by ${j122j}#6974

### Javascript 
Download: [For panel 0.5.0](https://www.npmjs.com/package/controlpanel-api)  
Install: `npm i controlpanel-api` || `yarn add controlpanel-api`

#### Made by ICodeInAssembly#7117

Download: [For panel 0.5.0](https://www.npmjs.com/package/control-panel-api-wrapper)  
Install: `npm i control-panel-api-wrapper`

#### Made by DeathHound#8339

## Scripts

### Transfer pterodactyl users to controlpanel
This script will move all users from pterodactyl to controlpanel, to make the transition easyer.  
If you use the DB backup, it needs permissions for /root/backup.sql (Run with sudo).  
It will move all users that are not admin in pterodactyl.  
Download: [For panel 0.7.3](https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts/blob/main/scripts/tran_users.js)  
Usage: [Clone the repo and follow this](https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts#skript-transfer-users)

#### Made by BolverBlitz#4881

## Installers

### Ferks ControlPanel-Installer
This script will install Controlpanel on your server.  
- Automatic installation of the ControlPanel (dependencies, database, cronjob, nginx).  
- automatic configuration of UFW (firewall for Ubuntu/Debian).  
- (Optional) automatic configuration of Let's Encrypt.  
- (Optional) Automatic panel upgrade to a newer version.  
  
Download: [For panel 0.7.3](https://github.com/Ferks-FK/ControlPanel-Installer)  

### UnrexIstIq's Controlpanel-Themes Installer
With this Script you can install all now registered Themes.  
- Only works with the newest Version.  

Download: [For panel 0.7.3](https://github.com/dxrknxs/Controlpanel-Themes)
