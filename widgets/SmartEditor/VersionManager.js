// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["jimu/shared/BaseVersionManager"],function(e){function d(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){return a}},{version:"1.4",upgrader:function(a){return a}},{version:"2.0Beta",upgrader:function(a){return a}},{version:"2.0",upgrader:function(a){return a}},{version:"2.0.1",upgrader:function(a){return a}},{version:"2.1",upgrader:function(a){return a}},
{version:"2.2",upgrader:function(a){if(!0===a.hasOwnProperty("editor")&&(!1===a.editor.hasOwnProperty("listenToGF")&&(a.editor.listenToGF=!1),!1===a.editor.hasOwnProperty("keepTemplateSelected")&&(a.editor.keepTemplateSelected=!1),!0===a.editor.hasOwnProperty("layerInfos")&&0<a.editor.layerInfos.length))for(var b=0;b<a.editor.layerInfos.length;b++)if(a.editor.layerInfos[b].hasOwnProperty("fieldInfos")&&0<a.editor.layerInfos[b].fieldInfos.length)for(var c=0;c<a.editor.layerInfos[b].fieldInfos.length;c++)!0===
a.editor.layerInfos[b].fieldInfos[c].hasOwnProperty("isEditable")&&!0===a.editor.layerInfos[b].fieldInfos[c].hasOwnProperty("visible")&&!0===a.editor.layerInfos[b].fieldInfos[c].isEditable&&!1===a.editor.layerInfos[b].fieldInfos[c].visible&&(a.editor.layerInfos[b].fieldInfos[c].isEditable=!1);return a}},{version:"2.5",upgrader:function(a){a.editor.editGeometryDefault=!1;a.editor.autoSaveEdits=!1;return a}},{version:"2.6",upgrader:function(a){a.editor.displayPresetTop=!1;a.editor.displayShapeSelector=
!1;return a}}]}d.prototype=new e;return d.prototype.constructor=d});