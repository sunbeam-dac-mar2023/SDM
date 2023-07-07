## images

```bash

# check if docker is running
> sudo systemctl status dockerd

# get the list of images
> docker image ls

# remove an image from disk
# > docker image rm <image name> or <image id>
> docker image rm alpine

# download an image from a docker registry
# > docker image pull <image name>
> docker image pull alpine

# get details or information of selected image
# > docker image inspect <image name or id>
> docker image inspect alpine

```

## image required

- alpine
- node
- apache (httpd)
- nginx
- mysql
- ubuntu

## custom images

- install vscode plugin
  - https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

```bash

# create a file named Dockerfile
# add the following commands
FROM httpd
COPY ./index.html /usr/local/apache2/htdocs/

# build docker image
# > docker image build -t <image name> <location where Dockerfile exists>
> docker image build -t myimage .

```
