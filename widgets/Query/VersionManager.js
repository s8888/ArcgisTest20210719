// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(e){function d(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){for(var b=null,c=0;c<a.queries.length;c++)b=a.queries[c],b.orderByFields=[],b.popup.fields=this._updatePopupFields(b.popup.fields);return a},_updatePopupFields:function(a){for(var b=[],c=null,d=0;d<a.length;d++)c=a[d],c.showInInfoWindow&&b.push({name:c.name,
alias:c.alias,specialType:c.specialType});return b}},{version:"1.4",upgrader:function(a){return a}},{version:"2.0Beta",upgrader:function(a){return a}},{version:"2.0",upgrader:function(a){return a}},{version:"2.0.1",upgrader:function(a){return a}},{version:"2.1",upgrader:function(a){for(var b=null,c=0;c<a.queries.length;c++)b=a.queries[c],delete b.objectIdField,b.icon="",b.showSQL=!0,b.useLayerSymbol=!1,b.keepResultsOnMapAfterCloseWidget=!1,b.enableExport=!1,b.singleResultLayer=!0,b.webMapLayerId=
"",b.spatialFilter=b.resultsSymbol?{currentMapExtent:{"default":!1},drawing:{"default":!1,geometryTypes:"POINT LINE POLYLINE FREEHAND_POLYLINE TRIANGLE EXTENT CIRCLE ELLIPSE POLYGON FREEHAND_POLYGON".split(" "),buffer:null},useFeatures:null,fullLayerExtent:{"default":!0}}:null;return a}},{version:"2.2",upgrader:function(a){a.hideLayersAfterWidgetClosed=!0;for(var b=null,c=0;c<a.queries.length;c++)b=a.queries[c],delete b.keepResultsOnMapAfterCloseWidget;return a}},{version:"2.3",upgrader:function(a){for(var b=
null,c=0;c<a.queries.length;c++)b=a.queries[c],b.canModifySymbol=!1;return a}},{version:"2.4",upgrader:function(a){a.labelTasks="";a.labelResults="";return a}},{version:"2.5",upgrader:function(a){return a}},{version:"2.6",upgrader:function(a){return a}},{version:"2.7",upgrader:function(a){return a}},{version:"2.8",upgrader:function(a){return a}},{version:"2.9",upgrader:function(a){return a}},{version:"2.10",upgrader:function(a){a.showFilterLabel=!0;return a}},{version:"2.11",upgrader:function(a){if(!a.queries||
!a.queries.length)return a;for(var b=0;b<a.queries.length;b++)a.queries[b].defaultExpand=!0;return a}},{version:"2.12",upgrader:function(a){if(!a.queries||!a.queries.length)return a;for(var b=0;b<a.queries.length;b++)a.queries[b].customResultName=!0;return a}}]}d.prototype=new e;return d.prototype.constructor=d});