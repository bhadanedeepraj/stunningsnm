#!bin/bash

echo "START : install NVM command"
yum install -y gcc-c++ make
echo "END : install NVM command"

echo "START : Download NODE 14"
curl -sl https://rpm.nodesource.com/setup_14.x | sudo -E bash -
echo "END : Download NODE 14"

echo "START : INSTALL NODE 14"
yum install -y nodejs
echo "END : INSTALL NODE 14"


#Create Directory if not there
DIR = "/home/ec2-user/express-app"
if [-d "$DIR" ]; then
    echo "${DIR} exists"
else;
    echo "Creating Directory ${DIR}"
    mkdir ${DIR}


echo "Stopping the NODE server"
pkill node
echo "Stopped Node Server"