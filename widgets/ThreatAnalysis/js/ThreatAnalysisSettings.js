// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/ThreatAnalysis/templates/ThreatAnalysisSettings.html":'\x3cdiv\x3e\r\n    \x3c!-- Mandatory Evacuation Distance DropDown --\x3e\r\n    \x3cdiv class\x3d"SettingsRow"\x3e\r\n      \x3cdiv class\x3d"LabelSettingsRightButton SettingsButtonIcon Pointer" title\x3d"${nls.mandatoryButtonLabel}" data-dojo-attach-point\x3d"mandatorySettingsButton" tabindex\x3d"0" aria-expanded \x3d"false" role\x3d"button" aria-label\x3d"${nls.mandatoryButtonLabel}"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"InputLabelSettings Ellipsis SubTitle" title\x3d"${nls.mandatoryLabel}"\x3e${nls.mandatoryLabel}\x3c/div\x3e      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Mandatory Evacuation Distance Color Pickers --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"mandatoryContainer"\x3e      \r\n      \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"mandatoryOutlineColor" data-dojo-attach-point\x3d"mandatoryOutlineColorPicker"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"mandatoryFillColor" data-dojo-attach-point\x3d"mandatoryFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Safe Evacuation Distance DropDown --\x3e\r\n    \x3cdiv class\x3d"SettingsRow"\x3e\r\n      \x3cdiv class\x3d"LabelSettingsRightButton SettingsButtonIcon Pointer" title\x3d"${nls.safeButtonLabel}" data-dojo-attach-point\x3d"safeSettingsButton" tabindex\x3d"0" aria-expanded \x3d"false" role\x3d"button" aria-label\x3d"${nls.safeButtonLabel}"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"InputLabelSettings Ellipsis SubTitle" title\x3d"${nls.safeLabel}"\x3e${nls.safeLabel}\x3c/div\x3e      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Safe Evacuation Distance --\x3e\r\n    \x3cdiv class\x3d"container controlGroupHidden" data-dojo-attach-point\x3d"safeContainer"\x3e\r\n      \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Line" id\x3d"safeOutlineColor" data-dojo-attach-point\x3d"safeOutlineColorPicker"\x3e\x3c/div\x3e \r\n      \x3cdiv class\x3d"Ellipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n      \x3cdiv class\x3d"colorPicker Fill" id\x3d"safeFillColor" data-dojo-attach-point\x3d"safeFillColorPicker"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/on dojo/dom dojo/keys ./ColorPickerEditor jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!../templates/ThreatAnalysisSettings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/query dojo/dom-attr dijit/registry dijit/focus jimu/utils jimu/dijit/formSelect jimu/dijit/SymbolChooser".split(" "),function(p,f,g,d,q,e,r,t,u,v,b,w,l,h,m,c,n,k){return p([t,u,w],{baseClass:"jimu-widget-threatAnalysisSetting",templateString:v,selectedSettings:{},
colorPickerNodes:[],constructor:function(a){b.mixin(this,a)},startup:function(){this.colorPickerNodes=h(".colorPicker",this.domNode);f.forEach(this.colorPickerNodes,b.hitch(this,function(a){a=new r({nls:this.nls,type:l.contains(a,"Line")?"line":"fill"},a);this.own(a.on("ColorPickerEditorChanged",b.hitch(this,function(){this.onSettingsChanged()})));a.setValues({color:this.config.threatAnalysis.symbology[a.id].color,transparency:this.config.threatAnalysis.symbology[a.id].transparency});a.startup();
a.dropdown.set("value",this.config.threatAnalysis.symbology[a.id].type)}));var a=h(".jimu-color-pickerPopup",this.domNode);f.forEach(a,b.hitch(this,function(a){this.own(d(a,"keydown",b.hitch(this,function(a){a.keyCode!==e.ENTER&&a.keyCode!==e.SPACE||a.currentTarget.click()})))}));this.onSettingsChanged()},postCreate:function(){this.inherited(arguments);l.add(this.domNode,"SettingsContainer FullWidth");this._handleClickEvents()},_handleClickEvents:function(){this.own(d(this.mandatorySettingsButton,
"click",b.hitch(this,function(){this._openCloseNodes(this.mandatorySettingsButton,this.mandatoryContainer)})));this.own(d(this.mandatorySettingsButton,"keydown",b.hitch(this,function(a){a.keyCode!==e.ENTER&&a.keyCode!==e.SPACE||this._openCloseNodes(this.mandatorySettingsButton,this.mandatoryContainer)})));this.own(d(this.safeSettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.safeSettingsButton,this.safeContainer)})));this.own(d(this.safeSettingsButton,"keydown",b.hitch(this,
function(a){if(a.keyCode===e.ENTER||a.keyCode===e.SPACE)this._openCloseNodes(this.safeSettingsButton,this.safeContainer),this._setLastFocusNode()})))},validInputs:function(){var a=!0;f.some(this.colorPickerNodes,function(b){if(!c.byId(b.id).validateSpinner())return a=!1,!0},this);return a},_openCloseNodes:function(a,c){var e=h(".container",this.domNode),d=h(".SettingsButtonIcon",this.domNode),k=!1;this.validInputs()&&(a&&l.contains(a,"LabelSettingsRightButton")&&(k=!0),f.forEach(e,b.hitch(this,function(a){g.addClass(a,
"controlGroupHidden")})),f.forEach(d,b.hitch(this,function(a,b){g.removeClass(a,"LabelSettingsDownButton");g.addClass(a,"LabelSettingsRightButton");m.set(a,"aria-expanded","false");b===d.length-1&&this._setLastFocusNode()})),k?(g.removeClass(c,"controlGroupHidden"),g.removeClass(a,"LabelSettingsRightButton"),g.addClass(a,"LabelSettingsDownButton"),m.set(a,"aria-expanded","true"),a=h(".jimu-color-picker",c),a.length&&n.focus(a[0])):n.focus(a))},onClose:function(){this.onSettingsChanged();this._openCloseNodes()},
onSettingsChanged:function(){f.forEach(this.colorPickerNodes,b.hitch(this,function(a){var b={color:void 0!==c.byId(a.id)?c.byId(a.id).getValues().color:this.config.threatAnalysis.symbology[a.id].color,transparency:void 0!==c.byId(a.id)?c.byId(a.id).getValues().transparency:this.config.threatAnalysis.symbology[a.id].transparency,type:void 0!==c.byId(a.id)?c.byId(a.id).dropdown.getValue():this.config.threatAnalysis.symbology[a.id].type};this.selectedSettings[a.id]=b}));this.emit("ThreatSettingsChanged",
this.selectedSettings)},_setLastFocusNode:function(){if(l.contains(this.safeSettingsButton,"LabelSettingsDownButton")){var a=h(".dijit",q.byId("safeFillColor").lastElementChild)[0];k.initLastFocusNode(this.refDomNode,a)}else k.initLastFocusNode(this.refDomNode,this.safeSettingsButton)}})});