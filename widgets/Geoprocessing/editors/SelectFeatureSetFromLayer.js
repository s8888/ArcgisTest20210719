// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/editors/SelectFeatureSetFromLayer.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"inputNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerChooseNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"featuresetNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Deferred dijit/_TemplatedMixin jimu/dijit/SpatialFilterByFeatures jimu/utils ./BaseFeatureSetEditor dojo/text!./SelectFeatureSetFromLayer.html esri/dijit/analysis/utils".split(" "),function(d,f,g,h,e,k,l,m){var n=d(null,{constructor:function(a){this.layerObject=a},layerObject:0,toJson:function(){return this.layerObject}});return d([k,g],{templateString:l,editorName:"SelectFeatureSetFromLayer",postCreate:function(){this.inherited(arguments);this.spatialFilterByFeatures=
new h({map:this.map,types:this.param.defaultValue&&this.param.defaultValue.geometryType?[e.getTypeByGeometryType(this.param.defaultValue.geometryType)]:["point","polyline","polygon"]});this.spatialFilterByFeatures.placeAt(this.layerChooseNode);this.spatialFilterByFeatures.startup()},getGPValue:function(){if(0===this.activeViewIndex){var a=new f,b=this.spatialFilterByFeatures.getSelectedLayer();if(b){var c=this.spatialFilterByFeatures.featureSetChooserForSingleLayer.syncGetFeatures();c&&0<c.length?
(b=e.getFeatureSetByLayerAndFeatures(b,c),a.resolve(b)):a.resolve(new n(m.constructAnalysisInputLyrObj(b)))}else a.reject("no layer selected");return a}return this.wrapValueToDeferred(this.getFeatureSet())}})});