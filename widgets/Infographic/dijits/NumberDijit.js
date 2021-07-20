// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare ./BaseDijit dojo/dom-style dojo/_base/html jimu/utils ../utils ./clientStatistic ./styleUtils".split(" "),function(k,l,e,b,f,h,m,n){return k([l],{templateString:'\x3cdiv tabindex\x3d"0" class\x3d"has-link" role\x3d"link" style\x3d"height:100%;width:100%;"\x3e\x3cdiv data-dojo-attach-point\x3d"noDataDiv"class\x3d"no-data-tip"\x3e${nls.noData}\x3c/div\x3e\x3ca tabindex\x3d"-1" data-dojo-attach-point\x3d"numberContent" class\x3d"number-content no-trim" target\x3d"_blank"\x3e\x3cdiv data-dojo-attach-point\x3d"leftIcon" class\x3d"icon"\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"number" class\x3d"number"\x3e\x3cdiv data-dojo-attach-point\x3d"prefix" class\x3d"prefix"\x3e\x3c/div\x3e\x3cdiv class\x3d"value-content" data-dojo-attach-point\x3d"valueContent"\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"suffix" class\x3d"suffix"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"rightIcon" class\x3d"icon"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e',
baseClass:"infographic-number-dijit",type:"number",config:null,constructor:function(a){this.visible=a.visible},postCreate:function(){this.inherited(arguments);this._value=this._features=null;this._upgradeConfig(this.config);this.setConfig(this.config);this._updateBackGroundColor()},_upgradeConfig:function(a){(a=a&&a.dataFormat)&&"undefined"===typeof a.digitSeparator&&(a.digitSeparator=!0)},setLayerInfo:function(){},setVisible:function(a){this.visible=a},resetData:function(){this.numberValue=this._value=
this._features=this.dataSource=null},onDataSourceDataUpdate:function(a){this.inSettingPage?a&&"undefined"!==typeof a.features&&(this._features=h.cleanFeatures(a.features)):"number"===typeof a&&(this._value=a)},setDataSource:function(a){this.inherited(arguments);this.dataSource=a},setConfig:function(a){a&&(this.config=a)},startRendering:function(){this._shouldRenderNumber()&&(this._updateBackGroundColor(),this._calculateNumberValue(),"number"!==typeof this.numberValue?this.showNodata():this._renderNumber(this.numberValue))},
_calculateNumberValue:function(){var a;this.inSettingPage?(a=h.getStatisticForNumber(this.config),a=m.statistic(a,this.dataSource,this._features)):a=this._value;"undefined"!==typeof a&&!1!==a&&(this.numberValue=a)},_renderNumber:function(a){this._cleanNumberContent();this.valueContent.innerHTML=f.localizeNumber(a);this._setValueDisplay()},_setValueDisplay:function(){var a=this.config;a&&(this._setBackground(a),this._setFont(a),this._setDataFormat(a),this._setIndicatorStyle())},_shouldRenderNumber:function(){if(this.visible&&
this.config){var a;(a=this.inSettingPage?this.domNode&&this._features:this.domNode&&"number"===typeof this._value)?this.hideNodata():this.showNodata();return!!a}},_getIndicatorColor:function(){var a=!1,c=!1,b=this.config.indicators;b&&((b=h.getVaildIndicator(this.numberValue,b))&&b.valueColor&&(a=b.valueColor),b&&f.isNotEmptyObject(b.iconInfo)&&(c=b.iconInfo));return{color:a,icon:c}},_cleanNumberContent:function(){b.removeClass(this.leftIcon);b.addClass(this.leftIcon,["icon"]);b.removeClass(this.rightIcon);
b.addClass(this.rightIcon,["icon"]);this.replaceIcon&&(b.destroy(this.replaceIcon),this.replaceIcon=null);b.empty(this.valueContent);b.empty(this.prefix);b.empty(this.suffix);this._setValueColor("")},_updateBackGroundColor:function(){var a=this.config;(a=a&&a.background&&a.background.backgroundColor)&&b.setStyle(this.domNode,"backgroundColor",a)},_setBackground:function(a){if(a=a&&a.background){a.backgroundColor&&b.setStyle(this.domNode,"backgroundColor",a.backgroundColor);var c=a.alignment;c&&(b.removeClass(this.domNode),
b.addClass(this.domNode,"infographic-number-dijit"),c.horizontal&&b.addClass(this.domNode,"horizontal-"+c.horizontal),c.vertical&&b.addClass(this.domNode,"vertical-"+c.vertical));a.link?b.setAttr(this.numberContent,"href",a.link):b.removeAttr(this.numberContent,"href")}},_setFont:function(a){if(a&&a.font){var c={};n.font.setStyle(a.font,c);b.setStyle(this.number,c)}},_setDataFormat:function(a){var b,g="",e;b=this.numberValue;var d=a.dataFormat;d&&(a=d.decimalPlaces,e=d.digitSeparator,a&&(a=Number(a)),
"percentage"===d.unit?b=f.convertNumberToPercentage(b,a,e):"thousand"===d.unit?(g=this.nls.thousandAbbreviation,b/=1E3):"million"===d.unit?(g=this.nls.millionAbbreviation,b/=1E6):"billion"===d.unit&&(g=this.nls.billionAbbreviation,b/=1E9),"percentage"!==d.unit&&(b=f.localizeNumberByFieldInfo(b,{format:{places:a,digitSeparator:e}})),g&&(b+=g),this.valueContent.innerHTML=b,d.prefix&&(this.prefix.innerHTML=f.sanitizeHTML(d.prefix)),d.suffix&&(this.suffix.innerHTML=f.sanitizeHTML(d.suffix)))},_setIndicatorStyle:function(){var a=
this._getIndicatorColor();a.color&&this._setValueColor(a.color);a.icon&&this._setIndicatorIcon(a.icon)},_setValueColor:function(a){e.set(this.number,"color",a)},_setIndicatorIcon:function(a){a&&("left"===a.placement||"right"===a.placement?this._setLeftRightIcon(a):"replace"===a.placement&&this._setReplaceIcon(a))},_setReplaceIcon:function(a){var c=b.create("div",{"class":"indicator-icon "+a.icon});b.empty(this.valueContent);b.place(c,this.valueContent);e.set(c,"color",a.color);e.set(c,"display","inline-flex")},
_setLeftRightIcon:function(a){var c;"left"===a.placement?c=this.leftIcon:"right"===a.placement&&(c=this.rightIcon);b.addClass(c,"indicator-icon "+a.icon);e.set(c,"color",a.color)},showNodata:function(a){this._cleanNumberContent();b.addClass(this.domNode,"no-data");a&&(this.noDataDiv.innerHTML=f.sanitizeHTML(a))},hideNodata:function(){b.removeClass(this.domNode,"no-data")}})});