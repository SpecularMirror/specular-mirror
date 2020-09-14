#!/bin/bash

clear

echo
echo -e "\e[104mCopyright 2020 Specular - All rights reserved\e[0m"
echo -e "\e[2mVisit the official GitHub repository at\e[0m https://github.com/SpecularMirror/specular-mirror\e[0m"

cd modules/

echo
echo -e "Checking installed modules..."
[ -d "MMM-CalendarWeek/" ] && echo -e "\e[32m[OK]\e[0m MMM-CalendarWeek" || echo -e "\e[91m[X]\e[0m MMM-CalendarWeek"
[ -d "MMM-GoogleTasks/" ] && echo -e "\e[32m[OK]\e[0m MMM-GoogleTasks" || echo -e "\e[91m[X]\e[0m MMM-GoogleTasks"

echo -e
echo -e "Installing modules..."

if [ ! -d "MMM-CalendarWeek/" ] 
then
    echo -e "[1/2] Installing MMM-CalendarWeek...\e[2m"
    git clone https://github.com/heskja/MMM-CalendarWeek.git &> /dev/null
    echo -e "    - Removing .git folder\e[0m"
    cd MMM-CalendarWeek/
    rm -rf .git
    cd ..
fi


if [ ! -d "MMM-GoogleTasks/" ] 
then
    echo -e "[2/2] Installing MMM-GoogleTasks...\e[2m"
    git clone https://github.com/jayked/MMM-GoogleTasks.git &> /dev/null
    echo -e "    - Removing .git folder"
    cd MMM-GoogleTasks/
    rm -rf .git
    cd ..
    echo -e "    - Copying credentials.json"
    cp credentials.json MMM-GoogleTasks/credentials.json
    echo -e "    - Installing Google APIs"
    npm install googleapis &> /dev/null
    echo -e "    - Running authentication"
    node MMM-GoogleTasks/authenticate.js
    echo -e "    - Copying token.json\e[0m"
    cp token.json MMM-GoogleTasks/token.json
fi

echo
echo -e "Installation completed!\e[2m Please restart MagicMirror2!"