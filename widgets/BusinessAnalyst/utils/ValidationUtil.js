// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/dom-class"],function(a){return{MIN_RINGS_VALUE:0,MAX_RINGS_VALUE:1E3,MIN_DTWT_VALUE:0,MAX_DTWT_VALUE:300,validateInvalidValues:function(f,c,g,d,k){var e=f.get("value"),l=c.get("value"),b=g.get("value"),h=!0;0<e.length&&null===this._tryParseFloat(e)?(h=!1,a.remove(d,"hidden"),d.innerHTML=k,a.add(f.domNode,"invalidValue")):a.remove(f.domNode,"invalidValue");0<l.length&&null===this._tryParseFloat(l)?(h=!1,a.remove(d,"hidden"),d.innerHTML=k,a.add(c.domNode,"invalidValue")):a.remove(c.domNode,
"invalidValue");0<b.length&&null===this._tryParseFloat(b)?(h=!1,a.remove(d,"hidden"),d.innerHTML=k,a.add(g.domNode,"invalidValue")):a.remove(g.domNode,"invalidValue");h&&a.add(d,"hidden");return h},validateMinMaxValues:function(f,c,g,d,k,e,l){var b=f.get("value"),h=c.get("value"),n=g.get("value"),m=!0;0<b.length?(b=parseFloat(b),b<d||b>k?(m=!1,a.remove(e,"hidden"),e.innerHTML=l,a.add(f.domNode,"invalidValue")):a.remove(f.domNode,"invalidValue")):a.remove(f.domNode,"invalidValue");0<h.length?(b=parseFloat(h),
b<d||b>k?(m=!1,a.remove(e,"hidden"),e.innerHTML=l,a.add(c.domNode,"invalidValue")):a.remove(c.domNode,"invalidValue")):a.remove(c.domNode,"invalidValue");0<n.length?(b=parseFloat(n),b<d||b>k?(m=!1,a.remove(e,"hidden"),e.innerHTML=l,a.add(g.domNode,"invalidValue")):a.remove(g.domNode,"invalidValue")):a.remove(g.domNode,"invalidValue");m&&a.add(e,"hidden");return m},_tryParseFloat:function(a){var c=null;null!==a&&0<a.length&&(isNaN(a)||(c=parseFloat(a)));return c}}});