(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{265:function(e,t,a){"use strict";a.r(t);var s=a(28),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"initial-cluster-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-cluster-deployment"}},[e._v("#")]),e._v(" Initial cluster deployment")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Before you attempt to run the playbooks to deploy the solution, make sure that you have fulfil the requirements:")]),e._v(" "),a("ul",[a("li",[e._v("Configure variables in "),a("code",[e._v("group_vars/all/vars")])]),e._v(" "),a("li",[e._v("Configure sensitive variables in "),a("code",[e._v("group_vars/all/vault")])]),e._v(" "),a("li",[e._v("Configure "),a("code",[e._v("hosts")])]),e._v(" "),a("li",[e._v("Make sure the Rancher URL (specified using the "),a("code",[e._v("rancher.url")]),e._v(" variable) resolves to the IP address of the load balancer you configured in the hosts inventory. Instructions for configuring the DNS are specific to your DNS implementation and are not provided here.")])]),e._v(" "),a("h2",{attrs:{id:"pre-deployment-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-deployment-validation"}},[e._v("#")]),e._v(" Pre-deployment validation")]),e._v(" "),a("p",[e._v("You can validate configuration parameters via the "),a("code",[e._v("playbooks/pre-checks.yml")]),e._v(" playbook.\nThe playbook attempts to verify that the configuration parameters defined in the "),a("code",[e._v("group_vars/all/vars.yml")]),e._v(" and\n"),a("code",[e._v("group_vars/all/vault.yml")]),e._v(" files contain appropriate values. It validates access to the vCenter instance hosting the\nHPE SimpliVity cluster and verifies the requested "),a("code",[e._v("datacenter")]),e._v(" and "),a("code",[e._v("vm_portgroup")]),e._v(" exist. It checks that the\nconfigured DNS and NTP servers are valid. It also attempts to ensure the hostnames and IP addresses that will be used\nwhen creating the RKE admin cluster (defined in the "),a("code",[e._v("hosts.yml")]),e._v(" file) are not already being used\nelsewhere in the environment.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/Rancher-on-SimpliVity\n$ ansible-playbook -i hosts playbooks/pre-checks.yml\n")])])]),a("h2",{attrs:{id:"download-required-software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-required-software"}},[e._v("#")]),e._v(" Download required software")]),e._v(" "),a("p",[e._v("Once you have satisfied the prerequisites and configured all of the variables to match your environment,\nprepare the staging area by running the "),a("code",[e._v("playbooks/getkits.yml")]),e._v(" to download the kits:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/Rancher-on-SimpliVity\n# ansible-playbook -i hosts playbooks/getkits.yml\n")])])]),a("h2",{attrs:{id:"deploy-rancher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-rancher"}},[e._v("#")]),e._v(" Deploy Rancher")]),e._v(" "),a("p",[e._v("Run the\nplaybook "),a("code",[e._v("site.yml")]),e._v(" to perform the initial cluster deployment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/Rancher-on-SimpliVity\n$ ansible-playbook -i hosts site.yml --vault-password-file .vault_pass\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);