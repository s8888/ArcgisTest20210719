// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:themes/DashboardTheme/panels/OnScreenPanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"title jimu-panel-title" data-dojo-attach-point\x3d"titleNode"\x3e\r\n    \x3cdiv class\x3d"title-label" data-dojo-attach-point\x3d"titleLabelNode"\x3e\r\n      ${config.label}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"icon-close feature-action jimu-float-trailing" data-dojo-attach-point\x3d"closeNode"\r\n         data-dojo-attach-event\x3d"onclick:_onCloseBtnClicked"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/html jimu/BaseWidgetPanel dijit/_TemplatedMixin dojo/text!./Panel.html jimu/utils".split(" "),function(c,b,d,e,f,g){return c([d,e],{baseClass:"jimu-panel jimu-dashboard-panel",templateString:f,titleHeight:33,postCreate:function(){this.inherited(arguments)},_onCloseBtnClicked:function(a){a.stopPropagation();this.panelManager.closePanel(this,"wipe")},setPosition:function(a,c){this.position=a;a=g.getPositionStyle(this.position);a.position="absolute";this.started&&
this.resize();!0===c&&b.isDescendant(this.domNode,b.byId(window.jimuConfig.layoutId))||b.place(this.domNode,window.jimuConfig.layoutId);b.setStyle(this.domNode,a)}})});