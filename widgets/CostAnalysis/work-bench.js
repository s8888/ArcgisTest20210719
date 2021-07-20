// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/work-bench.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n    \x3cdiv class\x3d"esriCTBoldFont esriCTProjectName" data-dojo-attach-point\x3d"projectNameDiv" tabindex\x3d"0"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTSelectFeatureToCopyParentContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTSelectFeatureLabel" data-dojo-attach-point\x3d"featureModeTextNode" tabindex\x3d"0" role\x3d"region" aria-label\x3d"${nls.workBench.featureModeText}"\x3e${nls.workBench.featureModeText}:\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSelectFeatureToCopyContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTSelectDisable esriCTFeatureModeIcons esriCTWorkBenchDOM" data-dojo-attach-point\x3d"selectButton" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.workBench.selectToolTitle}" title\x3d"${nls.workBench.selectToolTitle}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTSketchEnable esriCTFeatureModeIcons esriCTWorkBenchDOM" data-dojo-attach-point\x3d"sketchButton" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.workBench.sketchToolTitle}" title\x3d"${nls.workBench.sketchToolTitle}"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTTemplatePickerLabel "tabindex\x3d"0" role\x3d"region" aria-label\x3d"${nls.workBench.templatePickerTitle}"\x3e${nls.workBench.templatePickerTitle}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTAddEditFeatureContainer" data-dojo-attach-point\x3d"templatePickerContainer"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"projectOverview"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis esriCTWorkBenchDOM" data-dojo-attach-point\x3d"backButton" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.common.back}"\x3e${nls.common.back}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis esriCTWorkBenchDOM" data-dojo-attach-point\x3d"refreshButton" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.workBench.refresh}"\x3e${nls.workBench.refresh}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis esriCTWorkBenchDOM" data-dojo-attach-point\x3d"downloadCSVBtn" tabindex\x3d"0" role\x3d"button"\r\n        aria-label\x3d"${nls.workBench.downloadCSVBtnTitle}"\x3e${nls.workBench.downloadCSVBtnTitle}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget jimu/FilterManager dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./work-bench.html dojo/_base/lang dojo/dom-style dojo/dom-attr dojo/_base/array dojo/dom-class dojo/on dojo/query esri/graphic dojo/dom-construct dojo/Deferred dojo/promise/all esri/layers/FeatureLayer esri/tasks/GeometryService esri/graphicsUtils ./template-picker ./project-overview ./project-summary ./asset-details jimu/CSVUtils esri/tasks/query esri/tasks/QueryTask esri/geometry/geometryEngine esri/SpatialReference esri/geometry/Point dojo/keys dojo/_base/event dijit/focus".split(" "),
function(C,D,E,F,G,H,d,I,p,k,l,h,u,q,t,v,w,r,y,J,K,L,M,N,O,P,Q,R,z,A,n,x,B){return C([D,F,G],{templateString:H,baseClass:"jimu-widget-cost-analysis-work-bench",_projectOverview:null,_projectSummary:null,_assetItemSummary:{},_assetGroupSummary:{},_assetTableIds:{},_recentlyOperatedLayerIds:[],_projectAssetTable:null,_additionalCostTable:null,_assetInfoForReset:{},_reportColumns:[],filterManager:null,_pointLayer:null,_originalTemplateAttributes:null,_isLoadingProject:null,_exsitingLabelPointDefExpression:null,
_canExportProject:!0,postCreate:function(){this.inherited(arguments);this._assetItemSummary={};this._assetGroupSummary={};this._assetTableIds={};this._recentlyOperatedLayerIds=[];this._assetInfoForReset={};this.filterManager=E.getInstance();this._exsitingLabelPointDefExpression=this._isLoadingProject=this._originalTemplateAttributes=this._pointLayer=null;this._reportColumns=[];if(!this.config.generalSettings.hasOwnProperty("canExportProject")||this.config.generalSettings.hasOwnProperty("canExportProject")&&
!this.config.generalSettings.canExportProject)I.set(this.downloadCSVBtn,"display","none"),p.set(this.downloadCSVBtn,"tabindex","-1"),this._canExportProject=!1},onWidgetActive:function(){this._templatePicker&&this._templatePicker.bindLayerEvents()},onWidgetDeActive:function(){this._templatePicker&&this._templatePicker._editor&&this._templatePicker._editor.editToolbar&&(this._templatePicker._editor.templatePicker.clearSelection(),this._templatePicker._editor.editToolbar.deactivate(),this._templatePicker.removeLayerEvents())},
onShow:function(a){this.refreshTemplatePicker(a)},onWidgetOpen:function(){this.refreshTemplatePicker();this.config.projectSettings.projectLayer||(this._recentlyOperatedLayerIds=[],this._filterAssets());this._templatePicker&&!this._templatePicker._editor&&(this._disableWebMapPopup(),this._templatePicker.initEditingToolbar())},onWidgetClose:function(){this.config.projectSettings.projectLayer||this._clearAppliedFilters();this._templatePicker&&this._templatePicker._editor&&(this._templatePicker._editor.destroy(),
this._templatePicker._editor=null,this._enableWebMapPopup())},refreshTemplatePicker:function(a){if(this._templatePicker){this._templatePicker.onWindowResize();if(!a){a=this.refreshButton;var b=this.featureModeTextNode;"none"===this.downloadCSVBtn.style.display||l.contains(this.downloadCSVBtn,"esriCTHidden")||(a=this.downloadCSVBtn);l.contains(this.projectNameDiv,"esriCTHidden")||(b=this.projectNameDiv);this.appUtils.setFirstAndLastWBFocusNode(this.widgetDomNode,b,a)}this._handle508AccessibilityForTemplatePicker()}},
startup:function(){this.inherited(arguments);this._storeExistingLabelPointLayerDefExpression();this.config.generalSettings.hasOwnProperty("canExportProject")&&this.config.generalSettings.canExportProject&&this._getReportColumns();this.config.projectSettings.projectLayer?(this.own(h(this.backButton,"click",d.hitch(this,function(){this._backButtonClicked()}))),this.own(h(this.backButton,"keydown",d.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)x.stop(a),this._backButtonClicked()})))):
(p.set(this.refreshButton,"innerHTML",this.nls.common.reset),p.set(this.refreshButton,"aria-label",this.nls.common.reset),l.add(this.backButton,"esriCTHidden"));this.own(h(this.refreshButton,"click",d.hitch(this,function(){this._refreshButtonClicked()})));this.own(h(this.refreshButton,"keydown",d.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)x.stop(a),this._refreshButtonClicked()})));this.own(h(this.downloadCSVBtn,"click",d.hitch(this,function(){var a=this._createDownLoadData();
this._downLoadCSV(a)})));this.own(h(this.downloadCSVBtn,"keydown",d.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)a=this._createDownLoadData(),this._downLoadCSV(a)})));this.onProjectCreateOrLoad(this.projectInfo,this.assetInfo);var a=this.refreshButton,b=this.featureModeTextNode;"none"===this.downloadCSVBtn.style.display||l.contains(this.downloadCSVBtn,"esriCTHidden")||(a=this.downloadCSVBtn);l.contains(this.projectNameDiv,"esriCTHidden")||(b=this.projectNameDiv);this.appUtils.setFirstAndLastWBFocusNode(this.widgetDomNode,
b,a);this._handle508AccessibilityForTemplatePicker()},_backButtonClicked:function(){l.contains(this.backButton,"jimu-state-disabled")||(this._clearAppliedFilters(),this._templatePicker.destroy(),this._templatePicker=null,this._enableWebMapPopup(),this.emit("showProjectPanel"))},_refreshButtonClicked:function(){this._clearAppliedFilters();this._templatePicker&&(this._templatePicker.destroy(),this._templatePicker=null);this.projectInfo.projectId&&this.config.projectSettings.projectLayer?this.emit("reloadProject",
this.projectInfo.projectId):this._resetProject()},_resetProject:function(){var a=[],b;this.loadingIndicator.show();if(this._assetInfoForReset&&0<Object.keys(this._assetInfoForReset).length)for(b in this._assetInfoForReset){var c,e;c=this.layerInfosObj.getLayerInfoById(b).layerObject;e=c.globalIdField+" in ('"+this._assetInfoForReset[b].join("','")+"')";a.push(this.appUtils.deleteFeatures(c.url,e))}w(a).then(d.hitch(this,function(){this.loadingIndicator.hide();this._assetInfoForReset={};this.onProjectCreateOrLoad(this.projectInfo,
this.assetInfo);this.emit("resetProject")}),d.hitch(this,function(){this.loadingIndicator.hide()}))},_clearAppliedFilters:function(){this.config.projectSettings.projectLayer&&this.filterManager.applyWidgetFilter(this.config.projectSettings.projectLayer,this.widgetId,"",!0,!0);this._recentlyOperatedLayerIds=[];k.forEach(this.config.layerSettings,d.hitch(this,function(a){var b;b=this.layerInfosObj.getLayerInfoById(a.id);a.editable&&b&&b.layerObject&&b.layerObject.clearSelection()}));var a=this.map.getLayer(this.config.projectSettings.pointLayerCentroid);
a&&(a.setDefinitionExpression(this._exsitingLabelPointDefExpression),a.refresh());this._filterAssets(!0)},_loadProjectAssetTable:function(){var a=new v;if(this.config.projectSettings.assetTable&&!this._projectAssetTable){var b;b=this.layerInfosObj.getTableInfoById(this.config.projectSettings.assetTable).layerObject;this._projectAssetTable=new r(b.url);this.own(h(this._projectAssetTable,"load",function(){a.resolve()}))}else a.resolve();return a.promise},_loadAdditionalCostTable:function(){var a,b;
b=new v;(a=this.config.projectSettings.multiplierAdditionalCostTable)&&!this._additionalCostTable?(a=this.layerInfosObj.getTableInfoById(a).layerObject.url,this._additionalCostTable=new r(a),this.own(h(this._additionalCostTable,"load",function(){b.resolve()}))):b.resolve();return b.promise},onProjectCreateOrLoad:function(a,b){var c=[];this.projectInfo=a;this._displayLabelRelatedToSelectProject();c.push(this._loadProjectAssetTable());c.push(this._loadAdditionalCostTable());w(c).then(d.hitch(this,function(){var c,
f,g;this.projectInfo=a;this._recentlyOperatedLayerIds=[];this._assetTableIds={};this._assetItemSummary={};this._assetGroupSummary={};this._disableWebMapPopup();this.initWorkBenchComponents().then(d.hitch(this,function(){g=this.config.projectSettings.projectLayer;this.projectInfo.projectId&&g&&(f=this.layerInfosObj.getLayerInfoById(g).layerObject,c=f.globalIdField+"\x3d '"+this.projectInfo.projectId+"'",this.filterManager.applyWidgetFilter(g,this.widgetId,c,!0,!0));this._projectOverview&&this._projectOverview.showAssetItemSummary(this._assetItemSummary,
!1);this._assetDetails&&this._assetDetails.reset();b?this.loadProject(b):(this._filterAssets(),this._projectSummary.addConfiguredAdditionalCostArray());0===Object.keys(this._assetItemSummary).length?l.add(this.downloadCSVBtn,"esriCTHidden"):l.remove(this.downloadCSVBtn,"esriCTHidden");var a=this.refreshButton,e=this.featureModeTextNode;"none"===this.downloadCSVBtn.style.display||l.contains(this.downloadCSVBtn,"esriCTHidden")||(a=this.downloadCSVBtn);l.contains(this.projectNameDiv,"esriCTHidden")||
(e=this.projectNameDiv);this.appUtils.setFirstAndLastWBFocusNode(this.widgetDomNode,e,a);this._handle508AccessibilityForTemplatePicker()}))}))},loadProject:function(a){var b=[];this._isLoadingProject=!0;this._projectSummary.loadingProject=!0;this._projectSummary.loadAdditionalCost(a.additionalCostInfo);for(var c in a.assetInfo){var e=a.assetInfo[c],f=this.layerInfosObj.getLayerInfoById(c).layerObject,b=b.concat(e);this._loadAsset(f,e,a,c)}this._setExtentToProjectAssets(b);this._recentlyOperatedLayerIds=
[];this._onAssetInfoUpdate();this._projectSummary.loadingProject=!1;this._projectSummary.calculateGrossCost(this._projectSummary.totalCost,!1)},_loadAsset:function(a,b,c,e){k.forEach(b,d.hitch(this,function(b){var f=b.attributes[a.globalIdField],d=c.assetTemplateInfo[f];b.templateInfo=d;b.templateName=d.TEMPLATENAME;this._templatePicker.loadCostingInfo(e,d);this._assetTableIds[f]=d.OBJECTID;this._onFeaturesAdded([b],a,[d],!1)}))},_setExtentToProjectAssets:function(a){0<a.length&&this.map.setExtent(J.graphicsExtent(a).expand(1.5))},
initWorkBenchComponents:function(){var a=new v;this._initTemplatePicker();this._initProjectSummary();this._initProjectOverview();this._initAssetDetails(a);return a.promise},_initTemplatePicker:function(){var a=t.create("div",{},this.templatePickerContainer);this._templatePicker=new K({config:this.config,nls:this.nls,layerInfosObj:this.layerInfosObj,loadingIndicator:this.loadingIndicator,projectInfo:this.projectInfo,selectedProjectFeatureAttr:this.selectedProjectFeatureAttr?this.selectedProjectFeatureAttr:
null,map:this.map,selectFeaturesNode:this.copyFeaturesNode,selectButton:this.selectButton,sketchButton:this.sketchButton,appUtils:this.appUtils,widgetId:this.widgetId,widgetDomNode:this.widgetDomNode,refreshButton:this.refreshButton,downloadCSVBtn:this.downloadCSVBtn,projectNameDiv:this.projectNameDiv,featureModeTextNode:this.featureModeTextNode},a);h(this._templatePicker,"assetAdded",d.hitch(this,function(a,c,e){0<a.length&&0<e.length&&(this._onFeaturesAdded(a,c,e,!0),this.emit("onAssetAdded",a,
c.id,this._projectA),l.contains(this.downloadCSVBtn,"esriCTHidden")&&l.remove(this.downloadCSVBtn,"esriCTHidden"),this._onAssetInfoUpdate())}));h(this._templatePicker,"assetDeleted",d.hitch(this,function(a,c){var b;b=this._getGlobalIds(c.globalIdField,a);this._onFeaturesUpdated(a);0===Object.keys(this._assetItemSummary).length&&l.add(this.downloadCSVBtn,"esriCTHidden");this._onAssetInfoUpdate(!0);k.forEach(b,d.hitch(this,function(a){this._assetTableIds.hasOwnProperty(a)&&delete this._assetTableIds[a];
this._assetInfoForReset&&this._assetInfoForReset[c.id]&&(a=this._assetInfoForReset[c.id].indexOf(a),-1<a&&this._assetInfoForReset[c.id].splice(a,1))}));this._projectAssetTable&&(a=this.config.assetTableFields.ASSETGUID+" in ('"+b.join("','")+"')",this.appUtils.deleteFeatures(this._projectAssetTable.url,a))}));h(this._templatePicker,"assetUpdated",d.hitch(this,function(a){this._onFeaturesUpdated(a,!0);this._onAssetInfoUpdate()}));h(this._templatePicker,"editorLoaded",d.hitch(this,function(){this._handle508AccessibilityForTemplatePicker()}));
this._templatePicker.startup()},_handle508AccessibilityForTemplatePicker:function(){setTimeout(d.hitch(this,function(){var a,b,c;a=u("div[role\x3d'grid']",this.templatePickerContainer);b=u("[type\x3d'checkbox']",this.templatePickerContainer);c=u("[dojoattachpoint\x3d'lastFocusNode']",this.templatePickerContainer);a&&a[0]&&p.set(a[0],"tabindex","-1");k.forEach(b,d.hitch(this,function(a){p.set(a,"tabindex","-1")}));c&&c[0]&&p.set(c[0],"tabindex","-1")}),500)},_initProjectSummary:function(){this._projectSummary?
this._projectSummary.reset(this.projectInfo):(this._projectSummary=new M({nls:this.nls,map:this.map,config:this.config,appUtils:this.appUtils,layerInfosObj:this.layerInfosObj,projectInfo:this.projectInfo,additionalCostTable:this._additionalCostTable,widgetDomNode:this.widgetDomNode},t.create("div",{},this.projectSummaryDiv)),this.own(h(this._projectSummary,"grossCostUpdated",d.hitch(this,function(a,b,c){this._projectOverview.grossCostUpdated(b);this._assetDetails.grossCostUpdated(a,b,c);this.emit("onGrossCostUpdated",
a,b,c)}))),this.own(h(this._projectSummary,"onOkButtonClicked",d.hitch(this,function(){this.emit("showAssetDetails")}))),this.own(h(this._projectSummary,"onCancelButtonClicked",d.hitch(this,function(){this.emit("showAssetDetails")}))),this._projectSummary.startup())},_initProjectOverview:function(){this._projectOverview?this._projectOverview.updateProjectInfo(this.projectInfo):(this._projectOverview=new L({config:this.config,appUtils:this.appUtils,nls:this.nls,map:this.map,layerInfosObj:this.layerInfosObj,
geometryService:new y(this.config.helperServices.geometry.url),projectInfo:this.projectInfo,widgetDomNode:this.widgetDomNode,projectNameDiv:this.projectNameDiv,selectButton:this.selectButton,featureModeTextNode:this.featureModeTextNode},t.create("div",{},this.projectOverview)),this.own(h(this._projectOverview,"actionClicked",d.hitch(this,function(a){this.emit("actionClicked",a)}))),this.own(h(this._projectOverview,"titleClicked",d.hitch(this,function(a){this.emit("titleClicked",a)}))),this.own(h(this._projectOverview,
"totalCostCalculated",d.hitch(this,function(a){this._assetDetails.totalCostUpdated(a);this._projectSummary.calculateGrossCost(a,!0)}))),this.own(h(this._projectOverview,"addOrModifyLabelPoint",d.hitch(this,function(a){this._addOrModifyLabelPoint(a.projectGeometry)}))),this._projectOverview.startup())},_initAssetDetails:function(a){this._assetDetails?(this._assetDetails.showAssetDetails({}),a.resolve()):(this._assetDetails=new N({nls:this.nls,map:this.map,config:this.config,appUtils:this.appUtils,
layerInfosObj:this.layerInfosObj,projectInfo:this.projectInfo,widgetDomNode:this.widgetDomNode},t.create("div",{},this.assetDetailsDiv)),this.own(h(this._assetDetails,"showAdditionalCost",d.hitch(this,function(){this._projectSummary&&this._projectSummary.cloneTableData();this.emit("showAdditionalCost")}))),this.own(h(this._assetDetails,"onOkButtonClicked",d.hitch(this,function(){this.emit("showWorkBenchPanel")}))),this.own(h(this._assetDetails,"onCancelButtonClicked",d.hitch(this,function(){this.emit("showWorkBenchPanel")}))),
this.own(h(this._assetDetails,"onLoad",d.hitch(this,function(){a.resolve()}))),this.own(h(this._assetDetails,"groupCostEquationUpdated",d.hitch(this,this._updateGroupCostEquation))),this._assetDetails.startup())},_createDownLoadData:function(){var a=[],b,c,e,f;for(b in this._assetGroupSummary)for(c in this._assetGroupSummary[b])for(e in this._assetGroupSummary[b][c])for(f in this._assetGroupSummary[b][c][e])this._assetGroupSummary[b][c][e][f]&&0<this._assetGroupSummary[b][c][e][f].length&&a.push(this._getReportAttributes(b,
this._assetGroupSummary[b][c][e][f]));return{features:a,cols:this._reportColumns}},_getReportColumns:function(){k.forEach(this.config.generalSettings.CSVReportSettings.reportSettings,d.hitch(this,function(a){a.isVisible&&this._reportColumns.push(a.columnLabel||a.columnTitle)}))},_getReportAttributes:function(a,b){var c={};k.forEach(this.config.generalSettings.CSVReportSettings.reportSettings,d.hitch(this,function(e){e.isVisible&&(c[e.columnLabel||e.columnTitle]=this._fetchReportFieldTitleAndData(e,
a,b))}));return c},_getFeatureColumns:function(a){var b=[],c;for(c in a)b.push(c);return b},_fetchReportFieldTitleAndData:function(a,b,c){var e;b=this.layerInfosObj.getLayerOrTableInfoById(b).layerObject;switch(a.fieldToMap){case "layerName":e=b.name;break;case "TEMPLATENAME":case "GEOGRAPHY":case "SCENARIO":case "COSTEQUATION":e=c[0].templateInfo[a.fieldToMap]||"None";break;case "count":e=c.length;break;case "Length":e=this._getTotalAreaOrLength(b.geometryType,c,"length");break;case "Area":e=this._getTotalAreaOrLength(b.geometryType,
c,"area");break;case "cost":e=this._getTotalCostForRegion(c)}return e},_getTotalAreaOrLength:function(a,b,c){var e=0;"esriGeometryPolyline"===a?"length"===c&&k.forEach(b,d.hitch(this,function(a){e+=a.featureDimension})):"esriGeometryPolygon"===a&&"area"===c&&k.forEach(b,d.hitch(this,function(a){e+=a.featureDimension}));return 0===e?"NA":this.appUtils.applyRounding(e)},_getTotalCostForRegion:function(a){var b=0;k.forEach(a,d.hitch(this,function(a){b+=a.individualCost}));return this.appUtils.applyRounding(b)},
_onAssetInfoUpdate:function(a){this._projectOverview.showAssetItemSummary(this._assetItemSummary,!0);this._assetDetails.showAssetDetails(this._assetGroupSummary,a);this._filterAssets();this.emit("assetInfoUpdated",this._assetItemSummary)},_addAssetGroupSummary:function(a,b,c){var e=c[0].TEMPLATENAME;this._assetGroupSummary.hasOwnProperty(b.id)?this._assetGroupSummary[b.id].hasOwnProperty(e)||(this._assetGroupSummary[b.id][e]={}):(this._assetGroupSummary[b.id]={},this._assetGroupSummary[b.id][e]={});
k.forEach(a,d.hitch(this,function(a,d){d=c[d];d.SCENARIO===this.nls.scenarioSelection.noneText&&(d.SCENARIO="null");d.GEOGRAPHY===this.nls.scenarioSelection.noneText&&(d.GEOGRAPHY="null");this._assetGroupSummary[b.id][e].hasOwnProperty(d.GEOGRAPHY)?this._assetGroupSummary[b.id][e][d.GEOGRAPHY].hasOwnProperty(d.SCENARIO)||(this._assetGroupSummary[b.id][e][d.GEOGRAPHY][d.SCENARIO]=[]):(this._assetGroupSummary[b.id][e][d.GEOGRAPHY]={},this._assetGroupSummary[b.id][e][d.GEOGRAPHY][d.SCENARIO]=[]);this._assetGroupSummary[b.id][e][d.GEOGRAPHY][d.SCENARIO].push(a)}))},
_updateAssetGroupSummary:function(a,b,c){var e,f,g,m;f=b.templateInfo.TEMPLATENAME;g=b.templateInfo.GEOGRAPHY;m=b.templateInfo.SCENARIO;e=b.attributes[a.objectIdField];g===this.nls.scenarioSelection.noneText&&(g="null");m===this.nls.scenarioSelection.noneText&&(m="null");k.some(this._assetGroupSummary[a.id][f][g][m],d.hitch(this,function(d,k){if(d.attributes[a.objectIdField]===e)return c?this._assetGroupSummary[a.id][f][g][m][k].featureDimension=b.featureDimension:this._assetGroupSummary[a.id][f][g][m].splice(k,
1),!0}))},_onFeaturesAdded:function(a,b,c,e){var f,g=[];f=c[0].TEMPLATENAME;g=this._getGlobalIds(b.globalIdField,a);this._addAssetGroupSummary(a,b,c);this._assetItemSummary.hasOwnProperty(b.id)?this._assetItemSummary[b.id].templates.hasOwnProperty(f)?(a=this._assetItemSummary[b.id].templates[f].features.concat(a),this._assetItemSummary[b.id].templates[f].units=a.length):this._assetItemSummary[b.id].templates[f]={units:a.length,features:a,cost:null}:(this._assetItemSummary[b.id]={layerName:b.name,
templates:{},geometryType:b.geometryType},this._assetItemSummary[b.id].templates[f]={units:a.length,features:a,cost:null});this._recentlyOperatedLayerIds=[b.id];this._setFeaturesAndUnits(a,b,f);this._assetItemSummary[b.id].templates[f].cost=this._getTotalCost(b,f);e&&this._projectAssetTable?this._addAssetsToProjectAssetTable(c,g):(this._assetInfoForReset||(this._assetInfoForReset={}),this._assetInfoForReset[b.id]=this._assetInfoForReset[b.id]?this._assetInfoForReset[b.id].concat(g):d.clone(g))},_updateFeaturesInfo:function(a){var b;
k.forEach(a,d.hitch(this,function(a){var c;c=a._layer;for(b in this._assetItemSummary[c.id].templates)this._setUpdatedTemplateFeatures(a,c,b)}));return a},_setUpdatedTemplateFeatures:function(a,b,c){k.some(this._assetItemSummary[b.id].templates[c].features,d.hitch(this,function(e){if(e.attributes[b.objectIdField]===a.attributes[b.objectIdField])return a.featureDimension=e.featureDimension,a.templateName=c,a.templateInfo=e.templateInfo,!0}))},_onFeaturesUpdated:function(a,b){a=this._updateFeaturesInfo(a);
this._recentlyOperatedLayerIds=[];k.forEach(a,d.hitch(this,function(a){var c,f;f=a.templateName;c=a._layer;this._recentlyOperatedLayerIds.push(c.id);k.some(this._assetItemSummary[c.id].templates[f].features,d.hitch(this,function(e,d){if(e.attributes[c.objectIdField]===a.attributes[c.objectIdField])return this._assetItemSummary.hasOwnProperty(c.id)&&this._assetItemSummary[c.id].templates[f]&&(b?(this._assetItemSummary[c.id].templates[f].features[d]=a,this._setFeaturesAndUnits(this._assetItemSummary[c.id].templates[f].features,
c,f,b)):(e=this._assetItemSummary[c.id].templates[f].units,e-=a.featureDimension,this._assetItemSummary[c.id].templates[f].units=this.appUtils.removeNegativeExponents(e)),this._updateAssetGroupSummary(c,a,b)),b||this._assetItemSummary[c.id].templates[f].features.splice(d,1),!0}));0===this._assetItemSummary[c.id].templates[f].features.length?delete this._assetItemSummary[c.id].templates[f]:this._assetItemSummary[c.id].templates[f].cost=this._getTotalCost(c,f);0===Object.keys(this._assetItemSummary[c.id].templates).length&&
delete this._assetItemSummary[c.id]}))},_setFeaturesAndUnits:function(a,b,c,e){var f,g=0;f=this.config.generalSettings.measurementUnit;k.forEach(a,d.hitch(this,function(a){if(!a.hasOwnProperty("featureDimension")||e)a.featureDimension="esriGeometryPolygon"===b.geometryType?this.appUtils.getAreaOfGeometry(a.geometry,this.appUtils.units[f].areaUnit):"esriGeometryPolyline"===b.geometryType?this.appUtils.getLengthOfGeometry(a.geometry,this.appUtils.units[f].lengthUnit):1,e||(a.templateName=c);g+=a.featureDimension}));
this._assetItemSummary[b.id].templates[c].features=a;return this._assetItemSummary[b.id].templates[c].units=g},_getGroupTotalMeasure:function(a,b){var c,e,f,g;c=0;f=b.TEMPLATENAME;g=b.GEOGRAPHY;b=b.SCENARIO;try{e=this._assetGroupSummary[a][f][g][b],k.forEach(e,d.hitch(this,function(a){c+=a.featureDimension}))}catch(m){c=0}return c},_getGroupTotalCount:function(a,b){var c,e,d,g;c=0;d=b.TEMPLATENAME;g=b.GEOGRAPHY;b=b.SCENARIO;try{(e=this._assetGroupSummary[a][d][g][b])&&0<e.length&&(c=e.length)}catch(m){c=
0}return c},_getTotalCost:function(a,b){var c=0;k.forEach(this._assetItemSummary[a.id].templates[b].features,d.hitch(this,function(e){var f,g,m,h;m=this._getGroupTotalMeasure(a.id,e.templateInfo);h=this._getGroupTotalCount(a.id,e.templateInfo);try{g=e.templateInfo.COSTEQUATION,g=g.replace(/{MEASURE}/ig,e.featureDimension),g=g.replace(/{TOTALMEASURE}/ig,m),g=g.replace(/{TOTALCOUNT}/ig,h),f=this.appUtils.evaluate(g)}catch(S){f=0}k.some(this._assetGroupSummary[a.id][b][e.templateInfo.GEOGRAPHY][e.templateInfo.SCENARIO],
d.hitch(this,function(b){if(b.attributes[a.objectIdField]===e.attributes[a.objectIdField])return b.individualCost=f,!0}));e.individualCost=f;c+=f}));return Number(c)},_getGlobalIds:function(a,b){var c=[];k.forEach(b,d.hitch(this,function(b){c.push(b.attributes[a])}));return c},_getExpressionToFilterAssets:function(a){var b,c=[],e,d;if((d=this.layerInfosObj.getLayerInfoById(a))&&d.layerObject&&this._assetItemSummary[a])for(b in e=d.layerObject,this._assetItemSummary[a].templates)c=c.concat(this._getGlobalIds(e.globalIdField,
this._assetItemSummary[a].templates[b].features));return 0<c.length?e.globalIdField+" in ('"+c.join("','")+"')":"1\x3d2"},_filterAssets:function(a){this._recentlyOperatedLayerIds&&0!==this._recentlyOperatedLayerIds.length||(this._recentlyOperatedLayerIds=[],k.forEach(this.config.layerSettings,d.hitch(this,function(a){a.editable&&this._recentlyOperatedLayerIds.push(a.id)})));k.forEach(this._recentlyOperatedLayerIds,d.hitch(this,function(b){var c="";a||(c=this._getExpressionToFilterAssets(b));this.filterManager.applyWidgetFilter(b,
this.widgetId,c,!0,!0)}))},_addAssetsToProjectAssetTable:function(a,b){var c=[],e=["COSTEQUATION","SCENARIO","TEMPLATENAME","GEOGRAPHYGUID"];this.loadingIndicator.show();k.forEach(b,d.hitch(this,function(b,g){var f={};k.forEach(this._projectAssetTable.fields,d.hitch(this,function(c){var d="";-1<e.indexOf(c.name.toUpperCase())?(d=a[g][c.name.toUpperCase()],"SCENARIO"!==c.name.toUpperCase()&&"GEOGRAPHYGUID"!==c.name.toUpperCase()||"null"!==d||(d=null),f[c.name]=d):"ASSETGUID"===c.name.toUpperCase()?
f[c.name]=b:"PROJECTGUID"===c.name.toUpperCase()&&this.projectInfo.projectId&&(f[c.name]=this.projectInfo.projectId)}));c.push(new q(null,null,f))}));this._projectAssetTable.applyEdits(c,null,null,d.hitch(this,function(a){var c=!1;k.forEach(a,d.hitch(this,function(a,d){a.success?this._assetTableIds[b[d]]=a.objectId:c=!0}));c&&this.appUtils.showMessage(this.nls.workBench.errorInSavingAssetDetails);this.loadingIndicator.hide()}),d.hitch(this,function(){this.loadingIndicator.hide();this.appUtils.showMessage(this.nls.workBench.errorInSavingAssetDetails)}))},
_updateGroupCostEquation:function(a){var b=[],c,e,f;c=a.groupInfo;e=this._assetGroupSummary[c.layerId][c.templateName][c.region][c.scenario];f=this.layerInfosObj.getLayerInfoById(c.layerId).layerObject;k.forEach(e,d.hitch(this,function(e){var g={},h,l;h=e.attributes[f.globalIdField];l=e.attributes[f.objectIdField];k.some(this._assetItemSummary[c.layerId].templates[c.templateName].features,d.hitch(this,function(b){if(b.attributes[f.objectIdField]===l)return b.templateInfo.COSTEQUATION=a.templateInfo.COSTEQUATION,
b.templateInfo.SCENARIO=a.templateInfo.SCENARIO,!0}));e.templateInfo.COSTEQUATION=a.templateInfo.COSTEQUATION;e.templateInfo.SCENARIO=a.templateInfo.SCENARIO;this._projectAssetTable&&this._assetTableIds[h]&&(g[this.config.assetTableFields.COSTEQUATION]=a.templateInfo.COSTEQUATION,g[this.config.assetTableFields.SCENARIO]="null"===a.templateInfo.SCENARIO?null:a.templateInfo.SCENARIO,g[this.config.assetTableFields.OBJECTID]=this._assetTableIds[h],b.push(new q(null,null,g)))}));delete this._assetGroupSummary[c.layerId][c.templateName][c.region][c.scenario];
this._assetGroupSummary[c.layerId][c.templateName][c.region][a.templateInfo.SCENARIO]=e;this._templatePicker.loadCostingInfo(f.id,e[0].templateInfo);this._assetItemSummary[f.id].templates[c.templateName].cost=this._getTotalCost(f,c.templateName);this._projectOverview.showAssetItemSummary(this._assetItemSummary,!1);this._assetDetails.showAssetDetails(this._assetGroupSummary);this._projectAssetTable&&(this.loadingIndicator.show(),this._projectAssetTable.applyEdits(null,b,null,d.hitch(this,function(){this.loadingIndicator.hide()}),
d.hitch(this,function(){this.loadingIndicator.hide()})))},_enableWebMapPopup:function(){this.map&&this.map.setInfoWindowOnClick(!0)},_disableWebMapPopup:function(){this.map&&this.map.setInfoWindowOnClick(!1);this._hideWebMapPopup()},_hideWebMapPopup:function(){this.map.infoWindow.isShowing&&this.map.infoWindow.hide();this.map.infoWindow.clearFeatures()},_addOrModifyLabelPoint:function(a){this.loadingIndicator.show();""!==this.config.projectSettings.pointLayerCentroid&&null!==this.config.projectSettings.pointLayerCentroid&&
void 0!==this.config.projectSettings.pointLayerCentroid?this._isLoadingProject?this._displayLabelRelatedToSelectProject():this._checkExistingLabelPoint(a):this.loadingIndicator.hide()},_displayLabelRelatedToSelectProject:function(){if(this._pointLayer=this.map.getLayer(this.config.projectSettings.pointLayerCentroid)){var a=this._pointLayer.getDefinitionExpression(),b=this._getFieldName(this._pointLayer,"projectid")+" \x3d '"+this.projectInfo.projectId+"'";""!==a&&null!==a&&void 0!==a?-1===a.indexOf(b)&&
(a=a+" AND "+b):a=b;this._pointLayer.setDefinitionExpression(a);this._pointLayer.refresh()}this._isLoadingProject=!1;this.loadingIndicator.hide()},_checkExistingLabelPoint:function(a){var b={},c;b.existingLabelPoint=this._getExistingLabelPointDeferred();w(b).then(d.hitch(this,function(b){0<b.existingLabelPoint.features.length?this._createLabelPoint(!1,a,b.existingLabelPoint.features[0]):this._createLabelPoint(!0,a)}),d.hitch(this,function(){this.loadingIndicator.hide();c=this.appUtils.showMessage(this.nls.createLoadProject.errorAddingPointLabel);
this._handleShowDialogClosed(c)}))},_createLabelPoint:function(a,b,c){var e;if(0<b.rings.length){var f=new y(this.config.helperServices.geometry.url);b=R.simplify(b);f.labelPoints([b],d.hitch(this,function(b){this.config.projectSettings.pointLayerCentroid&&(b=b[0],a?this._addLabelPoint(b):this._updateExistingLabelPoint(c,b))}),d.hitch(this,function(){this.loadingIndicator.hide();e=this.appUtils.showMessage(this.nls.createLoadProject.errorFetchingPointLabel);this._handleShowDialogClosed(e)}))}else this._deleteExistingLabelPoint(c)},
_deleteExistingLabelPoint:function(a){var b;if(a){var c={};c[this._pointLayer.objectIdField]=a.attributes[this._pointLayer.objectIdField];var e=new q(null,null,c,null),f=new r(this._pointLayer.url,{outFields:["*"]});f.onLoad=d.hitch(this,function(){f.applyEdits(null,null,[e],d.hitch(this,function(a,c,d){d[0].success||(b=this.appUtils.showMessage(this.nls.createLoadProject.errorAddingPointLabel),this._handleShowDialogClosed(b));this.map.getLayer(this.config.projectSettings.pointLayerCentroid).refresh();
this.loadingIndicator.hide()}),d.hitch(this,function(){this.loadingIndicator.hide();b=this.appUtils.showMessage(this.nls.createLoadProject.errorAddingPointLabel);this._handleShowDialogClosed(b)}))})}else this.loadingIndicator.hide()},_getExistingLabelPointDeferred:function(){var a;a=this._getFieldName(this._pointLayer,"projectid")+" \x3d '"+this.projectInfo.projectId+"'";var b=new Q(this._pointLayer.url),c=new P;c.outFields=["*"];c.where=a;c.returnGeometry=!0;c.outSpatialReference=this.map.spatialReference;
return b.execute(c).promise},_getFieldName:function(a,b){var c;k.forEach(a.fields,d.hitch(this,function(a){a.name.toLowerCase()===b.toLowerCase()&&(c=a.name)}));return c},_addLabelPoint:function(a){var b=new A(a.x,a.y,new z({wkid:this.map.spatialReference.wkid}));a=this._pointLayer.hasOwnProperty("templates")&&0<this._pointLayer.templates.length&&this._pointLayer.templates[0].hasOwnProperty("prototype")&&this._pointLayer.templates[0].prototype.hasOwnProperty("attributes")?this._pointLayer.templates[0].prototype.attributes:
this._pointLayer.hasOwnProperty("types")&&0<this._pointLayer.types.length&&this._pointLayer.types[0].hasOwnProperty("templates")&&0<this._pointLayer.types[0].templates.length&&this._pointLayer.types[0].templates[0].hasOwnProperty("prototype")&&this._pointLayer.types[0].templates[0].prototype.hasOwnProperty("attributes")?this._pointLayer.types[0].templates[0].prototype.attributes:null;null===this._originalTemplateAttributes||""===this._originalTemplateAttributes||void 0===this._originalTemplateAttributes?
this._originalTemplateAttributes=d.clone(a):a=d.clone(this._originalTemplateAttributes);var c=this._getFieldName(this._pointLayer,"projectid");a[c]=this.projectInfo.projectId;a=new q(b,null,a,null);(new r(this._pointLayer.url)).applyEdits([a],null,null,d.hitch(this,function(a,b,c){a[0].success||(a=this.appUtils.showMessage(this.nls.createLoadProject.errorAddingPointLabel),this._handleShowDialogClosed(a));this.map.getLayer(this.config.projectSettings.pointLayerCentroid).refresh();this.loadingIndicator.hide()}),
d.hitch(this,function(){this.loadingIndicator.hide();var a=this.appUtils.showMessage(this.nls.createLoadProject.errorAddingPointLabel);this._handleShowDialogClosed(a)}))},_updateExistingLabelPoint:function(a,b){var c={};c[this._pointLayer.objectIdField]=a.attributes[this._pointLayer.objectIdField];a=new A(b.x,b.y,new z({wkid:this.map.spatialReference.wkid}));var e=new q(a,null,c,null),f=new r(this._pointLayer.url,{outFields:["*"]});f.onLoad=d.hitch(this,function(){f.applyEdits(null,[e],null,d.hitch(this,
function(a,b,c){b[0].success||(a=this.appUtils.showMessage(this.nls.createLoadProject.errorAddingPointLabel),this._handleShowDialogClosed(a));this.map.getLayer(this.config.projectSettings.pointLayerCentroid).refresh();this.loadingIndicator.hide()}),d.hitch(this,function(){this.loadingIndicator.hide();var a=this.appUtils.showMessage(this.nls.createLoadProject.errorAddingPointLabel);this._handleShowDialogClosed(a)}))})},updateProjectFeatureAttributes:function(a){this._templatePicker.selectedProjectFeatureAttr=
a},_storeExistingLabelPointLayerDefExpression:function(){var a=this.map.getLayer(this.config.projectSettings.pointLayerCentroid);a&&(a=a.getDefinitionExpression(),this._exsitingLabelPointDefExpression=d.clone(a))},_handleShowDialogClosed:function(a){(a=a.enabledButtons[0])&&this.own(h(a,"keydown",d.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)x.stop(a),l.contains(this.sketchButton,"esriCTSketchDisable")?B.focus(this.selectButton):B.focus(this.sketchButton)})))},_downLoadCSV:function(a){var b=
this._getCSVFileName();O.exportCSV(b,a.features,a.cols)},_getCSVFileName:function(){var a="AssetItemDetails";this.config.generalSettings.CSVReportSettings.reportName?a=this.config.generalSettings.CSVReportSettings.reportName:this.projectInfo&&this.projectInfo.name&&(a="Export-"+this.projectInfo.name);return a}})});