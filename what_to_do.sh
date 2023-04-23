#!/bin/bash

RED='\033[0;41;30m'
STD='\033[0;0;39m'

CMI_USERNAME='prabal'
ISI_USERNAME='prabal_r'

pause(){
	read -p "Press [Enter] key to continue..." fackEnterKey
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
	
	echo "CMI Server - Make sure identity file is set in ssh config"
	rsync -az ./dist/ cmi:.www/ --delete
	
        pause
}

# three(){
# 	clear

# 	CONFIG="module.exports = {
# 		publicPath: process.env.NODE_ENV === 'production'
# 		? '/~""$ISI_USERNAME""/'
# 		: '/'
# 	}"
# 	echo "$CONFIG" > vue.config.js
# 	npm run build 

# 	echo "FallbackResource /~""$ISI_USERNAME""/index.html" > dist/.htaccess

# 	echo "Syncing files from current directory to remote server\n"
	
# 	echo "ISI Server"
# 	rsync -az ./dist/ prabal_r@www.isical.ac.in:public_html/ --delete

#         pause
# }

# four(){
# 	two;
# 	three;
# }

three(){
	clear

	# CONFIG="module.exports = {
	# 	publicPath: process.env.NODE_ENV === 'production'
	# 	? '/'
	# 	: '/'
	# }"
	# echo "$CONFIG" > vue.config.js
	# npm run build 
	echo "Make sure you have made changes in code_backup branch\n"
	echo "Pushing code to the repo\n"
	# git checkout code_backup
	# git add -A
	# git commit -S 
	# git push origin code_backup

	echo "Building dist for uploading to master\n"
	npm run build 
	cd dist
	cp index.html 404.html
	# git init
	# git add -A
	git checkout master
	git checkout code_backup -- dist
	cp -R dist/* .
	rm -rf dist
	git add -A
	git commit -m 'deploy'
	git push orgin master
	cd -
	
    pause
}
 
show_menus() {
	clear
	echo "~~~~~~~~~~~~~~~~~~~~~~~~~~"	
	echo " WHAT DO YOU WANT TO DO ?"
	echo "~~~~~~~~~~~~~~~~~~~~~~~~~~"
	echo "1. Start dev server"
	echo "2. Sync files to CMI Server!"
	# echo "3. Sync files to ISI Server!"
	# echo "4. Sync files to both!"
	echo "3. Push to Github!"
	echo ""
	echo "4. Exit"
}

read_options(){
	local choice
	read -p "Enter choice [ 1 - 4] " choice
	case $choice in
		1) one ;;
		2) two ;;
		3) three ;;
		# 4) four ;;
		# 5) five ;;
		4) exit 0;;
		*) echo -e "${RED}Error...${STD}" && sleep 2
	esac
}
 
trap '' SIGINT SIGQUIT SIGTSTP
 
while true
do
 
	show_menus
	read_options
done

# Remove staged files from git
