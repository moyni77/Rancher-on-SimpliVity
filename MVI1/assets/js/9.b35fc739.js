(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{412:function(e,t,a){e.exports=a.p+"assets/img/simplivity-rancher-architecture.78725993.png"},420:function(e,t,a){"use strict";a.r(t);var r=a(44),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"solution-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#solution-configuration"}},[e._v("#")]),e._v(" Solution configuration")]),e._v(" "),r("p",[e._v("The solution, shown in the figure below, deploys a Rancher admin cluster and a number of supporting nodes external to the cluster, for load balancing and DHCP services. The solution also deploys a\nuser cluster with optional CSI storage.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(412),alt:'"Rancher HPE SimpliVity architecture"',title:"Figure. Rancher on HPE SimpliVity architecture"}})]),e._v(" "),r("p",[r("strong",[e._v("Figure. Rancher on HPE SimpliVity architecture")])]),e._v(" "),r("p",[e._v("For Rancher v2.3.*, Rancher is installed on an RKE (Rancher Kubernetes Engine) Kubernetes cluster. RKE is a CNCF-certified Kubernetes distribution that runs entirely within Docker containers.")]),e._v(" "),r("p",[e._v("In a standard installation, Kubernetes is first installed on three nodes. Then Helm is used to install Rancher on top of the Kubernetes cluster. Helm uses Rancher’s Helm chart to install a replica of Rancher on each of the three nodes in the Kubernetes cluster. A load balancer is used to direct traffic to each replica of Rancher in the cluster, in order to increase Rancher’s availability.")]),e._v(" "),r("p",[e._v("The Rancher server data is stored on "),r("code",[e._v("etcd")]),e._v(". The "),r("code",[e._v("etcd")]),e._v(" database component is a distributed key-value store used as Kubernetes storage for all cluster data, such as cluster coordination and state management. This "),r("code",[e._v("etcd")]),e._v(" database also runs on all three nodes, and requires an odd number of nodes so that it can always elect a leader with a majority of the etcd cluster. If the "),r("code",[e._v("etcd")]),e._v(" database cannot elect a leader, "),r("code",[e._v("etcd")]),e._v(" can fail, requiring the cluster to be restored from backup.")]),e._v(" "),r("p",[e._v("A DNS record is required to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it.")]),e._v(" "),r("p",[e._v("RKE will need to connect to each node over SSH, and it will look for a private key in the default location of "),r("code",[e._v("~/.ssh/id_rsa")]),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);