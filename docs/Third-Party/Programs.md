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
The version number next to download is the panel version this theme was made for, any newer version might work but is not guaranteed.

## Software

### Grafana Dashboard
This is a standalone software that will track stats with influx DB and Grafana.  
Download: [For panel 0.7.2](https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts)  
Instal: [Install Debian / Ubuntu](https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts#setup-on-ubuntudebian)  

<img src={useBaseUrl('/img/thirdparty/GrafanaStats.png')} />

#### Made by BolverBlitz#4881

## API Wrappers

### Typescript
Download: [For panel 0.5.0](https://www.npmjs.com/package/controlpanel.gg)  
Instal: `npm i controlpanel.gg`

#### Made by ${j122j}#6974

### Javascript 
Download: [For panel 0.5.0](https://www.npmjs.com/package/control-panel-api-wrapper)  
Instal: `npm i controlpanel.gg`

#### Made by DeathHound#8339

Download: [For panel 0.5.0](https://www.npmjs.com/package/controlpanel-api)  
Instal: `npm i control-panel-api-wrapper`

#### Made by ICodeInAssembly#7117

## Scripts

### Transfer pterodactyl users to controlpanel
This script will move all users from pterodactyl to controlpanel, to make the transition easyer.  
If you use the DB backup, it needs permissions for /root/backup.sql (Run with sudo).  
It will move all users that are not admin in pterodactyl.  
Download: [For panel 0.7.2](https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts/blob/main/scripts/tran_users.js)  
Usage: [Clone the repo and follow this](https://github.com/EBG-PW/ControlPanel.gg-Stats-and-Scripts#skript-transfer-users)

#### Made by BolverBlitz#4881