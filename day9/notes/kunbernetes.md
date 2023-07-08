## minikube

```bash

# visit the url and download and install minikube
> https://minikube.sigs.k8s.io/docs/start/

# download and install
> curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
> sudo install minikube-linux-amd64 /usr/local/bin/minikube

# start the cluster
> minikube start

# add the following in ~/.bashrc
> vim ~/.bashrc

# copy this line in .bashrc
alias kubectl="minikube kubectl --"

# get dashboard
> minikube dashboard

```

### vscode

- install kubernetes plugin for autocompletion
  > https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools

### nodes

```bash

# get the list of nodes
> kubectl get node

```

### pod

```bash

# get the list of pods
> kubectl get pod

# create a kubernetes object (pod) using yaml file
> kubectl create -f <yaml file name>

# get pod details
> kubectl describe pod <pod name>

# delete pod
> kubectl delete pod <pod name>

```
