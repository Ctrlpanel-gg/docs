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

### Allocations Manager
[![Author - BolverBlitz](https://img.shields.io/badge/Author-BolverBlitz-red?style=for-the-badge)](https://github.com/BolverBlitz)
[![Repository - 0.7.3](https://img.shields.io/badge/Repository-0.7.3-brightgreen?style=for-the-badge)](https://github.com/BolverBlitz/ControlpanelAllocationManager)
[![Documentation](https://img.shields.io/badge/Documentation-blue?style=for-the-badge)](https://github.com/BolverBlitz/ControlpanelAllocationManager)

This is a standalone software detects if a node is over a certain limit of its allocated resources and will remove the products liked to the node from CPGG.

## API Wrappers

### Typescript
[![Author - j122j](https://img.shields.io/badge/Author-j122j-red?style=for-the-badge)](https://github.com/j122j)
[![Repository - 0.5.0](https://img.shields.io/badge/Repository-0.5.0-brightgreen?style=for-the-badge)](https://github.com/j122j/controlpanel.gg)
[![Documentation](https://img.shields.io/badge/Documentation-blue?style=for-the-badge)](https://github.com/j122j/controlpanel.gg)

An API wrapper for CPGG built using TypeScript

### Javascript 
[![Author - somerandomcloud](https://img.shields.io/badge/Author-somerandomcloud-red?style=for-the-badge)](https://github.com/somerandomcloud)
[![Repository - 0.5.0](https://img.shields.io/badge/Repository-0.5.0-brightgreen?style=for-the-badge)](https://github.com/somerandomcloud/ControlPanel-Api)
[![Documentation](https://img.shields.io/badge/Documentation-blue?style=for-the-badge)](https://github.com/somerandomcloud/ControlPanel-Api)

An API wrapper for CPGG built using JavaScript

---

[![Author - DeathHound6](https://img.shields.io/badge/Author-DeathHound6-red?style=for-the-badge)](https://github.com/DeathHound6)
[![Repository - 0.5.0](https://img.shields.io/badge/Repository-0.5.0-brightgreen?style=for-the-badge)](https://github.com/DeathHound6/control-panel-api-wrapper)
[![Documentation](https://img.shields.io/badge/Documentation-blue?style=for-the-badge)](https://github.com/DeathHound6/control-panel-api-wrapper)

An API wrapper for CPGG built using JavaScript

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
