## jenkins

```bash

# install on ubuntu
>  curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

>  echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null

> sudo apt-get update
> sudo apt-get install fontconfig openjdk-11-jre
> sudo apt-get install jenkins

# install jenkins on macOS
> brew install jenkins-lts

# browse jenkins on
> http://localhost:8080

```

## create token for docker hub login

```bash

# login to the docker hub account
# go to the Account Settings
# go to the Security
# create an access token
# once generated, copy the token (or it wont be visible again)


```

# commands

```bash

# create a docker image
> docker image build -t pythoncpp/mytestimage .

# login with docker
> echo <access token> | docker login -u <account name> --password-stdin

# push the image to docker hub
> docker image push pythoncpp/mytestimage#

# restart the service
> docker service update --image pythoncpp/mytestimage --force myapp

```

- email: amit.kulkarni@sunbeaminfo.com
- mobile: 7709859986 (3am to 6am)
