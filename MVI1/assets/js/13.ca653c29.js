(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{444:function(t,e,a){"use strict";a.r(e);var r=a(44),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"container-storage-interface-csi-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-storage-interface-csi-configuration"}},[t._v("#")]),t._v(" Container Storage Interface (CSI) configuration")]),t._v(" "),a("p",[t._v("The playbooks can configure CSI storage for the user cluster, by setting the "),a("code",[t._v("user_cluster.csi")]),t._v(" variable to "),a("code",[t._v("true")]),t._v(".\nIn this release, only the vSphere CSI driver is supported, but other drivers will be supported in future releases.")]),t._v(" "),a("h2",{attrs:{id:"user-cluster-configuration-for-csi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-cluster-configuration-for-csi"}},[t._v("#")]),t._v(" User cluster configuration for CSI")]),t._v(" "),a("p",[t._v("The variables for configuring CSI in a user cluster are detailed in the following table.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("user_cluster.csi")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean. Set to "),a("code",[t._v("true")]),t._v(" to configure the CSI driver on the user cluster.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("user_cluster.vm_template")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The VM template to use when creating the nodes in the suer cluster."),a("br"),t._v("Defaults to the admin template if none specified.")])])])]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" CSI storage drivers require that the VM template used to create the user cluster be configured with VM Hardware\nCompatibility version 15. The default "),a("code",[t._v("admin_template")]),t._v(" that is generated by the playbooks from an Ubuntu OVA uses hardware\ncompatibility version 10. The playbooks automatically upgrade the VM template created from the OVA to HW 15, making it compatible with the CSI storage driver.")]),t._v(" "),a("p",[t._v("If you choose to use a different template for the user cluster, make sure to set the\n"),a("code",[t._v("user_cluster.vm_template")]),t._v(" variable to an appropriate\nVM template that uses hardware compatibility 15. The playbooks expect this template to exist in the "),a("code",[t._v("admin_folder")]),t._v(" of the vCenter instance.")]),t._v(" "),a("h2",{attrs:{id:"csi-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csi-configuration"}},[t._v("#")]),t._v(" CSI configuration")]),t._v(" "),a("p",[t._v("General configuation of the CSI driver is performed using the variables in the following table.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("csi_driver")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The only currently supported value is "),a("code",[t._v("vsphere")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("csi_datastore_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the vSphere datastore where CSI volumes will be created by the CSI driver."),a("br"),t._v("If this datastore does not exist it will be created by the playbooks."),a("br"),a("br"),t._v("In order for the playbooks to create datastores, the "),a("code",[t._v("simplivity_appliances")]),t._v(" variable needs to be populated with at least one valid entry. See the section "),a("a",{attrs:{href:"simplivity-config"}},[t._v("HPE SimpliVity configuration")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("csi_datastore_size")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The size of the datastore in GiB that will hold the CSI volumes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("csi_storageclass_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the Kubernetes storage class that will be created in the user cluster")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);