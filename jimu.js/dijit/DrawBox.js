// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/DrawBox.html":'\x3cdiv style\x3d"position:relative;width:100%;"\x3e\r\n\t\x3cdiv class\x3d"draw-items"\x3e\r\n\t\t\x3cdiv title\x3d"${nls.point}" data-geotype\x3d"POINT" data-commontype\x3d"point" class\x3d"draw-item point-icon" data-dojo-attach-point\x3d"pointIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.line}" data-geotype\x3d"LINE" data-commontype\x3d"polyline" class\x3d"draw-item line-icon" data-dojo-attach-point\x3d"lineIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.polyline}" data-geotype\x3d"POLYLINE" data-commontype\x3d"polyline" class\x3d"draw-item polyline-icon" data-dojo-attach-point\x3d"polylineIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.freehandPolyline}" data-geotype\x3d"FREEHAND_POLYLINE" data-commontype\x3d"polyline" class\x3d"draw-item freehand-polyline-icon" data-dojo-attach-point\x3d"freehandPolylineIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.arrow}" data-geotype\x3d"ARROW" data-commontype\x3d"arrow" class\x3d"draw-item arrow-icon" data-dojo-attach-point\x3d"arrowIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.triangle}" data-geotype\x3d"TRIANGLE" data-commontype\x3d"polygon" class\x3d"draw-item triangle-icon" data-dojo-attach-point\x3d"triangleIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.extent}" data-geotype\x3d"EXTENT" data-commontype\x3d"polygon" class\x3d"draw-item extent-icon" data-dojo-attach-point\x3d"extentIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.circle}" data-geotype\x3d"CIRCLE" data-commontype\x3d"polygon" class\x3d"draw-item circle-icon" data-dojo-attach-point\x3d"circleIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.ellipse}" data-geotype\x3d"ELLIPSE" data-commontype\x3d"polygon" class\x3d"draw-item ellipse-icon" data-dojo-attach-point\x3d"ellipseIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.polygon}" data-geotype\x3d"POLYGON" data-commontype\x3d"polygon" class\x3d"draw-item polygon-icon" data-dojo-attach-point\x3d"polygonIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.freehandPolygon}" data-geotype\x3d"FREEHAND_POLYGON" data-commontype\x3d"polygon" class\x3d"draw-item freehand-polygon-icon" data-dojo-attach-point\x3d"freehandPolygonIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.text}" data-geotype\x3d"TEXT" data-commontype\x3d"text" class\x3d"draw-item text-icon" data-dojo-attach-point\x3d"textIcon" data-dojo-attach-point\x3d"textIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"drawings-clear" data-dojo-attach-point\x3d"btnClear" title\x3d"${nls.clear}"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/DrawBox.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dijit/a11yclick dojo/query dojo/Evented esri/graphic esri/layers/GraphicsLayer jimu/dijit/Draw esri/symbols/jsonUtils esri/geometry/Polygon".split(" "),function(q,r,t,u,v,e,c,l,h,p,g,w,x,y,m,n,z){var k={};return q([r,t,u,w],{templateString:v,baseClass:"jimu-draw-box",declaredClass:"jimu.dijit.DrawBox",nls:null,
drawLayer:null,drawLayerId:null,drawToolBar:null,_isDisabled:!1,_shiftKey:!1,_ctrlKey:!1,_metaKey:!1,types:null,geoTypes:null,map:null,pointSymbol:null,polylineSymbol:null,polygonSymbol:null,textSymbol:null,showClear:!1,keepOneGraphic:!1,deactivateAfterDrawing:!0,postMixInProperties:function(){this.nls=window.jimuNls.drawBox},postCreate:function(){this.inherited(arguments);var a={};this.drawLayerId&&(a.id=this.drawLayerId);this.drawLayer=new y(a);this._initDefaultSymbols();this._initTypes();a=g(".draw-item",
this.domNode);a.forEach(function(a){c.setAttr(a,"role","button");c.setAttr(a,"tabindex","0")});this.own(a.on(p,e.hitch(this,this._onItemClick)));c.setAttr(this.btnClear,"role","button");c.setAttr(this.btnClear,"tabindex","0");this.own(h(this.btnClear,p,e.hitch(this,this._onClickClear)));this.own(h(document.body,"keydown",e.hitch(this,function(a){this._shiftKey=!!a.shiftKey;this._ctrlKey=!!a.ctrlKey;this._metaKey=!!a.metaKey})));this.own(h(document.body,"keyup",e.hitch(this,function(a){this._shiftKey=
!!a.shiftKey;this._ctrlKey=!!a.ctrlKey;this._metaKey=!!a.metaKey})));this.map&&this.setMap(this.map);c.setStyle(this.btnClear,"display",!0===this.showClear?"block":"none");this.enable();k[this.id]=this},enable:function(){this._isDisabled=!1;c.addClass(this.domNode,"enabled");c.removeClass(this.domNode,"disabled")},disable:function(){this._isDisabled=!0;c.addClass(this.domNode,"disabled");c.removeClass(this.domNode,"enabled");this.deactivate()},hideLayer:function(){this.drawLayer&&this.drawLayer.hide()},
showLayer:function(){this.drawLayer&&this.drawLayer.show()},isEnabled:function(){return!this._isDisabled},isActive:function(){var a=g(".draw-item.jimu-state-active",this.domNode);return a&&0<a.length},disableWebMapPopup:function(){this.map&&this.map.setInfoWindowOnClick(!1)},enableWebMapPopup:function(){this.map&&this.map.setInfoWindowOnClick(!0)},destroy:function(){this.deactivate();this.drawLayer&&this.map&&this.map.removeLayer(this.drawLayer);this.drawLayer=this.map=this.drawToolBar=null;delete k[this.id];
this.inherited(arguments)},setMap:function(a){a&&(this.map=a,this.map.addLayer(this.drawLayer),this.drawToolBar=new m(this.map),this.drawToolBar.setMarkerSymbol(this.pointSymbol),this.drawToolBar.setLineSymbol(this.polylineSymbol),this.drawToolBar.setFillSymbol(this.polygonSymbol),this.own(h(this.drawToolBar,"draw-end",e.hitch(this,this._onDrawEnd))))},setPointSymbol:function(a){this.pointSymbol=a;this.drawToolBar.setMarkerSymbol(this.pointSymbol)},setLineSymbol:function(a){this.polylineSymbol=a;
this.drawToolBar.setLineSymbol(a)},setPolygonSymbol:function(a){this.polygonSymbol=a;this.drawToolBar.setFillSymbol(a)},setTextSymbol:function(a){this.textSymbol=a},reset:function(){this.deactivate();this.clear()},clear:function(){this.drawLayer.clear();this.onClear()},deactivate:function(){this.enableWebMapPopup();g(".draw-item",this.domNode).removeClass("jimu-state-active");this.drawToolBar&&(this.drawToolBar.deactivate(),this.emit("draw-deactivate"))},activate:function(a){var b=null,d=g(".draw-item",
this.domNode);"TEXT"===a?(a="POINT",b=this.textIcon):(d=d.filter(function(b){return b.getAttribute("data-geotype")===a}),0<d.length&&(b=d[0]));b&&this._activate(b)},onIconSelected:function(a,b,d){this.emit("icon-selected",a,b,d)},onDrawEnd:function(a,b,d,c,g,e){this.emit("draw-end",a,b,d,c,g,e)},onClear:function(){this.emit("clear")},addGraphic:function(a){this.keepOneGraphic&&this.drawLayer.clear();this.drawLayer.add(a)},removeGraphic:function(a){this.drawLayer.remove(a)},getFirstGraphic:function(){var a=
null;this.drawLayer&&0<this.drawLayer.graphics.length&&(a=this.drawLayer.graphics[0]);return a},show:function(){c.removeClass(this.domNode,"hidden")},hide:function(){c.addClass(this.domNode,"hidden")},getDrawItemIcons:function(){return g(".draw-item",this.domNode)},_onClickClear:function(){this._isDisabled||(this.clear(),this.emit("user-clear"))},_initDefaultSymbols:function(){var a={style:"esriSMSCircle",color:[0,0,128,128],name:"Circle",outline:{color:[0,0,128,255],width:1},type:"esriSMS",size:18},
b={style:"esriSLSSolid",color:[79,129,189,255],width:3,name:"Blue 1",type:"esriSLS"},d={style:"esriSFSSolid",color:[79,129,189,128],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}};this.pointSymbol||(this.pointSymbol=n.fromJson(a));this.polylineSymbol||(this.polylineSymbol=n.fromJson(b));this.polygonSymbol||(this.polygonSymbol=n.fromJson(d))},_initTypes:function(){this.geoTypes&&0<this.geoTypes.length?this.types=null:(this.geoTypes=[],this.types&&0<this.types.length||
(this.types=["point","arrow","polyline","polygon"]),0<=this.types.indexOf("point")&&(this.geoTypes=this.geoTypes.concat(["POINT"])),0<=this.types.indexOf("arrow")&&(this.geoTypes=this.geoTypes.concat(["ARROW"])),0<=this.types.indexOf("polyline")&&(this.geoTypes=this.geoTypes.concat(["LINE","POLYLINE","FREEHAND_POLYLINE"])),0<=this.types.indexOf("polygon")&&(this.geoTypes=this.geoTypes.concat("TRIANGLE EXTENT CIRCLE ELLIPSE POLYGON FREEHAND_POLYGON".split(" "))),0<=this.types.indexOf("text")&&(this.geoTypes=
this.geoTypes.concat(["TEXT"])));var a=g(".draw-item",this.domNode);a.style("display","none");l.forEach(a,e.hitch(this,function(a){var b=a.getAttribute("data-geotype"),b=0<=l.indexOf(this.geoTypes,b);c.setStyle(a,"display",b?"block":"none")}))},_onItemClick:function(a){this._isDisabled||(a=a.target||a.srcElement,c.hasClass(a,"draw-item")&&(c.hasClass(a,"jimu-state-active")?this.deactivate():this._activate(a)))},_activate:function(a){this._deactiveAllDrawBoxes();g(".draw-item",this.domNode).removeClass("jimu-state-active");
c.addClass(a,"jimu-state-active");var b=a.getAttribute("data-geotype"),d=a.getAttribute("data-commontype"),f=m[b];"TEXT"===b&&(f=m.POINT);this.disableWebMapPopup();this.drawToolBar.activate(f);this.emit("draw-activate",f);this.onIconSelected(a,b,d)},_onDrawEnd:function(a){var b=g(".draw-item.jimu-state-active",this.domNode)[0],d=b.getAttribute("data-geotype"),b=b.getAttribute("data-commontype"),f=null,f="extent"===a.geometry.type?z.fromExtent(a.geometry):a.geometry;f.geoType=d;f.commonType=b;a=f.type;
var e=null,e="point"===a||"multipoint"===a?c.hasClass(this.textIcon,"jimu-state-active")?this.textSymbol:this.pointSymbol:"line"===a||"polyline"===a?this.polylineSymbol:this.polygonSymbol,f=new x(f,e,null,null);this.keepOneGraphic&&this.drawLayer.clear();this.drawLayer.add(f);this.deactivateAfterDrawing&&this.deactivate();this.onDrawEnd(f,d,b,this._shiftKey,this._ctrlKey,this._metaKey)},_deactiveAllDrawBoxes:function(){var a;l.forEach(Object.keys(k),e.hitch(this,function(b){(a=k[b])&&a.drawToolBar&&
b!==this.id&&a.deactivate()}))}})});