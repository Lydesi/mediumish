(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{410:function(t,n,e){"use strict";e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return s})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return f}));e(38),e(104),e(106),e(242);var r=/#.*$/,i=/\.(md|html)$/,l=/\/$/,o=/^(https?:|mailto:|tel:)/;function u(t){return o.test(t)}function a(t){return/^mailto:/.test(t)}function s(t){return/^tel:/.test(t)}function c(t){if(u(t))return t;var n=t.match(r),e=n?n[0]:"",o=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return l.test(o)?t:o+".html"+e}function f(t,n,e){if(!t)return e;for(var r,i=n;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||e}},434:function(t,n,e){},445:function(t,n,e){"use strict";e(434)},463:function(t,n,e){"use strict";e.r(n);e(245),e(109),e(11),e(108);var r=e(410),i={props:{link:{required:!0}},computed:{normalizedlink:function(){return Object(r.a)(this.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.normalizedlink})):"/"===this.normalizedlink}},methods:{isExternal:r.c,isMailto:r.d,isTel:r.e}},l=(e(445),e(18)),o=Object(l.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.normalizedlink)?e("a",{staticClass:"external",attrs:{href:t.normalizedlink,target:t.isMailto(t.normalizedlink)||t.isTel(t.normalizedlink)?null:"_blank",rel:t.isMailto(t.normalizedlink)||t.isTel(t.normalizedlink)?null:"noopener noreferrer"}},[t._t("default")],2):e("router-link",{attrs:{to:t.normalizedlink,exact:t.exact}},[t._t("default")],2)}),[],!1,null,null,null);n.default=o.exports}}]);