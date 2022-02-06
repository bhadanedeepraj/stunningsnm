#!bin/bash
echo "Give permissions"
sudo chmod -R 777 /home/ec2-user/express-app

echo "Go into Express-app folder"
cd /home/ec2-user/express-app

echo "Give permissions"
sudo chmod -R 777 /home/ec2-user/express-app

echo "Start npm i"
npm i

echo "Start npm start"
npm start