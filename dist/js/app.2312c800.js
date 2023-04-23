(function(t){function e(e){for(var r,i,u=e[0],c=e[1],l=e[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return u.p+"js/"+({edu:"edu",intern:"intern",pub:"pub"}[t]||t)+"."+{edu:"ee8da317",intern:"1b47542e",pub:"4ec7b288"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v(" > "),n("router-link",{attrs:{to:"/",exact:""}},[t._v(" Prabal Banerjee ")]),t._v(" > "+t._s(t.$route.path.charAt(1).toUpperCase()+t.$route.path.slice(2))),n("span",{staticClass:"blinking-cursor",attrs:{id:"homeBlink"}},[t._v("_")])],1),n("router-view"),n("table",{staticClass:"myTable"},[n("tr",[n("td",[n("router-link",{attrs:{to:"/",exact:""}},[t._v(" Home ")])],1),n("td",[n("router-link",{attrs:{to:"/publications"}},[t._v(" Publications ")])],1),n("td",[n("router-link",{attrs:{to:"/experience"}},[t._v(" Experience ")])],1),n("td",[n("router-link",{attrs:{to:"/education"}},[t._v(" Education ")])],1)])]),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"contact"},[t._v(" mail (dot) <my first name> (at) gmail (dot) com"),n("br"),n("a",{staticStyle:{display:"inline-block"},attrs:{target:"_blank",href:"https://in.linkedin.com/pub/prabal-banerjee/120/774/b06"}},[t._v("www.linkedin.com/in/prabal-banerjee")])])}],i={name:"app",data:function(){return{publicPath:"/"}}},u=i,c=(n("034f"),n("2877")),l=Object(c["a"])(u,a,o,!1,null,null,null),s=l.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mainText"},[t._v(" Co-Founder @ "),n("a",{attrs:{target:"_blank",href:"https://www.availproject.org/"}},[t._v("Avail")]),n("br"),n("br"),t._v(" & "),n("br"),n("br"),t._v(" Ph.D. Candidate @ "),n("a",{attrs:{target:"_blank",href:"http://www.isical.ac.in"}},[t._v("ISI Kolkata")]),n("br"),n("br"),n("br"),n("br"),n("span",{staticStyle:{"font-size":"20px"}},[t._v("Research Interests : blockchains, data availability, fairness, digital exchange, symmetric key encryption")])])}],b={},h=Object(c["a"])(b,f,d,!1,null,null,null),v=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticStyle:{position:"fixed",left:"5%",bottom:"50%"}},[t._v("Sorry, page not found")])},_=[],y={},g=Object(c["a"])(y,m,_,!1,null,null,null),w=g.exports;r["a"].use(p["a"]);var k=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:v},{path:"/publications",component:function(){return n.e("pub").then(n.bind(null,"8b44"))}},{path:"/experience",component:function(){return n.e("intern").then(n.bind(null,"2623"))}},{path:"/education",component:function(){return n.e("edu").then(n.bind(null,"0d51"))}},{path:"*",component:w}]});r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(t){return t(s)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.2312c800.js.map