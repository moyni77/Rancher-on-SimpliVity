cat >/tmp/csi-vsphere.conf <<EOF
[Global]
cluster-id = "ClusterClh2964"
[VirtualCenter "vcentergen10.am2.cloudra.local"]
insecure-flag = "true"
user = "Administrator@vsphere.local"
password = "Just4m\$hpe20!8"
port = "443"
datacenters = "DEVOPS"
EOF


rancher kubectl delete secret vsphere-config-secret -n kube-system
rancher kubectl create secret generic vsphere-config-secret --from-file=/tmp/csi-vsphere.conf --namespace=kube-system


rancher kubectl apply -f csi/csi-driver-rbac.yaml
rancher kubectl apply -f csi/vsphere-csi-controller-ss.yaml
rancher kubectl apply -f csi/vsphere-csi-node-ds.yaml