## docker

```bash

# delete all the containers
> docker container rm --force $(docker container ls -a -q)

# delete all the images
> docker image rm --force $(docker image ls -q)

```

### docker volume

```bash

# get all the docker volumes
> docker volume ls

# remove unwanted volumes
> docker volume prune

# create a new docker volume
> docker volume create mysql-volume

# get the information of a volume
> docker volume inspect mysql-volume

# remove volume
> docker volume rm mysql-volume

# use the volume to persist the data outside the container
> docker container run -itd --name mysql -p 7005:3306 -v mysql-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root mysql

```

## sharing image on docker hub

```bash

# register a new account on docker hub

# login with docker hub
> docker login

# push your image to the docker hub
# rule: image name must be in the form => <account name>/<image name>
# tag existing image
# > docker image tag <old name> <new name>

# please replace pythoncpp with your account name
> docker image tag myappimage pythoncpp/myappimage

# push the image to docker hub
# > docker image push <image name>
> docker image push pythoncpp/myappimage

# logout from docker hub account
> docker logout

```
