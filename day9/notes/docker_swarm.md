## docker swarm

```bash

# check if the docker is running in swarm mode
# and verify the swarm status: inactive or active
> docker info
> docker info | grep Swarm

# create a docker swarm (cluster)
> docker swarm init

# add a worker node in the swarm
> docker swarm join

# create a docker swarm (cluster) using ip address
# > docker swarm init --advertise-ip <ip address>

# stop the swarm
> docker swarm leave --force

# generate token for manager
> docker swarm join-token manager

# generate token for worker
> docker swarm join-token worker

```

### node

```bash

# get the list of nodes
> docker node ls

# get the details of selected node
> docker node inspect <node id>

# remove node
> docker node rm <node id>

# promote a worker as a manager
> docker node promote <worker id>

# promote a worker as a manager
> docker node demote <manager id>

```

## service

```bash

# get the list of running services
> docker service ls

# create a service
# > docker service create --name <service name> <image name>
> docker service create --name myservice httpd

# create a service with multiple containers (desired count)
> docker service create --name myservice --replicas 5 httpd

# create a service with port forwarding
> docker service create --name myservice --replicas 5 -p 9090:80 httpd


# get details of selected service
# > docker service inspect <service name>
> docker service inspect myservice

# get the containers created by selected service
# > docker service ps <service name>
> docker service ps myservice

# remove the service
# > docker service rm <service name>
> docker service rm myservice

# scale the containers
# > docker service scale <service name>=<new desired count>

# increasing the containers (scale out)
> docker service scale myservice=10

# reducing the containers (scale in)
> docker service scale myservice=2

```
