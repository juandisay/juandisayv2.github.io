(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0a9a0f90":"7232740b","chunk-3bf077e0":"409ceb32","chunk-62b3fe36":"0c639072","chunk-9062fa06":"2364cc9e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0a9a0f90":1,"chunk-3bf077e0":1,"chunk-62b3fe36":1,"chunk-9062fa06":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0a9a0f90":"9e3b61b3","chunk-3bf077e0":"7931d6d4","chunk-62b3fe36":"f69f3e31","chunk-9062fa06":"f69f3e31"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"06f9":function(e,t,n){"use strict";var r=n("daa0"),a=n.n(r);a.a},"439a":function(e,t,n){},"4d39":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9883e":function(e,t,n){"use strict";var r=n("4d39"),a=n.n(r);a.a},"9c0c":function(e,t,n){},b383:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)},o=[],c=n("9f12"),i=n("8b83"),u=n("c65a"),s=n("c03e"),l=n("9ab4"),f=n("60a3"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/pricing"}},[e._v("Pricing")])],1),n("li",[n("router-link",{attrs:{to:"/templates"}},[e._v("Templates")])],1),n("li",[n("router-link",{attrs:{to:"/apps"}},[e._v("Apps")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1)])])},d=[],h=function(e){function t(){return Object(c["a"])(this,t),Object(i["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(f["c"]);h=l["a"]([f["a"]],h);var b=h,v=b,m=(n("9883e"),n("2877")),g=Object(m["a"])(v,p,d,!1,null,"3cf4e87f",null),y=g.exports,_=function(e){function t(){return Object(c["a"])(this,t),Object(i["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(f["c"]);_=l["a"]([Object(f["a"])({components:{NavBar:y}})],_);var j=_,k=j,O=(n("5c0b"),Object(m["a"])(k,a,o,!1,null,null,null)),w=O.exports,E=(n("d3b7"),n("8c4f")),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("span",[e._v("juandisay")]),n("Homepages",{staticClass:"backgrounds",attrs:{titles:"Juandisay"}})],1)},S=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro"},[e._m(0),e._m(1),n("h3",[e._v("Contact Us")]),n("div",{attrs:{id:"hireus"}},[e._m(2),e._m(3),n("span",[n("router-link",{attrs:{to:"/casestudy",target:"_blank"}},[e._v("Case Study")])],1)])])},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"desc"},[e._v("We are team of professional")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"desc"},[e._v("Web App Developers and Creative Web Modern Designers")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("a",{attrs:{href:"mailto:info@juandisay.org"}},[e._v("Mail")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("a",{attrs:{href:"https://linkedin.com/in/juandisay",target:"_blank"}},[e._v("Linkedin")])])}],P=function(e){function t(){return Object(c["a"])(this,t),Object(i["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(f["c"]);l["a"]([Object(f["b"])()],P.prototype,"titles",void 0),P=l["a"]([f["a"]],P);var N=P,T=N,$=(n("fe52"),Object(m["a"])(T,x,A,!1,null,"1d91a392",null)),B=$.exports,L=function(e){function t(){return Object(c["a"])(this,t),Object(i["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(f["c"]);L=l["a"]([Object(f["a"])({components:{Homepages:B}})],L);var M=L,H=M,D=(n("06f9"),Object(m["a"])(H,C,S,!1,null,"73447f28",null)),q=D.exports;r["default"].use(E["a"]);var F=[{path:"/",name:"Home",component:q},{path:"/apps",name:"apps",component:function(){return n.e("chunk-9062fa06").then(n.bind(null,"e082"))}},{path:"/templates",name:"templates",component:function(){return n.e("chunk-62b3fe36").then(n.bind(null,"98ca"))}},{path:"/pricing",name:"pricing",component:function(){return n.e("chunk-0a9a0f90").then(n.bind(null,"dbc9"))}},{path:"/cart",name:"cart",component:function(){return n.e("chunk-3bf077e0").then(n.bind(null,"b789"))}},{path:"/casestudy",beforeEnter:function(){location.href="https://medium.com/10minuteread"}}],J=new E["a"]({mode:"history",base:"/",routes:F}),W=J,U=n("2f62");r["default"].use(U["a"]);var I=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=n("9483");Object(K["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var z=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(z["a"]);n("b383");r["default"].config.productionTip=!1,new r["default"]({router:W,store:I,render:function(e){return e(w)}}).$mount("#app")},daa0:function(e,t,n){},fe52:function(e,t,n){"use strict";var r=n("439a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0ad1d10d.js.map