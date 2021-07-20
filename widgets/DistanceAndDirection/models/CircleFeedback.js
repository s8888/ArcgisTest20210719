// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/topic esri/graphic esri/toolbars/draw esri/geometry/Circle esri/geometry/Polyline esri/geometry/geometryEngine ./Feedback".split(" "),function(g,d,h,f,l,k,m,n,p,e){e=g([e],{constructor:function(a){g.safeMixin(this,a);this.syncEvents();this.initGeometryService()},clearGraphics:function(){this.map.graphics.clear()},syncEvents:function(){f.subscribe("MANUAL_CIRCLE_RADIUS_INPUT",d.hitch(this,this.manualRadiusUpdate));f.subscribe("manual-circle-center-point-input",
d.hitch(this,this.onCenterPointManualInputHandler));f.subscribe("clear-points",d.hitch(this,this.clearPoints))},clearPoints:function(a){a&&(this._points=[],this.map.graphics.clear())},onCenterPointManualInputHandler:function(a){this._points=[];this._points.push(a.offset(0,0));this.set("startPoint",this._points[0]);this.map.centerAt(a)},manualRadiusUpdate:function(){this.circleGraphic&&this.map.graphics.remove(this.circleGraphic)},_onClickHandler:function(a){var c;this.map.snappingManager&&(c=this.map.snappingManager._snappingPoint);
var b=c||a.mapPoint;this._processAfterMapClick(b).then(d.hitch(this,function(a){this._points.push(b);switch(this._geometryType){case k.POINT:this.set("startPoint",b);this.set("startPointDD",a);this._drawEnd(b.offset(0,0));this._setTooltipMessage(0);break;case k.POLYLINE:switch(this._points.length){case 1:this.set("startPoint",b);this.set("startPointDD",a);this.startPoint=a;this.canProjectLocally&&(this.startPoint=b,this._onMouseMoveHandlerConnect=h.connect(this.map,"onMouseMove",this._onMouseMoveHandler));
break;case 2:this.endPoint=a,this._onDoubleClickHandler()}this._setTooltipMessage(this._points.length)}}))},_onMouseMoveHandler:function(a){var c;this.map.snappingManager&&(c=this.map.snappingManager._snappingPoint);a=this.setCircleGeometry(this.startPoint,c||a.mapPoint);this.cleanup();this.circleGraphic=new l(a,this.fillSymbol);this.map.graphics.add(this.circleGraphic)},_onDoubleClickHandler:function(){this.disconnectOnMouseMoveHandler();this.cleanup();this._clear();this._setTooltipMessage(0);if(this.circleGraphic)this._drawEnd(this.circleGraphic.geometry);
else{var a=this.setCircleGeometry(this.startPoint,this.endPoint);this._drawEnd(a)}},disconnectOnMouseMoveHandler:function(){h.disconnect(this._onMouseMoveHandlerConnect)},cleanup:function(){this.circleGraphic&&this.map.graphics.remove(this.circleGraphic)},setCircleGeometry:function(a,c){var b=new n(a.spatialReference);b.addPath([a,c]);c=p.geodesicLength(b,9001);b=this.coordTool.convertMetersToUnits(c,this.lengthUnit);this.isDiameter&&(b*=2);this.set("length",b);return new m(a,{radius:c,geodesic:!0,
numberOfPoints:360})}});e.DD_CIRCLE_LENGTH_DID_CHANGE="DD_CIRCLE_LENGTH_DID_CHANGE";return e});