## node - general

```bash

# install yarn
> sudo npm install -g yarn nodemon

# add a new package
# > npm install express
> yarn add express

# install all the packages from package.json
# > npm install
> yarn

```

## express

```bash

# install express and required dependencies
> yarn add express cors mysql2

```

## react

```bash

# create react app
> npx create-react-app products

# install required modules
> cd products
> yarn add axios

```

## aws

```bash

# go to EC2 and create an EC2 instance (VM)
# please use the following settings

# region: mumbai
# click on the Launch Instances (you may find it on right top corner)
# name: test-server
# AMI: Ubuntu Server 22.04 LTS
# instance type: t2.micro
# key-pair settings
# - Key pair name: dac-test
# - Key pair type: RSA
# - Private key file format: .pem
# when you create this pem file it will be downloaded in ~/Downloads
# click the Launch button and wait for some time :)

```

### connect to the AWS EC2 instance

```bash

# open your terminal

# change the permissions of pem file
> cd ~/Downloads
> chmod 400 dac-test.pem

# from AWS management console, grab the public ip address of your instance

# connect to the instance
# > ssh -i dac-test.pem ubuntu@13.233.164.71
> ssh -i dac-test.pem ubuntu@<public ip address>

# this command will connect to the server

# update the aptitude (package manager for ubuntu)
> sudo apt-get update

# install required applications
> sudo apt-get install mysql-server apache2

# install node 16
> curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
> sudo apt-get update
> sudo apt-get install nodejs

```

## mysql configuration

```bash

# please execute these commands on server (EC2 instance)

# start mysql with root privileges
> sudo mysql

# reset the root user password
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
mysql> FLUSH PRIVILEGES;
mysql> exit;

# now login with root user
> mysql -u root -p

```

## express server configuration

```bash

# please execute these commands on your local machine

# on your machine create an archive of express server
> cd <express server directory parent>

# this command should show you the server directory
> ls
> tar -cf server.tar server

# upload the server.tar to the ec2 instance
# > scp -i ~/Downloads/dac-test.pem server.tar ubuntu@13.234.20.103:~/
> scp -i ~/Downloads/dac-test.pem server.tar ubuntu@<public ip>:~/

# please execute these commands on ec2 instance
> cd ~

# this command should show you the server.tar file
> ls

# extract the server.tar to get the express code
> tar -xf server.tar
> cd server

# install a package manager for running express continuously
> sudo npm install -g pm2

# please make sure that you are in the server directory
> cd ~/server

# start the express server
> pm2 start server.js

# get the status of server
> pm2 list

# restart the server
> pm2 restart <server index>

# unblock or open the port 4000 for express server
# select the ec2 instance from the ec2 dashboard
# select the security tab
# click the security groups (this is nothing but security which will open the required ports -> port filters)
# click the button Edit inbound rules (you may find it on the right side)
# add rule
# - port range: 4000
# - source: anywhere/ip4
# add rule
# - port range: 80
# - source: anywhere/ip4
# click save rules

```

## react application

```bash

# please execute these commands on your local machine

# go to the react application source code and change the server url to the public ip address of your ec2 instance

# build your react app
> yarn build

# go to the build directory
> cd build

# archive the files
> tar -cf react.tar *

# upload the react.tar to the server
# > scp -i ~/Downloads/dac-test.pem react.tar ubuntu@13.234.20.103:~/
> scp -i ~/Downloads/dac-test.pem react.tar ubuntu@<public ip address>:~/

# please execute these commands on ec2 instance
> cd ~/

# please make sure that you can see the react.tar file
> ls

# go to the apache htdocs directory
> cd /var/www/html

# delete all files from this directory
> sudo rm -rf *

# move the file react.tar from home directory to the current directory
> sudo mv ~/react.tar .

# unarchive the react.tar file
> sudo tar -xf react.tar

```
