// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare jimu/LayerInfos/LayerInfoForCollection jimu/LayerInfos/LayerInfoForMapService jimu/LayerInfos/LayerInfoForKML jimu/LayerInfos/LayerInfoForGeoRSS jimu/LayerInfos/LayerInfoForDefault jimu/LayerInfos/LayerInfoForWMS jimu/LayerInfos/LayerInfoForDefaultDynamic jimu/LayerInfos/LayerInfoForDefaultDynamicShipFeatureLayer jimu/LayerInfos/LayerInfoForDefaultTile jimu/LayerInfos/LayerInfoForDefaultWMS jimu/LayerInfos/LayerInfoForDefaultTable jimu/LayerInfos/LayerInfoForDefaultImage jimu/LayerInfos/LayerInfoForDefaultStream jimu/LayerInfos/LayerInfoForDefaultKML".split(" "),
function(c,d,e,f,g,h,k,l,m,n,p,q,r,t,u){return c(null,{constructor:function(a,b){this.map=a;this.layerInfos=b},create:function(a){var b=null;if(a.featureCollection)b=new d(a,this.map,this,this.layerInfos);else if("esri.layers.KMLLayer"===a.layerObject.declaredClass)b=new f(a,this.map,this,this.layerInfos);else if("esri.layers.GeoRSSLayer"===a.layerObject.declaredClass)b=new g(a,this.map,this,this.layerInfos);else if("esri.layers.WMSLayer"!==a.layerObject.declaredClass||a.selfType)if("esri.layers.ArcGISDynamicMapServiceLayer"===
a.layerObject.declaredClass||"esri.layers.ArcGISTiledMapServiceLayer"===a.layerObject.declaredClass)b=new e(a,this.map,this,this.layerInfos);else if("esri.layers.ArcGISImageServiceLayer"===a.layerObject.declaredClass||"esri.layers.ArcGISImageServiceVectorLayer"===a.layerObject.declaredClass)b=new r(a,this.map,this,this.layerInfos);else if("esri.layers.StreamLayer"===a.layerObject.declaredClass)b=new t(a,this.map,this,this.layerInfos);else switch("Table"===a.layerObject.type&&(a.selfType="table"),
a.selfType){case "mapservice_dynamic_ship_featurelayer":b=new m(a,this.map,this,this.layerInfos);break;case "mapservice_dynamic_group":case "mapservice_dynamic":b=new l(a,this.map,this,this.layerInfos);break;case "mapservice_tiled_group":case "mapservice_tiled":b=new n(a,this.map,this,this.layerInfos);break;case "wms":b=new p(a,this.map,this,this.layerInfos);break;case "kml":b=new u(a,this.map,this,this.layerInfos);break;case "table":b=new q(a,this.map,this,this.layerInfos);break;default:b=new h(a,
this.map,this,this.layerInfos)}else b=new k(a,this.map,this,this.layerInfos);return b}})});