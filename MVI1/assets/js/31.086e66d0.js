(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{436:function(e,t,o){"use strict";o.r(t);var a=o(45),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"redeployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#redeployment"}},[e._v("#")]),e._v(" Redeployment")]),e._v(" "),o("p",[e._v("The playbook "),o("code",[e._v("playbooks/clean.yml")]),e._v(" is a convenience playbook for stripping down a cluster. This can be very useful\nin a proof-of-concept environment, where you may want to regularly tear down and re-deploy your test cluster.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Set the value of the variable "),o("code",[e._v("delete_templates")]),e._v(" to "),o("code",[e._v("false")]),e._v(" if you don't want your templates to be deleted")])]),e._v(" "),o("li",[o("p",[e._v("Run the playbook "),o("code",[e._v("playbooks/clean.yml")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ cd ~/Rancher-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/clean.yml --vault-password-file .vault_pass\n")])])])])]),e._v(" "),o("p",[e._v("The playbook will delete VMs and templates.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" The "),o("code",[e._v("clean.yml")]),e._v(" playbook does not remove any VMs associated with the user cluster since those are created by Rancher.  Those VMs must be either deleted by deleting the user cluster in the Rancher UI or manually powering them off and deleting them from vCenter.")])])}),[],!1,null,null,null);t.default=l.exports}}]);