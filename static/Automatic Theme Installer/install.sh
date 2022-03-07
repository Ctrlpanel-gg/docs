
#!/bin/bash

set -e

########################################################
# 
#         Controlpanel-Themes Installation
#
#         Created and maintained by unrexIstIq
#
#            Protected by MIT License
#
########################################################


print_brake() {
  for ((n = 0; n < $1; n++)); do
    echo -n "#"
  done
  echo ""
}

hyperlink() {
  echo -e "\e]8;;${1}\a${1}\e]8;;\a"
}

#### Check Sudo ####

if [[ $EUID -ne 0 ]]; then
  echo "* This script must be executed with root privileges (sudo)." 1>&2
  exit 1
fi


#### Check Curl ####

if ! [ -x "$(command -v curl)" ]; then
  echo "* curl is required in order for this script to work."
  echo "* install using apt (Debian and derivatives) or yum/dnf (CentOS)"
  exit 1
fi

cancel() {
echo
echo -e "* ${red}Installation Canceled!${reset}"
done=true
exit 1
}

done=false

echo
print_brake 70
echo "* Controlpanel-Themes Script @ $SCRIPT_VERSION"
echo
echo "* Copyright (C) 2021 - $(date +%Y), unrexIstIq"
echo "* https://github.com/dxrknxs/Controlpanel-Themes"
echo
echo "* This Script was inspired by the Pterodactyl-AutoThemes script by Ferks-FK."
echo "* https://github.com/Ferks-FK/Pterodactyl-AutoThemes"
echo
echo "* This script is not associated with the official Controlpanel Project."
print_brake 70
echo

Darkmode() {
bash <(wget https://raw.githubusercontent.com/dxrknxs/Controlpanel-Themes/main/themes/Darkmode-unrexIstIq/app.css)
mv app.css /var/www/controlpanel/public/css
bash <(wget https://raw.githubusercontent.com/dxrknxs/Controlpanel-Themes/main/themes/Darkmode-unrexIstIq/app.css.map)
mv app.css.map /var/www/controlpanel/public/css
echo "* Done, the Theme should be installed! Need help? Contact me on Discord, unrexIstIq#9898"
}

Blue() {
bash <(wget https://raw.githubusercontent.com/dxrknxs/Controlpanel-Themes/main/themes/Blue-ish-unrexIstIq/app.css)
mv app.css /var/www/controlpanel/public/css
bash <(wget https://raw.githubusercontent.com/dxrknxs/Controlpanel-Themes/main/themes/Blue-ish-unrexIstIq/app.css.map)
mv app.css.map /var/www/controlpanel/public/css
echo "* Done, the Theme should be installed! Need help? Contact me on Discord, unrexIstIq#9898"
}

BlackEdition() {
bash <(wget https://raw.githubusercontent.com/dxrknxs/Controlpanel-Themes/main/themes/Black-Edition-2IceCube/app.css)
mv app.css /var/www/controlpanel/public/css
bash <(wget https://raw.githubusercontent.com/dxrknxs/Controlpanel-Themes/main/themes/Black-Edition-2IceCube/app.css.map)
mv app.css.map /var/www/controlpanel/public/css
bash <(wget https://raw.githubusercontent.com/dxrknxs/Controlpanel-Themes/main/themes/Black-Edition-2IceCube/default.css)
mv default.css /var/www/controlpanel/public/css
echo "* Done, the Theme should be installed! Need help? Contact me on Discord, unrexIstIq#9898"
}

Animated() {
bash <(wget https://raw.githubusercontent.com/dxrknxs/Controlpanel-Themes/main/themes/Animated-Paulscr/app.css)
mv app.css /var/www/controlpanel/public/css
echo "* Done, the Theme should be installed! Need help? Contact me on Discord, unrexIstIq#9898"
}

while [ "$done" == false ]; do
  options=(
    "Darkmode Theme (unrexIstIq)"
    "Blue-ish Theme (unrexIstIq)"
    "Black-Edition Theme (2IceCube)"
    "Animated Theme (Paul.scr)"
    
    
    "Cancel Installation"
  )
  
  actions=(
    "Darkmode"
    "Blue"
    "BlackEdition"
    "Animated"
    
    "cancel"
  )
  
  echo "* Which Theme do you want to install?"
  echo
  
  for i in "${!options[@]}"; do
    echo "[$i] ${options[$i]}"
  done
  
  echo
  echo -n "* Input 0-$((${#actions[@]} - 1)): "
  read -r action
  
  [ -z "$action" ] && error "Input is required" && continue
  
  valid_input=("$(for ((i = 0; i <= ${#actions[@]} - 1; i += 1)); do echo "${i}"; done)")
  [[ ! " ${valid_input[*]} " =~ ${action} ]] && error "Invalid option"
  [[ " ${valid_input[*]} " =~ ${action} ]] && done=true && eval "${actions[$action]}"
done
