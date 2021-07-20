// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/ChartDijitSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"flex-lc text-label" style\x3d"font-size: 14px;"\x3e${nls.chartSettings}\x3c/div\x3e\r\n  \x3cdiv class\x3d"section data-section padding-right-5" data-dojo-attach-point\x3d"dataSection"\x3e\r\n    \x3cdiv class\x3d"section-item chart-mode-section-item feature-mode category-mode count-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.displayMode}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"chartModeSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onChartModeChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"section-item label-field-section-item category-field-section-item feature-mode category-mode count-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.categoryField}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"clusterFieldSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onClusterFieldChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv class\x3d"section-item category-mode count-mode"\x3e\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"periodDiv"\x3e\r\n        \x3cdiv\x3e${nls.minPeriod}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"periodSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:onChange" class\x3d"restrict-select-width"\x3e\r\n          \x3coption value\x3d"automatic"\x3e${nls.automatic}\x3c/option\x3e\r\n          \x3coption value\x3d"year"\x3e${nls.year}\x3c/option\x3e\r\n          \x3coption value\x3d"quarter"\x3e${nls.quarter}\x3c/option\x3e\r\n          \x3coption value\x3d"month"\x3e${nls.month}\x3c/option\x3e\r\n          \x3coption value\x3d"day"\x3e${nls.day}\x3c/option\x3e\r\n          \x3coption value\x3d"hour"\x3e${nls.hour}\x3c/option\x3e\r\n          \x3coption value\x3d"minute"\x3e${nls.minute}\x3c/option\x3e\r\n          \x3coption value\x3d"second"\x3e${nls.second}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \r\n    \x3cdiv class\x3d"section-item category-mode count-mode"\x3e\r\n      \x3cdiv style\x3d"height: auto; margin-top: 5px;margin-bottom: 5px;display: none;" class\x3d"average-align flexStart" data-dojo-attach-point\x3d"periodsRecordsDiv"\x3e\r\n        \x3cdiv\x3e${nls.periodsWithOutRecords}\x3c/div\x3e\r\n        \x3cdiv class\x3d"tb-radio-div"\x3e\r\n          \x3cdiv class\x3d"lr-radio-label-div"\x3e\r\n            \x3cinput checked type\x3d"radio" name\x3d"periodswithoutrecords" data-dojo-attach-event\x3d"change:onChange" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"showRadioBtn"\x3e\r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.show}"\x3e${nls.show}\x3c/label\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv style\x3d"margin-top: 10px;" class\x3d"lr-radio-label-div"\x3e\r\n            \x3cinput type\x3d"radio" name\x3d"periodswithoutrecords" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"hideRadioBtn"\x3e\r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.hide}"\x3e${nls.hide}\x3c/label\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e \r\n\r\n    \x3cdiv class\x3d"section-item operation-section-item category-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.operation}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"operationSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:onChange" class\x3d"restrict-select-width"\x3e\r\n        \x3coption value\x3d"sum"\x3e${nls.sumOption}\x3c/option\x3e\r\n        \x3coption value\x3d"average"\x3e${nls.averageOption}\x3c/option\x3e\r\n        \x3coption value\x3d"min"\x3e${nls.minOption}\x3c/option\x3e\r\n        \x3coption value\x3d"max"\x3e${nls.maxOption}\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"section-item category-mode field-mode"\x3e  \r\n      \x3cdiv style\x3d"height: auto; margin-top: 5px;margin-bottom: 10px;" class\x3d"average-align flexStart" data-dojo-attach-point\x3d"nullValue"\x3e  \r\n        \x3cdiv\x3e${nls.nullValue}\x3c/div\x3e  \r\n        \x3cdiv class\x3d"tb-radio-div"\x3e \r\n          \x3cdiv class\x3d"lr-radio-label-div"\x3e \r\n            \x3cinput checked type\x3d"radio" name\x3d"nullValue" data-dojo-attach-event\x3d"change:onChange" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"zeroRadioBtn"\x3e \r\n           \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.calculatedAsZero}"\x3e${nls.calculatedAsZero}\x3c/label\x3e  \r\n          \x3c/div\x3e \r\n          \x3cdiv style\x3d"margin-top: 10px;" class\x3d"lr-radio-label-div"\x3e \r\n            \x3cinput type\x3d"radio" name\x3d"nullValue" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"ignoreRadioBtn"\x3e  \r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.ignored}"\x3e${nls.ignored}\x3c/label\x3e  \r\n          \x3c/div\x3e \r\n        \x3c/div\x3e \r\n      \x3c/div\x3e \r\n    \x3c/div\x3e \r\n\r\n    \x3cdiv style\x3d"height: auto;" class\x3d"section-item value-fields-section-item feature-mode category-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.valueFields}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"valueFieldsDiv"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv style\x3d"height: auto; margin-top: 10px" class\x3d"section-item feature-mode category-mode count-mode field-mode average-align flexStart"\x3e\r\n      \x3cdiv\x3e${nls.sortBy}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"chartSort"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv style\x3d"margin-top: 5px" class\x3d"section-item feature-mode category-mode count-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.maxCategories}\x3c/div\x3e\r\n       \x3cinput data-dojo-attach-point\x3d"maxLabels" data-dojo-type\x3d"dijit/form/NumberSpinner"  data-dojo-props\x3d"intermediateChanges:true" data-dojo-attach-event\x3d"change:onChange"\r\n      /\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"section display-section padding-right-5" data-dojo-attach-point\x3d"displaySection"\x3e\r\n    \x3cdiv class\x3d"section-item column-type bar-type line-type average-align align-items-start"\x3e\r\n      \x3cdiv class\x3d"left-label textOverFlow" style\x3d"max-width: 200px;" title\x3d"${nls.defaultRange}"\x3e${nls.defaultRange}\x3c/div\x3e\r\n      \x3cdiv\x3e\r\n        \x3cdiv\x3e\r\n          \x3cinput type\x3d"radio" name\x3d"defaultRange" data-dojo-attach-event\x3d"change:onChange" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"autoRangeRadio" \x3e\r\n          \x3clabel class\x3d"marginleft10"\x3e${nls.automatic}\x3c/label\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv style\x3d"margin-top: 7px;"\x3e\r\n          \x3cinput type\x3d"radio" name\x3d"defaultRange" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"allRangeRadio"\x3e\r\n          \x3clabel class\x3d"marginleft10"\x3e${nls.all}\x3c/label\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"bgColorDiv" class\x3d"section-item column-type bar-type pie-type line-type average-align"\x3e\r\n      \x3cdiv\x3e${nls.backgroundColor}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"tooltipDiv" class\x3d"section-item column-type bar-type line-type average-align"\x3e\r\n      \x3cdiv\x3e${nls.tooltipMode}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"tooltipModeSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:onChange" class\x3d"restrict-select-width"\x3e\r\n        \x3coption value\x3d"item"\x3e${nls.single}\x3c/option\x3e\r\n        \x3coption value\x3d"axis" selected\x3d"selected"\x3e${nls.multiple}\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv style\x3d"margin-bottom: 10px;" class\x3d"section-item pie-type average-align"\x3e\r\n      \x3cdiv\x3e${nls.hollowsize}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"hollowSize"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"chartColorContainer" style\x3d"height: auto;margin: 10px auto 0 auto;" class\x3d"section-item column-type bar-type pie-type line-type average-align flexStart"\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"legendTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"legendTextColorDiv"\x3e\r\n        \x3cdiv\x3e${nls.textColor}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"legendTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"horTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.title}\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"horTitle" data-dojo-attach-event\x3d"change:onChange" /\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"horTitleColorDiv"\x3e\r\n        \x3cdiv\x3e${nls.titleColor}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"horTextColorDiv"\x3e\r\n        \x3cdiv\x3e${nls.labelColor}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.labelSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"horTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"hAxisKeepIntScaleRow" class\x3d"average-align"\x3e\r\n        \x3cdiv class\x3d"left-label textOverFlow" title\x3d"${nls.intScaleText}"\x3e${nls.intScaleText}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"hAxisSeparatorRow" class\x3d"average-align"\x3e\r\n        \x3cdiv class\x3d"left-label textOverFlow" title\x3d"${nls.use1000Separator}"\x3e${nls.use1000Separator}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"verTogglePocketContent"\x3e\r\n       \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.title}\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"verTitle" data-dojo-attach-event\x3d"change:onChange" /\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"verTitleColorDiv"\x3e\r\n        \x3cdiv\x3e${nls.titleColor}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"verTextColorDiv"\x3e\r\n        \x3cdiv\x3e${nls.labelColor}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.labelSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"verTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"vAxisKeepIntScaleRow" class\x3d"average-align"\x3e\r\n        \x3cdiv class\x3d"left-label textOverFlow" title\x3d"${nls.intScaleText}"\x3e${nls.intScaleText}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"vAxisSeparatorRow" class\x3d"average-align"\x3e\r\n        \x3cdiv class\x3d"left-label textOverFlow" title\x3d"${nls.use1000Separator}"\x3e${nls.use1000Separator}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"dataLabelTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"dataLabelTextColorDiv"\x3e\r\n        \x3cdiv\x3e${nls.textColor}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dataLabelTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"section guide-section" data-dojo-attach-point\x3d"marksSection"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/query dojo/_base/lang dojo/_base/html dojo/_base/declare dojo/Evented dojo/Deferred ./BaseDijitSetting dijit/_WidgetsInTemplateMixin dojo/text!./ChartDijitSetting.html jimu/dijit/TabContainer3 jimu/utils ./_dijits/ChartSort ./_dijits/TogglePocket ./_dijits/VisibleSliderBar ./_dijits/SeriesStyle/SeriesStyle ./_dijits/Mark/Marks ./_dijits/ChartColorSetting ./_dijits/DataFields ./_dijits/Toggle ../utils dijit/form/ValidationTextBox dijit/form/Select dijit/form/RadioButton dijit/form/NumberSpinner dijit/form/TextBox".split(" "),
function(d,y,g,k,A,B,z,C,D,E,F,x,G,v,q,H,I,p,J,w,h){return A([C,D,B],{templateString:E,type:"chart",baseClass:"infographic-chart-dijit-setting",colors:"#68D2E0 #087E92 #47BCF5 #FBE66A #F29157 #C8501D #2DB7C6 #C4EEF6".split(" "),config:null,_defColor:null,_modes:null,_clusterFields:null,_valueFields:null,postMixInProperties:function(){g.mixin(this.nls,window.jimuNls.statisticsChart)},constructor:function(a){this.inherited(arguments);a.nls&&(this.nls=a.nls);this.config=a.config;this._initChartKeyProperty(this.config);
this._defColor=h.getDefaultColorOfTheme(a.appConfig&&a.appConfig.theme)},postCreate:function(){this.inherited(arguments);this._initDijitInTemplate();this._ignoreEvent();this._createInitNodeByType(this.config)},setLayerDefinition:function(a){this.definition=a=h.preProcessDefinition(a);this.seriesStyleDijit&&this.seriesStyleDijit.setLayerDefinition(a)},setLayerObject:function(a,b){this.layerObject=a;this.popupInfo=b},setConfig:function(a){this.config=h.upgradeChartAxisFormatConfig(a,this.definition,
this.popupInfo);this._initChartKeyProperty(a)},setFeatures:function(a){this.seriesStyleDijit&&(this.features=!0,this.seriesStyleDijit.setFeatures(a))},setDataSource:function(a){this.dataSource=a},render:function(){var a=new z;if(!(this.definition&&this.config&&this.dataSource&&this.features))return a.reject("No definition or config or dataSource or features, render error."),a;var b=this.dataSource;this._ignoreEvent();this._setDataSourceToDijits(b);this._initNodesByDataSource(b);(b=this.config.data&&
this.config.data.mode)||(b=this._modes&&this._modes[0]);if(!b)return a.reject("Can not get a valid mode."),a;this._onModeChanged(b,!this.isTemplateConfig(this.config));this._updateNodeBeforeSetConfig(this.config);this._setConfig(this.config);this._careEvent().then(function(){this.tryAutoRuning();a.resolve()}.bind(this));return a},_initDijitInTemplate:function(){this.valueFields=new J;this.valueFields.placeAt(this.valueFieldsDiv);this.own(d(this.valueFields,"change",this._onValueFieldsChanged.bind(this)));
this.bgColor=new p;this.bgColor.placeAt(this.bgColorDiv,"last");this.own(d(this.bgColor,"change",this.onChange.bind(this)));this.legendTextColor=new p;this.legendTextColor.placeAt(this.legendTextColorDiv,"last");this.own(d(this.legendTextColor,"change",this.onChange.bind(this)));this.horTitleColor=new p;this.horTitleColor.placeAt(this.horTitleColorDiv,"last");this.own(d(this.horTitleColor,"change",this.onChange.bind(this)));this.horTextColor=new p;this.horTextColor.placeAt(this.horTextColorDiv,"last");
this.own(d(this.horTextColor,"change",this.onChange.bind(this)));this.hAxisKeepIntScale=new w;this.hAxisKeepIntScale.placeAt(this.hAxisKeepIntScaleRow,"last");this.own(d(this.hAxisKeepIntScale,"change",this.onChange.bind(this)));this.hAxisSeparator=new w;this.hAxisSeparator.placeAt(this.hAxisSeparatorRow,"last");this.own(d(this.hAxisSeparator,"change",this.onChange.bind(this)));this.vAxisSeparator=new w;this.vAxisSeparator.placeAt(this.vAxisSeparatorRow,"last");this.own(d(this.vAxisSeparator,"change",
this.onChange.bind(this)));this.verTitleColor=new p;this.verTitleColor.placeAt(this.verTitleColorDiv,"last");this.own(d(this.verTitleColor,"change",this.onChange.bind(this)));this.verTextColor=new p;this.verTextColor.placeAt(this.verTextColorDiv,"last");this.own(d(this.verTextColor,"change",this.onChange.bind(this)));this.vAxisKeepIntScale=new w;this.vAxisKeepIntScale.placeAt(this.vAxisKeepIntScaleRow,"last");this.own(d(this.vAxisKeepIntScale,"change",this.onChange.bind(this)));this.dataLabelTextColor=
new p;this.dataLabelTextColor.placeAt(this.dataLabelTextColorDiv,"last");this.own(d(this.dataLabelTextColor,"change",this.onChange.bind(this)))},_initChartKeyProperty:function(a){if(a){var b=a.data;a=a.display;b?(this.keyProperties={type:b.type},a&&(this.keyProperties.stack=a.stack,this.keyProperties.area=a.area,this.keyProperties.innerRadius=a.innerRadius)):(this.keyProperties={},console.error("Invalid configuration file or template"))}},isTemplateConfig:function(a){return!(!a||!a.data||a.data.mode)},
tryAutoRuning:function(){if(this.canAutoRunning())this.onChange()},canAutoRunning:function(){var a=this._modes&&this._modes[0];return this.isTemplateConfig(this.config)&&"count"===a},_updateNodeBeforeSetConfig:function(a){a&&(a=(a=a.data.clusterField)||this.clusterFieldSelect.get("value"),this._updateNumberOptionDisplay(a))},_setDataSourceToDijits:function(a){this.seriesStyleDijit&&this.seriesStyleDijit.setDataSource(a)},_onChartModeChanged:function(a){this.ignoreChangeEvents||(this._onModeChanged(a),
this.onChange())},_onModeChanged:function(a,b){this.reset();var c=b?this.config.data.clusterField:this.clusterFieldSelect.get("value");this._updateElementDisplayByChartMode(a);this._chartModeTriggerForModeSelect(a);this._chartModeTriggerForDateOption(c);this._chartModeTriggerForSort(a);this._chartModeTriggerForLegend(a);this._chartModeTriggerForValueFields(a);this._chartModeTriggerForSeriesStyle(a,b);this._emitSettingChange(a,c)},_emitSettingChange:function(a,b){b=b||this.clusterFieldSelect.get("value");
a=a||this.chartModeSelect.get("value");b=this._isClusterDateType(b);this.emit("chartSettingChanged",{mode:a,isDataType:b})},_chartModeTriggerForModeSelect:function(a){h.updateOptions(this.chartModeSelect,null,a);this._updateSelectTitleByValue(this.chartModeSelect,a)},_chartModeTriggerForSort:function(a){this.chartSortDijit.setMode(a);a=this._getSortFields(a,!0);this.chartSortDijit.setFields(a)},_chartModeTriggerForLegend:function(a){var b=this.config.display&&this.config.display.seriesStyle;this._updateLegendDisplay(a,
b&&b.type)},_chartModeTriggerForValueFields:function(a){this._shouldValueFieldAsSingleMode(a)?this.valueFields.setSingleMode():this.valueFields.setMultipleMode()},_chartModeTriggerForSeriesStyle:function(a,b){var c=this.config&&this.config.data,l=b?c&&c.clusterField:this.clusterFieldSelect.get("value");b=b?c&&c.valueFields:this.valueFields.getSelectedFieldNames();this.seriesStyleDijit.render(a,l,b)},_chartModeTriggerForDateOption:function(a){a=a||this.clusterFieldSelect.get("value");this._updateDateOptionContainerDisplay(a)},
reset:function(){var a=this._clusterFields&&this._clusterFields[0]&&this._clusterFields[0].name;h.updateOptions(this.clusterFieldSelect,null,a);this._updateDateOptionContainerDisplay();this._updateNumberOptionDisplay(a);this.valueFields.uncheckAllFields();this.chartSortDijit.reset();this.maxLabels.set("value","");"pie"===this.keyProperties.type&&this.maxLabels.set("value",100);this.tooltipModeSelect.set("value","axis");this._updateTooltipmodeDisplay();this.clearMarks()},_setConfig:function(a){if(a){var b=
a.data;a=a.display;var c,l,d,h,g,k,p;b&&(c=b.clusterField,l=b.valueFields,d=b.operation,h=b.dateConfig,g=b.sortOrder,k=b.maxLabels,p=b.nullValue);this.clusterFieldSelect.set("value",c);this.valueFields.selectFields(l);this.operationSelect.set("value",d);h&&(this.periodSelect.set("value",h.minPeriod),this.showRadioBtn.setChecked(h.isNeedFilled),this.hideRadioBtn.setChecked(!h.isNeedFilled));g&&this.chartSortDijit.setConfig(g);"undefined"!==typeof k?this.maxLabels.set("value",k):this.maxLabels.set("value",
"");"undefined"!==typeof p&&(this.zeroRadioBtn.setChecked(p),this.ignoreRadioBtn.setChecked(!p));var m,e,f,u,r,t,n,q,v,b="AUTO";a&&(m=a.backgroundColor,b=a.displayRange||"AUTO",e=a.tooltip,f=a.seriesStyle,u=a.innerRadius,r=a.legend,t=a.xAxis,n=a.yAxis,q=a.dataLabel,v=a.marks);f&&this.seriesStyleDijit.setConfig(f);"undefined"!==typeof u&&this.hollowSizeControl.setValue(u);m&&this.bgColor.setSingleColor(m);this.autoRangeRadio.setChecked("AUTO"===b);this.allRangeRadio.setChecked("ALL"===b);e&&"pie"!==
this.keyProperties.type&&(this._updateTooltipmodeDisplay(),this.tooltipModeSelect.set("value",e.trigger));f=r&&r.show;m=(e=r&&r.textStyle)&&e.color;e=e&&e.fontSize;this.legendTogglePocket.setState(!!f);m&&this.legendTextColor.setSingleColor(m);e&&this.legendTextSizeControl.setValue(e);f=n&&n.show;this.verTogglePocket.setState(!("undefined"!==typeof f&&!f));r=n&&n.name;e=n&&n.textStyle;m=n&&n.nameTextStyle;f=n&&n.format;n=m&&m.color;m=e&&e.color;e=e&&e.fontSize;u=f&&f.type;f=f&&f.digitSeparator;r&&
this.verTitle.set("value",r);n&&this.verTitleColor.setSingleColor(n);m&&this.verTextColor.setSingleColor(m);e&&this.verticalAxisTextSizeControl.setValue(e);"undefined"!==typeof u&&this.vAxisKeepIntScale.setState("int"===u);"undefined"!==typeof f&&this.vAxisSeparator.setState(f);f=t&&t.show;this.horTogglePocket.setState(!("undefined"!==typeof f&&!f));r=t&&t.name;e=t&&t.textStyle;m=t&&t.nameTextStyle;f=t&&t.format;n=m&&m.color;m=e&&e.color;e=e&&e.fontSize;u=f&&f.type;f=f&&f.digitSeparator;r&&this.horTitle.set("value",
r);n&&this.horTitleColor.setSingleColor(n);m&&this.horTextColor.setSingleColor(m);e&&this.horizontalAxisTextSizeControl.setValue(e);"undefined"!==typeof u&&this.hAxisKeepIntScale.setState("int"===u);"undefined"!==typeof f&&this.hAxisSeparator.setState(f);f=q&&q.show;m=(e=q&&q.textStyle)&&e.color;e=e&&e.fontSize;this.dataLabelTogglePocket.setState(!!f);m&&this.dataLabelTextColor.setSingleColor(m);e&&this.dataLabelSizeControl.setValue(e);v&&this.marks.setConfig(v)}},clearMarks:function(){this.marks&&
this.marks.setConfig({})},isValid:function(){return this.definition?this.maxLabels.isValid()&&this.hollowSizeControl.isValid()&&this.legendTextSizeControl.isValid()&&this.verticalAxisTextSizeControl.isValid()&&this.horizontalAxisTextSizeControl.isValid()&&this.dataLabelSizeControl.isValid():!1},getConfig:function(a){if(!this.isValid(a))return!1;var b=this.keyProperties.type;a={type:b,stack:this.keyProperties.stack,area:this.keyProperties.area,innerRadius:this.keyProperties.innerRadius};var c=this.chartModeSelect.get("value");
a.mode=c;var l;if("feature"===c||"category"===c||"count"===c)l=this.clusterFieldSelect.get("value"),a.clusterField=l;this._isClusterDateType(l)&&(c={},c.minPeriod=this.periodSelect.get("value"),c.isNeedFilled=this.showRadioBtn.checked,a.dateConfig=c);a.nullValue=this.zeroRadioBtn.checked;a.operation=this.operationSelect.get("value");a.valueFields=this.valueFields.getSelectedFieldNames();a.sortOrder=this.chartSortDijit.getConfig();a.maxLabels=this.maxLabels.get("value")||void 0;a.backgroundColor=this.bgColor.getSingleColor();
a.displayRange=this.autoRangeRadio.checked?"AUTO":"ALL";"pie"!==b?(c={confine:!0,trigger:this.tooltipModeSelect.get("value")},a.tooltip=c):a.tooltip={confine:!0,trigger:"item"};var c={textStyle:{}},d=this.legendTogglePocket.visible();c.show=d?this.legendTogglePocket.getState():!1;c.textStyle.color=this.legendTextColor.getSingleColor();c.textStyle.fontSize=this.legendTextSizeControl.getValue();a.legend=c;c={textStyle:{}};c.show=this.horTogglePocket.getState();if(d=this.horTitle.get("value"))c.name=
x.stripHTML(d),c.nameTextStyle={},c.nameTextStyle.color=this.horTitleColor.getSingleColor();c.textStyle.color=this.horTextColor.getSingleColor();c.textStyle.fontSize=this.horizontalAxisTextSizeControl.getValue();d={};h.isValueAxis(!1,b)&&(d={type:this.hAxisKeepIntScale.getState()?"int":"float"});if(this._isNumberOptionValid(!1,l,b)){var g=this.hAxisSeparator.getState();d.digitSeparator=g}c.format=d;a.xAxis=c;c={textStyle:{}};c.show=this.verTogglePocket.getState();if(d=this.verTitle.get("value"))c.name=
x.stripHTML(d),c.nameTextStyle={},c.nameTextStyle.color=this.verTitleColor.getSingleColor();c.textStyle.color=this.verTextColor.getSingleColor();c.textStyle.fontSize=this.verticalAxisTextSizeControl.getValue();d={};h.isValueAxis(!0,b)&&(g=this.vAxisKeepIntScale.getState(),d.type=g?"int":"float");this._isNumberOptionValid(!0,l,b)&&(l=this.vAxisSeparator.getState(),d.digitSeparator=l);c.format=d;a.yAxis=c;l={textStyle:{}};l.show=this.dataLabelTogglePocket.getState();l.textStyle.color=this.dataLabelTextColor.getSingleColor();
l.textStyle.fontSize=this.dataLabelSizeControl.getValue();a.dataLabel=l;a.innerRadius=this.hollowSizeControl.getValue();if(this.marks){l=this.marks.getConfig();if(!1===l)return!1;a.marks=l}this.seriesStyleDijit&&(l=this.seriesStyleDijit.getConfig(),a.seriesStyle=l);if(a=h.getChartConfig(a))return this.config=a;this.dijit.clearChart()},onChange:function(){this.ignoreChangeEvents||(this.getConfig(),this.updateDijit())},updateDijit:function(){x.isEqual(this.cacheConfig,this.config)||(this.dijit.setConfig(this.config),
this.dijit.startRendering());this.cacheConfig=null;this.cacheConfig=g.clone(this.config)},_createInitNodeByType:function(a){if(a=a.data){a=a.type;var b=[{title:this.nls.data,content:this.dataSection},{title:this.nls.display,content:this.displaySection}];"pie"!==a&&b.push({title:this.nls.marks,content:this.marksSection});this.tabContainer=new F({average:!0,tabs:b});"pie"!==a?(this.marks=new I({chartType:a,nls:this.nls,folderUrl:this.folderUrl,defaultColor:this._defColor.textColor}),this.marks.placeAt(this.marksSection),
this.own(d(this.marks,"change",g.hitch(this,this.onChange))),this.valueFields.setMultipleMode()):this.valueFields.setSingleMode();this._updateKeepIntScaleRowDisplay();this.bgColor.setSingleColor(this._defColor.bgColor);this.seriesStyleDijit=new H({nls:this.nls,map:this.map,chartInfo:{type:this.keyProperties.type,area:this.keyProperties.area}});this.seriesStyleDijit.placeAt(this.chartColorContainer);this.seriesStyleDijit.startup();this.own(d(this.seriesStyleDijit,"change",g.hitch(this,function(a){a=
a&&a.type;var b=this.chartModeSelect.get("value");this._updateLegendDisplay(b,a);this.onChange()})));this.hollowSizeControl=new q({min:0,max:60,step:1,value:this.keyProperties.innerRadius||0});this.own(d(this.hollowSizeControl,"change",g.hitch(this,this.onChange)));this.hollowSizeControl.placeAt(this.hollowSize);this.legendTogglePocket=new v({titleLabel:this.nls.legend,content:this.legendTogglePocketContent,className:"section-item column-type bar-type line-type pie-type"});this.legendTogglePocket.setState(!1);
this.own(d(this.legendTogglePocket,"change",g.hitch(this,this.onChange)));this.legendTogglePocket.placeAt(this.displaySection);this.legendTextColor.setSingleColor(this._defColor.textColor);this.legendTextSizeControl=new q({min:6,max:40,step:1,value:12});this.own(d(this.legendTextSizeControl,"change",g.hitch(this,this.onChange)));this.legendTextSizeControl.placeAt(this.legendTextSize);this.verTogglePocket=new v({titleLabel:this.nls.verticalAxis,content:this.verTogglePocketContent,className:"section-item column-type bar-type line-type"});
this.verTogglePocket.setState(!1);this.own(d(this.verTogglePocket,"change",g.hitch(this,this.onChange)));this.verTogglePocket.placeAt(this.displaySection);this.verTextColor.setSingleColor(this._defColor.textColor);this.verTitleColor.setSingleColor(this._defColor.textColor);this.verticalAxisTextSizeControl=new q({min:6,max:40,step:1,value:12});this.own(d(this.verticalAxisTextSizeControl,"change",g.hitch(this,this.onChange)));this.verticalAxisTextSizeControl.placeAt(this.verTextSize);this.vAxisKeepIntScale.setState(!1);
this.horTogglePocket=new v({titleLabel:this.nls.horizontalAxis,content:this.horTogglePocketContent,className:"section-item column-type bar-type line-type"});this.horTogglePocket.setState(!1);this.own(d(this.horTogglePocket,"change",g.hitch(this,this.onChange)));this.horTogglePocket.placeAt(this.displaySection);this.horTextColor.setSingleColor(this._defColor.textColor);this.horTitleColor.setSingleColor(this._defColor.textColor);this.horizontalAxisTextSizeControl=new q({min:6,max:40,step:1,value:12});
this.own(d(this.horizontalAxisTextSizeControl,"change",g.hitch(this,this.onChange)));this.horizontalAxisTextSizeControl.placeAt(this.horTextSize);this.hAxisKeepIntScale.setState(!1);this.dataLabelTogglePocket=new v({titleLabel:this.nls.dataLabels,content:this.dataLabelTogglePocketContent,className:"section-item pie-type"});this.dataLabelTogglePocket.setState(!1);this.own(d(this.dataLabelTogglePocket,"change",g.hitch(this,this.onChange)));this.dataLabelTogglePocket.placeAt(this.displaySection);this.dataLabelTextColor.setSingleColor(this._defColor.textColor);
this.dataLabelSizeControl=new q({min:6,max:40,step:1,value:12});this.own(d(this.dataLabelSizeControl,"change",g.hitch(this,this.onChange)));this.dataLabelSizeControl.placeAt(this.dataLabelTextSize);this.chartSortDijit=new G({nls:this.nls});this.own(d(this.chartSortDijit,"change",g.hitch(this,this.onChange)));this.chartSortDijit.placeAt(this.chartSort);this.tabContainer.placeAt(this.domNode);"pie"===a?(this.maxLabels.constraints={min:1,max:100},this.maxLabels.set("value",100),this.maxLabels.required=
!0):(this.maxLabels.constraints={min:1,max:3E3},this.maxLabels.required=!1);this._updateElementDisplayByChartType(a)}},_ignoreEvent:function(){this.ignoreChangeEvents=!0},_careEvent:function(){var a=new z;setTimeout(function(){this.ignoreChangeEvents=!1;a.resolve()}.bind(this),200);return a},_updateSelectTitleByValue:function(a,b){(b=a.getOptions(b))&&"undefined"!==typeof b.label&&a.set("title",b.label)},_updateLegendDisplay:function(a,b){a=a||this.chartModeSelect.get("value");a=this._shouldLegendDisplay(a,
b);b=this.keyProperties.type;a?this._showLegend(b):this._hideLegend()},_getValueFields:function(){return this.valueFields.getSelectedFieldNames()},_getSortFields:function(a,b){var c=this.definition;if(c&&a&&(b=b?this.config.data&&this.config.data.valueFields:this._getValueFields(),"feature"===a||b&&b[0])){var d=[];"feature"===a?(d=g.clone(c.fields),d=h.getNotGeometryFields(d)):b&&(d=h.getFieldInfosByFieldName(b,c));return d.map(function(a){return{value:a.name,label:a.alias||a.name}})}},_initNodesByDataSource:function(a){this._initInfoByDataSource(a);
this._fillModeSelect(this._modes);this._fillClusterFieldSelect(this._clusterFields);this._fillValueFieldLists(this._valueFields)},_initInfoByDataSource:function(a){a&&(this._modes=this._getSupportedModes(a,this.definition),a=this._getSupportFields(this.definition),this._clusterFields=a[0],this._valueFields=a[1])},_getSupportedModes:function(a,b){if(b&&a){var c=!1,d=["feature","category","count","field"];if(a=a.frameWorkDsId)a=(this.appConfig.dataSource&&this.appConfig.dataSource.dataSources)[a],"FeatureStatistics"===
a.type&&(c=!0,d=0<(g.clone(a.dataSchema).groupByFields||[]).length?h.hasNumberFields(b)?["category","count"]:["count"]:["field"]);c||h.hasNumberFields(b)||(d=["count"]);return d}},_fillModeSelect:function(a){a&&(this.chartModeSelect.removeOption(this.chartModeSelect.getOptions()),a.forEach(function(a){"feature"===a?this.chartModeSelect.addOption({value:"feature",label:this.nls.featureOption}):"category"===a?this.chartModeSelect.addOption({value:"category",label:this.nls.categoryOption}):"count"===
a?this.chartModeSelect.addOption({value:"count",label:this.nls.countOption}):"field"===a&&this.chartModeSelect.addOption({value:"field",label:this.nls.fieldOption})}.bind(this)))},_getSupportFields:function(a){if(a){var b=g.clone(a.fields);if(b&&b.length){b.forEach(function(a){a.checked&&(a.checked=!1)});var c=a.groupByFields;a=h.getClusterFields(b,c);b=h.getValueFields(b,c,a);return[a,b]}}},_fillClusterFieldSelect:function(a){a=a.map(function(a){return{label:a.alias||a.name,value:a.name}});h.updateOptions(this.clusterFieldSelect,
a)},_fillValueFieldLists:function(a){this.valueFields.setFields(a)},_valueFieldsTriggerForTooltipMode:function(){this._updateTooltipmodeDisplay()},_valueFieldsTriggerForSeriesStyle:function(){var a=this.chartModeSelect.get("value"),b=this.clusterFieldSelect.get("value"),c=this.valueFields.getSelectedFieldNames();this.seriesStyleDijit.render(a,b,c)},_valueFieldsTriggerForChartSort:function(){var a=this.chartModeSelect.get("value"),a=this._getSortFields(a);this.chartSortDijit.setFields(a)},_onClusterFieldChanged:function(a){if(!this.ignoreChangeEvents){var b=
this.chartModeSelect.get("value");this._clusterFieldChangeTriggerForDateOption(a);this._clusterFieldChangeTriggerForSeriesStyle(b,a);this._clusterFieldChangeTriggerForNumberOption(a);this.onChange();this._emitSettingChange(b,a)}},_clusterFieldChangeTriggerForDateOption:function(a){this._updateDateOptionContainerDisplay(a)},_clusterFieldChangeTriggerForSeriesStyle:function(a,b){var c=this.valueFields.getSelectedFieldNames();this.seriesStyleDijit.render(a,b,c)},_updateKeepIntScaleRowDisplay:function(){var a=
h.isValueAxis(!0,this.keyProperties.type);this._updateAxisIntScaleRowDisplay(!0,a);this._updateAxisIntScaleRowDisplay(!1,!a)},_updateNumberOptionDisplay:function(a){var b=this._isNumberOptionValid(!0,a,this.keyProperties.type);a=this._isNumberOptionValid(!1,a,this.keyProperties.type);b?this._updateAxisNumberOptionDisplay(!0,!0):this._updateAxisNumberOptionDisplay(!0,!1);a?this._updateAxisNumberOptionDisplay(!1,!0):this._updateAxisNumberOptionDisplay(!1,!1)},_clusterFieldChangeTriggerForNumberOption:function(a){this._updateNumberOptionDisplay(a)},
_onValueFieldsChanged:function(){this.ignoreChangeEvents||(this._valueFieldsTriggerForSeriesStyle(),this._valueFieldsTriggerForChartSort(),this._valueFieldsTriggerForTooltipMode(),this.onChange())},_shouldShowDateOption:function(a){var b=this.chartModeSelect.get("value");a=a||this.clusterFieldSelect.get("value");a=h.isDateField(a,this.definition);return("category"===b||"count"===b)&&a},_shouldShowTooltipMode:function(){if("pie"===this.keyProperties.type)return!1;var a=this.chartModeSelect.get("value");
return"count"===a||"field"===a?!1:1<this.valueFields.getSelectedFieldNames().length},_showDateOptionContainer:function(a){"pie"!==a&&this._showPeriodsRecordsDiv();this._showPeridoDiv()},_hideDateOptionContainer:function(){this._hidePeridoDiv();this._hidePeriodsRecordsDiv()},_showPeridoDiv:function(){k.setStyle(this.periodDiv,"display","")},_hidePeridoDiv:function(){k.setStyle(this.periodDiv,"display","none")},_showPeriodsRecordsDiv:function(){k.setStyle(this.periodsRecordsDiv,"display","")},_hidePeriodsRecordsDiv:function(){k.setStyle(this.periodsRecordsDiv,
"display","none")},_showTooltipMode:function(){k.setStyle(this.tooltipDiv,"display","")},_hideTooltipMode:function(){k.setStyle(this.tooltipDiv,"display","none")},_hideLegend:function(){this.legendTogglePocket&&this.legendTogglePocket.hide()},_showLegend:function(){this.legendTogglePocket&&this.legendTogglePocket.show()},_updateAxisNumberOptionDisplay:function(a,b){b?this._showAxisSeparatorRow(a):this._hideAxisSeparatorRow(a)},_updateAxisIntScaleRowDisplay:function(a,b){b?this._showAxisKeepIntScaleRow(a):
this._hideAxisKeepIntScaleRow(a)},_showAxisKeepIntScaleRow:function(a){a?k.removeClass(this.vAxisKeepIntScaleRow,"hide"):k.removeClass(this.hAxisKeepIntScaleRow,"hide")},_hideAxisKeepIntScaleRow:function(a){a?k.addClass(this.vAxisKeepIntScaleRow,"hide"):k.addClass(this.hAxisKeepIntScaleRow,"hide")},_showAxisSeparatorRow:function(a){a?k.removeClass(this.vAxisSeparatorRow,"hide"):k.removeClass(this.hAxisSeparatorRow,"hide")},_hideAxisSeparatorRow:function(a){a?k.addClass(this.vAxisSeparatorRow,"hide"):
k.addClass(this.hAxisSeparatorRow,"hide")},_showSectionItem:function(a){k.removeClass(a,"hide")},_hideSectionItem:function(a){k.addClass(a,"hide")},_shouldValueFieldAsSingleMode:function(a){var b=this.keyProperties.type;return("feature"===a||"category"===a)&&"pie"===b},_isNumberOptionValid:function(a,b,c){if(h.isAxisType(c)){if(h.isValueAxis(a,c))return!0;if("field"===this.chartModeSelect.get("value"))return!1;b=b||this.clusterFieldSelect.get("value");return this.isClusterNumberType(b)}},isClusterNumberType:function(a){return h.isNumberType(a,
this.definition,!0)},_shouldLegendDisplay:function(a,b){var c;"pie"===this.keyProperties.type?c=!0:(c=!0,c="count"===a||"field"===a?!1:"layerSymbol"!==b);return c},_tryGetLayerIdFromDataSource:function(a){if(a){var b=a.layerId;a=a.frameWorkDsId;!b&&a&&(a=h.parseDataSourceId(a))&&"undefined"!==a.layerId&&(b=a.layerId);return b}},_updateDateOptionContainerDisplay:function(a){a=this._shouldShowDateOption(a);var b=this.keyProperties.type;a?this._showDateOptionContainer(b):this._hideDateOptionContainer()},
_updateTooltipmodeDisplay:function(){this._shouldShowTooltipMode()?this._showTooltipMode():this._hideTooltipMode()},_isClusterDateType:function(a){return this._shouldShowDateOption(a)},_updateElementDisplayByChartMode:function(a){var b=a+"-mode";y(".section-item",this.dataSection).forEach(g.hitch(this,function(a){k.hasClass(a,b)?this._showSectionItem(a):this._hideSectionItem(a)}))},_updateElementDisplayByChartType:function(a){var b=a+"-type";y(".section-item",this.displaySection).forEach(g.hitch(this,
function(a){k.hasClass(a,b)?this._showSectionItem(a):this._hideSectionItem(a)}))},_showChartNoData:function(a){setTimeout(function(){a&&this.dijit.setConfig(a);this.dijit.clearChart()}.bind(this),200)},_getDefaultFieldName:function(){var a;this._clusterFieldOptions&&this._clusterFieldOptions[0]&&(a=this._clusterFieldOptions[0].value);return a}})});