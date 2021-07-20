// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/TypeOptions.html":'\x3cdiv class\x3d"search-data-type-options"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/DropDownButton"\x3e\r\n    \x3cspan\x3e${i18n.search.typeOptions.prompt}\x3c/span\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/TooltipDialog"\r\n         data-dojo-attach-point\x3d"tooltipDialog"\r\n         data-dojo-props\x3d"\'class\':\'add-data-widget-popup\'"\x3e\r\n      \x3clabel for\x3d"${id}_mapServiceId" class\x3d"search-type-option"\x3e\r\n        \x3cdiv id\x3d"${id}_mapServiceId"\r\n          data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n          data-dojo-attach-point\x3d"mapServiceToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;Map Service\x26quot;\'\x3e\x3c/div\x3e\r\n        ${i18n.search.typeOptions.mapService}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_featureServiceId" class\x3d"search-type-option"\x3e\r\n        \x3cdiv id\x3d"${id}_featureServiceId"\r\n          data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n          data-dojo-attach-point\x3d"featureServiceToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;Feature Service\x26quot;\'\x3e\x3c/div\x3e\r\n        ${i18n.search.typeOptions.featureService}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_imageServiceId" class\x3d"search-type-option"\x3e\r\n        \x3cdiv id\x3d"${id}_imageServiceId"\r\n          data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n          data-dojo-attach-point\x3d"imageServiceToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;Image Service\x26quot;\'\x3e\x3c/div\x3e\r\n        ${i18n.search.typeOptions.imageService}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_vectorTileServiceId" class\x3d"search-type-option"\r\n        data-dojo-attach-point\x3d"vectorTileNode"\x3e\r\n        \x3cdiv id\x3d"${id}_vectorTileServiceId"\r\n          data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n          data-dojo-attach-point\x3d"vectorTileServiceToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;Vector Tile Service\x26quot;\'\x3e\x3c/div\x3e\r\n        ${i18n.search.typeOptions.vectorTileService}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_kmlId" class\x3d"search-type-option"\x3e\r\n        \x3cdiv id\x3d"${id}_kmlId"\r\n          data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n          data-dojo-attach-point\x3d"kmlToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;KML\x26quot;\'\x3e\x3c/div\x3e\r\n        ${i18n.search.typeOptions.kml}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_wmsId" class\x3d"search-type-option"\x3e\r\n        \x3cdiv id\x3d"${id}_wmsId"\r\n          data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n          data-dojo-attach-point\x3d"wmsToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;WMS\x26quot;\'\x3e\x3c/div\x3e\r\n        ${i18n.search.typeOptions.wms}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_wfsId" class\x3d"search-type-option"\x3e\r\n        \x3cdiv id\x3d"${id}_wfsId"\r\n          data-dojo-type\x3d"jimu/dijit/CheckBox"\r\n          data-dojo-attach-point\x3d"wfsToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;WFS\x26quot;\'\x3e\x3c/div\x3e\r\n        WFS\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/on ./SearchComponent dojo/text!./templates/TypeOptions.html dojo/i18n!../nls/strings esri/layers/VectorTileLayer dijit/TooltipDialog dijit/form/DropDownButton jimu/dijit/CheckBox".split(" "),function(g,h,a,b,k,l,m,d){return g([k],{i18n:m,templateString:l,postCreate:function(){this.inherited(arguments);d&&d.supported()||(console.warn("AddData: Vector Tile is not supported."),this.vectorTileNode.style.display="none");this.own(b(this.tooltipDialog,
"open",a.hitch(this,function(){this.tooltipDialog.domNode.className+=" "+this.searchPane.wabWidget.appConfig.theme.name})));this.own(b(this.mapServiceToggle,"change",a.hitch(this,function(){this.search()})));this.own(b(this.featureServiceToggle,"change",a.hitch(this,function(){this.search()})));this.own(b(this.imageServiceToggle,"change",a.hitch(this,function(){this.search()})));this.own(b(this.vectorTileServiceToggle,"change",a.hitch(this,function(){this.search()})));this.own(b(this.kmlToggle,"change",
a.hitch(this,function(){this.search()})));this.own(b(this.wmsToggle,"change",a.hitch(this,function(){this.search()})));this.own(b(this.wfsToggle,"change",a.hitch(this,function(){this.search()})))},getOptionWidgets:function(){return[this.mapServiceToggle,this.featureServiceToggle,this.imageServiceToggle,this.vectorTileServiceToggle,this.kmlToggle,this.wmsToggle,this.wfsToggle]},optionClicked:function(){},appendQueryParams:function(a){var b=function(a,b){0<a.length&&(a+=" OR ");return a+b},c="",e="",
d=!1;h.forEach(this.getOptionWidgets(),function(a){var f=a.domNode.getAttribute("data-option-q");e=b(e,f);a.getValue()&&(c=b(c,f),d=!0)});d||(c=e);null!==c&&0<c.length&&(c="("+c+")",a.q=null!==a.q&&0<a.q.length?a.q+(" AND "+c):c)}})});