(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{259:function(e,t,o){"use strict";o.r(t);var n=o(2),i=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"not-recommended-configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#not-recommended-configurations","aria-hidden":"true"}},[e._v("#")]),e._v(" Not recommended configurations")]),e._v(" "),o("p",[e._v("You may find that the content of the advanced chapter mainly focusing on the transport layer protocol. If you combine various protocols and rules, there are many types of these combinations. However, there are some combinations we do not suggest and the reasons are given in this section.")]),e._v(" "),o("ul",[o("li",[e._v("TLS+KCP")])]),e._v(" "),o("p",[e._v("This is a combination that quite a few people like. The reason for choosing KCP is to have a better online experience in some bad network environments. There are two reasons for using TLS: First, it is considered that TLS has the same features as HTTPS and is not easily walled; secondly, TLS has a better encryption effect and is not easily walled. For the first point, although HTTPS is based on TLS, it is not equivalent to TLS, so the same argument that TLS is the same as HTTPS is wrong; for the second point, the chance of being walled is stronger with a stronger encryption algorithm. The views have not been justified. However, this is not the reason I don't recommend it. The real reason is that there is no harm in not using TLS. There is not enough benefit to use TLS.")]),e._v(" "),o("ul",[o("li",[e._v("TLS + HTTP obfuscating")])]),e._v(" "),o("p",[e._v("I have not tested this combination, it is not clear whether the outermost layer is TLS or HTTP masquerading. Either way, the configuration in the inner layer will lose its meaning.")]),e._v(" "),o("ul",[o("li",[e._v("WebSocket only")])]),e._v(" "),o("p",[e._v("In theory, the WebSocket protocol has a lower performance than TCP, so if you are not using CDN, Nginx or on PaaS, then use TCP.")])])},[],!1,null,null,null);t.default=i.exports}}]);