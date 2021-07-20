// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dijit/_WidgetBase dojo/Evented dojo/_base/lang dojo/_base/array esri/dijit/Search dojo/dom-construct esri/tasks/locator esri/layers/FeatureLayer jimu/utils jimu/LayerInfos/LayerInfos ./searchSourceUtils dojo/when dojo/Deferred dojo/promise/all dojo/on esri/InfoTemplate dojo/query dojo/keys dojo/_base/event".split(" "),function(m,n,p,c,f,q,r,t,u,h,v,k,w,x,y,l,z,A,B,C){return m([n,p],{config:null,map:null,searchOptions:null,layerInfosObj:null,_urlParams:{},constructor:function(b){c.mixin(this,
b)},postCreate:function(){this._urlParams={}},startup:function(){this.inherited(arguments);v.getInstance(this.map,this.map.itemInfo).then(c.hitch(this,function(b){this.layerInfosObj=b;this.own(this.layerInfosObj.on("layerInfosFilterChanged",c.hitch(this,this.onLayerInfosFilterChanged)));k.setMap(this.map);k.setLayerInfosObj(this.layerInfosObj);k.setAppConfig(this.appConfig);w(k.getConfigInfo(this.config.searchSourceSettings)).then(c.hitch(this,function(a){this.config.searchSourceSettings||(this.config.searchSourceSettings=
a);return y(this._convertConfig(a)).then(function(a){return f.filter(a,function(a){return a})})})).then(c.hitch(this,function(a){this.domNode&&this._init(a)}))}))},_convertConfig:function(b){return f.map(b.sources,c.hitch(this,function(a){var b=new x;if(a&&a.url&&"locator"===a.type){var d={locator:new t(a.url||""),outFields:["*"],singleLineFieldName:a.singleLineFieldName||"",name:h.stripHTML(a.name||""),placeholder:h.stripHTML(a.placeholder||""),countryCode:a.countryCode||"",maxSuggestions:a.maxSuggestions,
maxResults:a.maxResults||6,zoomScale:a.zoomScale||5E4,useMapExtent:!!a.searchInCurrentMapExtent};a.enableLocalSearch&&(d.localSearchOptions={minScale:a.localSearchMinScale,distance:a.localSearchDistance});b.resolve(d)}else a&&a.url&&"query"===a.type?(d=new u(a.url||null,{outFields:["*"]}),this.own(l(d,"load",c.hitch(this,function(c){var d,e,g;d=c.layer;e=this._getInfoTemplate(d,a,a.displayField);g=null;a.searchFields&&0<a.searchFields.length?g=a.searchFields:(g=[],f.forEach(d.fields,function(a){"esriFieldTypeOID"!==
a.type&&a.name!==d.objectIdField&&"esriFieldTypeGeometry"!==a.type&&g.push(a.name)}));c={featureLayer:d,outFields:["*"],searchFields:g,displayField:a.displayField||"",exactMatch:!!a.exactMatch,name:h.stripHTML(a.name||""),placeholder:h.stripHTML(a.placeholder||""),maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,zoomScale:a.zoomScale||5E4,infoTemplate:e,useMapExtent:!!a.searchInCurrentMapExtent,_featureLayerId:a.layerId};e||delete c.infoTemplate;c._featureLayerId&&(e=this.layerInfosObj.getLayerInfoById(c._featureLayerId),
d.setDefinitionExpression(e.getFilter()));b.resolve(c)}))),this.own(l(d,"error",function(){b.resolve(null)}))):b.resolve(null);return b}))},_getInfoTemplate:function(b,a,g){var d,e,f;e=(d=this.layerInfosObj.getLayerInfoById(a.layerId))&&d.getInfoTemplate();f=d&&e;if(d&&!f)return null;f||(e=new z,e.setTitle("\x26nbsp;"),e.setContent(c.hitch(this,"_formatContent",a.name,b,g)));return e},_init:function(b){var a;a=1===b.length?0:"all";b={map:this.map,addLayersFromMap:!1,autoNavigate:!1,autoComplete:!0,
minCharacters:0,searchDelay:100,enableInfoWindow:!0,enableHighlight:this.config.searchSourceSettings.showInfoWindowOnSelect,showInfoWindowOnSelect:this.config.searchSourceSettings.showInfoWindowOnSelect,allPlaceholder:h.stripHTML(this.config.searchSourceSettings.allPlaceholder),sources:b,activeSourceIndex:a};c.mixin(b,this.searchOptions);this._urlParams=this._getUrlParams();this.search=new q(b,r.create("div",{"class":"searchControl"},this.domNode));this.own(this.search.on("load",c.hitch(this,this._load)));
this.own(this.search.on("select-result",c.hitch(this,this._selectResult)));this.own(this.search.on("clear-search",c.hitch(this,this._clear)));this.own(this.search.on("search-results",c.hitch(this,this._results)));this.own(this.search.on("suggest-results",c.hitch(this,this._results)));this.search.startup()},_getUrlParams:function(){var b=h.urlToObject(document.location.href);b.query=b.query||{};return b.query},setSearchText:function(b){this.search.set("value",b)},getSearchText:function(){return this.search.get("value")},
getActiveSource:function(){return this.search.activeSource},clearSearchText:function(){this.search&&this.search.clear()},_setSearchString:function(){this._urlParams.find&&(this.search.set("value",this._urlParams.find),setTimeout(c.hitch(this,function(){this.search.search()}),1E3))},onLayerInfosFilterChanged:function(b){f.some(b,c.hitch(this,function(a){this.search&&this.search.sources&&0<this.search.sources.length&&f.forEach(this.search.sources,function(b){b._featureLayerId===a.id&&b.featureLayer.setDefinitionExpression(a.getFilter())})}))},
_load:function(b){this.emit("search-loaded",b);this._setSearchString()},_results:function(b){this.emit("search-results",b)},_clear:function(b){this.emit("clear-search",b)},_selectResult:function(b){this.search.blur();this.emit("select-result",b)},attachTabEventToSearchMenuItems:function(){if(this.search){var b=A(".sourcesMenu",this.search.domNode);if(b&&0<b.length&&0<b[0].children.length&&(b=b[0].children[0])){var a=b.children;f.forEach(a,c.hitch(this,function(b,d){this.own(l(b,"keydown",c.hitch(this,
function(b){b.keyCode===B.TAB&&d===a.length-1&&(C.stop(b),this.emit("setFirstFocusNode"))})))}))}}}})});