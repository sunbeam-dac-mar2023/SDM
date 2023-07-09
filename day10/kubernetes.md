## Pod

- create a file named pod.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod3
  labels:
    type: frontend
spec:
  containers:
    - name: container1
      image: httpd
      ports:
        - containerPort: 80
          name: http-port
```

```bash

# create pod
> kubectl create -f pod1.yml

```

## ReplicaSet

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: rs1
spec:
  replicas: 5
  selector:
    matchLabels:
      type: frontend
  template:
    metadata:
      labels:
        type: frontend
    spec:
      containers:
        - name: container1
          image: httpd
          ports:
            - containerPort: 80
              name: http-port
```

```bash

# create replica set
> kubectl create -f rs1.yml

# describe rs
> kubectl describe replicaset rs1

# delete rs
> kubectl delete replicaset rs1

```

## service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myservice
spec:
  type: NodePort
  selector:
    type: frontend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
```

```bash

# create service
> kubectl create -f service1.yml

# describe service
> kubectl describe service myservice

# expose the service to access outside the minikube
> minikube service myservice

# delete service
> kubectl delete service myservice

```
