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
[ -d "MMM-google-route/" ] && echo -e "\e[32m[OK]\e[0m MMM-google-route" || echo -e "\e[91m[X]\e[0m MMM-google-route"
[ -d "MMM-AssistantMk2/" ] && echo -e "\e[32m[OK]\e[0m MMM-AssistantMk2" || echo -e "\e[91m[X]\e[0m MMM-AssistantMk2"

echo -e
echo -e "Installing modules..."

if [ ! -d "MMM-CalendarWeek/" ] 
then
    echo -e "Installing MMM-CalendarWeek...\e[2m"
    git clone https://github.com/heskja/MMM-CalendarWeek.git &> /dev/null
    echo -e "    - Removing .git folder\e[0m"
    cd MMM-CalendarWeek/
    rm -rf .git
    cd ..
fi


if [ ! -d "MMM-GoogleTasks/" ] 
then
    echo -e "Installing MMM-GoogleTasks...\e[2m"
    git clone https://github.com/jayked/MMM-GoogleTasks.git &> /dev/null
    echo -e "    - Removing .git folder"
    cd MMM-GoogleTasks/
    rm -rf .git
    cd ..
    echo -e "    - Copying credentials.json"
    cp credentials_tasks.json MMM-GoogleTasks/credentials.json
    echo -e "    - Installing Google APIs"
    npm install googleapis &> /dev/null
    echo -e "    - Running authentication"
    node MMM-GoogleTasks/authenticate.js
    echo -e "    - Copying token.json\e[0m"
    cp token.json MMM-GoogleTasks/token.json
fi

if [ ! -d "MMM-google-route/" ] 
then
    echo -e "Installing MMM-google-route...\e[2m"
    git clone https://github.com/mrdis/MMM-google-route.git &> /dev/null
    echo -e "    - Removing .git folder\e[0m"
    cd MMM-google-route/
    rm -rf .git
    cd ..
fi

if [ ! -d "MMM-AssistantMk2/" ] 
then
    echo -e "Installing MMM-AssistantMk2...\e[2m"
    git clone https://github.com/eouia/MMM-AssistantMk2 &> /dev/null
    echo -e "    - Removing .git folder"
    cd MMM-AssistantMk2/
    rm -rf .git
    echo -e "    - Running npm install\e[0m"
    npm install
    cd ..
    echo -e "    - Copying credentials.json"
    cp credentials_assistant.json MMM-AssistantMk2/credentials.json
    echo -e "    - Running authentication"
    node MMM-AssistantMk2/auth_and_test.js
    echo -e "    - Copying token.json"
    cp MMM-AssistantMk2/token.json MMM-AssistantMk2/profiles/default.json

fi

echo
echo -e "Installation completed!\e[2m Please restart MagicMirror2!"