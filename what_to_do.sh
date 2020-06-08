#!/bin/bash

RED='\033[0;41;30m'
STD='\033[0;0;39m'

CMI_USERNAME='prabal'
ISI_USERNAME='prabal_r'

pause(){
	read -p "Press [Enter] key to continue..." fackEnterKey
}

reset_config(){
	CONFIG="module.exports = {
		publicPath: process.env.NODE_ENV === 'production'
		? '/'
		: '/'
	}"
	echo "$CONFIG" > vue.config.js
}

one(){
	clear
	echo "Starting dev server\n"
	npm run serve
        pause
}
two(){
	clear
	
	CONFIG="module.exports = {
		publicPath: process.env.NODE_ENV === 'production'
		? '/~""$CMI_USERNAME""/'
		: '/'
	}"
	echo "$CONFIG" > vue.config.js
	npm run build 

	echo "FallbackResource /~""$CMI_USERNAME""/index.html" > dist/.htaccess

	echo "Syncing files from current directory to remote server\n"
	
	echo "CMI Server"
	rsync -az ./dist/ prabal@access2.cmi.ac.in:.www/ --delete
	
	reset_config;

        pause
}

three(){
	clear

	CONFIG="module.exports = {
		publicPath: process.env.NODE_ENV === 'production'
		? '/~""$ISI_USERNAME""/'
		: '/'
	}"
	echo "$CONFIG" > vue.config.js
	npm run build 

	echo "FallbackResource /~""$ISI_USERNAME""/index.html" > dist/.htaccess

	echo "Syncing files from current directory to remote server\n"
	
	echo "ISI Server"
	rsync -az ./dist/ prabal_r@www.isical.ac.in:public_html/ --delete

	reset_config;
	
        pause
}

four(){
	two;
	three;
}


 
show_menus() {
	clear
	echo "~~~~~~~~~~~~~~~~~~~~~~~~~~"	
	echo " WHAT DO YOU WANT TO DO ?"
	echo "~~~~~~~~~~~~~~~~~~~~~~~~~~"
	echo "1. Start dev server"
	echo "2. Sync files to CMI Server!"
	echo "3. Sync files to ISI Server!"
	echo "4. Sync files to both!"
	echo ""
	echo "5. Exit"
}

read_options(){
	local choice
	read -p "Enter choice [ 1 - 5] " choice
	case $choice in
		1) one ;;
		2) two ;;
		3) three ;;
		4) four ;;
		5) exit 0;;
		*) echo -e "${RED}Error...${STD}" && sleep 2
	esac
}
 
trap '' SIGINT SIGQUIT SIGTSTP
 
while true
do
 
	show_menus
	read_options
done
