# Kubernetes

## architecture

### **master node**

* **kube-apiserver**
  * front-end of the cluster
  * services REST operations and connects to the etcd database
* **kube-scheduler**
  * schedules the Pods on specific nodes
  * based on labels, taints and tolerations
* **etcd database**
  * B+ tree key-value store that keeps the current cluster state
* **kube-controller-manager**
  * manages the current state of the cluster
* **cloud-controller-manager**
  * interacts with outside cloud managers
* **optional add-ons**
  * DNS
  * Dashboard
  * Cluster level resource monitoring


### **worker node**

* **kubelet**
  * passes requests to the container engine to ensure the Pods are available 
* **kube-proxy**
  * runs on every node 
  * uses iptables to provide and interface to connect to Kubernetes components
* **container runtime**
  * takes care of actually running the containers
* **supervisord**
  * monitors and guarantees the availability of the kubelet and docker processes
* **network agent**
  * implemmets a software defined networking solutions
  * such as weave
* **logging**
  * CNCF Fluentd is used for unified logging in the cluster
  * A Fluentd agent must be instsalled on the K8s nodes

### ways to use the kubernetes

- imperative commands

  - pod
    > kubectl run mypod --image=nginx --port=80 
  
  - deployment
    > kubectl create deployment mydeployment --image=pythoncpp/website -o yaml --dry-run=client > deploy.yml
  
  - service
    > kubectl create service nodeport myservice --dry-run=client --tcp=80 -o yaml > service.yml
  
  - replicaset

- declarative manifest Yaml files

## namespaces

- group of kubernetes objects

### kubectl

> kubectl cluster-info
> kubectl get nodes

* **create**
  * used to create objects
    * deployment
    * namespace
  
  ```
    > kubectl create deployment --image=nginx --replicas=3 nginx 
    > kubectl create namespace dev
  ```

* **delete**
  * used to delete objects
    * deployment
    * namespace
    * pod
  ```
    > kubectl delete pod mypod
    > kubectl delete deployment nginx
    > kubectl delete svc nginx
  ```
  
* **describe**
  * used to get more information of an object
  * e.g.
  
  ```
    > kubectl describe pod mypod
    > kubectl describe deployment nginx
  ```

* **get**
  * **--selector**
    * used to select objects having required labels
    * e.g.
    ```
      > kubectl get all --selector app=nginx
    ```
  * **--show-labels**
    * shows labels while showing other information
    ```
      > kubectl get deployment --show-labels
    ```

* **label**
  * add labels to the objects
  * e.g.
  ```
    > kubectl label deployment nginx type=frontend
  ```


### rolling update

* **rollout**
  * used to perform rolling updates
  * **history**
    * shows history of selected deployment
    ```
      > kubectl rollout history deployment
      > kubectl rollout history deployment rolling-nginx
      > kubectl rollout history deployment rolling-nginx --revision=1
    ```
  
  * **undo**
    * used to undo the rolling update
    ```
      > kubectl rollout undo deployment rolling-nginx --to-revision=1
    ```

## statefulsets

## daemonset

## persistence volume

## commands to create resources

```
> kubectl create ns myns
> kubectl create service clusterip myservice --clusterip="None" -o yaml --dry-run 
> kubectl run mypod --image=nginx --restart=Never --dry-run -o yaml
> 
```

## commands to create configmap

```
> kubectl create configmap my-config --from-file=file.txt
> kubectl create configmap my-config --from-literal=db=password
```