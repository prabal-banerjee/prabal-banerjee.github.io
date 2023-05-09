#!/bin/bash

RED='\033[0;41;30m'
STD='\033[0;0;39m'

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
		? '/'
		: '/'
	}"
	echo "$CONFIG" > vue.config.js


	# npm run build 
	echo "Make sure you have made changes in code_backup branch"
	
	nvm use 16
	npm run build 
	cd dist
	cp index.html 404.html
	cd -

	echo "Pushing code to the repo"
	git checkout code_backup
	git add -A
	git commit -S 
	# git push origin code_backup

	git subtree push --prefix dist origin gh-pages

	# git checkout master
	# git checkout code_backup -- dist
	# cp -R dist/* .
	# rm -rf dist
	# git add -A
	# git commit -m 'deploy'
	# # git push orgin master

	# git checkout code_backup
	
    pause
}
 
show_menus() {
	clear
	echo "~~~~~~~~~~~~~~~~~~~~~~~~~~"	
	echo " WHAT DO YOU WANT TO DO ?"
	echo "~~~~~~~~~~~~~~~~~~~~~~~~~~"
	echo "1. Start dev server"
	echo "2. Push to Github!"
	echo ""
	echo "3. Exit"
}

read_options(){
	local choice
	read -p "Enter choice [ 1 - 3] " choice
	case $choice in
		1) one ;;
		2) two ;;
		3) exit 0;;
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
