// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/Deferred","dojo/when"],function(e,l){var f,c={},g=function(a){var b=new e;if(c.locked)return setTimeout(function(){g(a)},50),b;if(c[a])return c.locked=!0,b.resolve(c[a]),b;c.locked=!0;f([a],function(){c[a]=window.jQuery;b.resolve(c[a])});return b},k=function(a,b,c){f([a[b]],function(){b===a.length-1?c.resolve():(b++,k(a,b,c))})},m=function(a,b){a=new e;b[0]?k(b,0,a):a.resolve();return a},n=function(a,b){var h=new e;g(a).then(function(d){m(a,b).then(function(){c.locked=!1;h.resolve(d)})});
return h};return{load:function(a,b,c){a=a.split(",");var d=[];f=b;0===a.length?c(null):(b=a[0],d=a.slice(1),l(n(b,d),c))}}});