## container

```bash

# get the list of running container
> docker container ls

# get the list of all container (including running or stopped)
> docker container ls -a

# remove a container
> docker container rm <container id or name>

# remove a container forcefully
> docker container rm --force <container id or name>

# stop the running container
> docker container stop <container id or name>

# create a new container
> docker container create <image name or id>

# create a new container with a name
> docker container create --name <container name> <image name or id>

# start the container
> docker container start <container id or name>

# run a new container
> docker container run <image name or id>

# run a new container with name
> docker container run --name <container name> <image name or id>

# run a new container with port forwarding
> docker container run -itd --name <container name> -p <machine port>:<container port> <image name or id>

# execute command inside a container
> docker container exec <container id or name> <command>

# get the terminal of running container
> docker container exec -it <container or name> bash or sh

# get the container logs
> docker container logs -f <container id or name>

```

## examples

```bash

# create httpd container
> docker container create httpd

# create httpd container with name
> docker container create --name myhttpd httpd

# run a new container with name in attached mode
> docker container run --name myhttpd httpd

# run a new container with name in detached mode (-d)
> docker container run -d --name myhttpd httpd

# run a new container with name in detached mode (-d) with interactive (-i) and teletype terminal (-t) parameters
> docker container run -d -i -t --name myhttpd httpd
> docker container run -itd --name myhttpd httpd

# run a new httpd container with port forwarding from 9001 to 80
> docker container run -itd --name myhttpd -p 9001:80 httpd

# run a new mysql container with
# -itd
# --name:
# -p: port forwarding
# -e: set an environment variable
> docker container run -itd --name mysql -p 7005:3306 -e MYSQL_ROOT_PASSWORD=root mysql

# first go inside the container to deal with mysql running inside the container
> docker container exec -it mysql bash
> mysql -u root -p

# check if a port is already in use
# > lsof -i :<port number>
> lsof -i :3306

# stop the mysql process
> sudo systemctl stop mysql

```

## native applications

- application which is platform specific
- every platform has its own executable file format
  - macOS: Mach-O
  - linux: ELF -> Executable and Linkable File Format
  - windows: PE/COFF -> Portable Executable Common Object File Format
