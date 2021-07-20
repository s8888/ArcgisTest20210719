// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Deferred dojo/promise/all dojo/json dijit/form/NumberTextBox dijit/form/Select dijit/form/Textarea dijit/form/DateTextBox dijit/form/TimeTextBox jimu/dijit/CheckBox jimu/dijit/URLInput jimu/utils esri/tasks/LinearUnit esri/tasks/FeatureSet esri/geometry/Polygon esri/graphic ../BaseEditor".split(" "),function(e,k,g,c,p,u,v,q,h,l,w,x,y,z,A,r,B,C,D,E,f){function m(a,b){return new l({value:b,options:g.map(a,function(a){return{label:a,
value:a}})})}function n(a){return a.filter&&a.filter.type?a.filter.type.toLowerCase():null}function t(a){var b;a.list&&2===a.list.length?(b=+a.list[0],a=+a.list[1]):(b=a.minimum,a=a.maximum);return isNaN(b)||isNaN(a)?null:(b=Math.min(b,a),a=Math.max(b,a),[b,a])}var d={};d.UnsupportEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-unsupport",editorName:"UnsupportEditor",postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"innerHTML",r.sanitizeHTML(this.message))},getValue:function(){return null}});
d.ShowMessage=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-message",editorName:"ShowMessage",postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"innerHTML",r.sanitizeHTML(this.message))},getValue:function(){return null}});d.GeneralEditorWrapperEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-wrapper",editorName:"GeneralEditorWrapperEditor",postCreate:function(){this.inherited(arguments);c.setStyle(this.gEditor.domNode,"width","100%");"Select"===this.editorName?c.addClass(this.gEditor.domNode,
"restrict-select-width"):"valuelist"===n(this.param)&&this.param.filter.list&&0<this.param.filter.list.length&&(this.gEditor=m(this.param.filter.list,this.param.defaultValue),c.addClass(this.gEditor.domNode,"restrict-select-width"));this.gEditor.placeAt(this.domNode)},reset:function(){this.gEditor.set("value","")},getValue:function(){var a=this.gEditor.getValue();return"string"===typeof a&&""===k.trim(a)?null:a}});d.LongNumberEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-long",editorName:"LongNumberEditor",
postCreate:function(){this.inherited(arguments);this.value=isNaN(this.param.defaultValue)?NaN:this.param.defaultValue;var a=n(this.param);if("range"===a){if(a=t(this.param.filter))this.editor=new h({value:this.value,constraints:{places:0,min:a[0],max:a[1]}})}else"valuelist"===a&&this.param.filter.list&&0<this.param.filter.list.length&&(this.editor=m(this.param.filter.list,this.param.defaultValue));this.editor||(this.editor=new h({value:this.value,constraints:{places:0}}));this.editor.placeAt(this.domNode)},
reset:function(){this.editor.set("value",NaN)},getValue:function(){var a=this.editor.get("value");return isNaN(a)?null:a}});d.DoubleNumberEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-double",editorName:"DoubleNumberEditor",postCreate:function(){this.inherited(arguments);this.value=isNaN(this.param.defaultValue)?NaN:this.param.defaultValue;var a=n(this.param);if("range"===a){if(a=t(this.param.filter))this.editor=new h({value:this.value,constraints:{min:a[0],max:a[1]}})}else"valuelist"===
a&&this.param.filter.list&&0<this.param.filter.list.length&&(this.editor=m(this.param.filter.list,this.param.defaultValue));this.editor||(this.editor=new h({value:this.value}));this.editor.placeAt(this.domNode)},reset:function(){this.editor.set("value",NaN)},getValue:function(){var a=this.editor.get("value");return isNaN(a)?null:a}});d.MultiValueChooser=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-multivalue-chooser",editorName:"MultiValueChooser",postCreate:function(){this.inherited(arguments);
this.checkBoxs=[];g.forEach(this.param.choiceList,function(a){a=new z({label:a,checked:this.param.defaultValue&&-1<this.param.defaultValue.indexOf(a)?!0:!1});a.placeAt(this.domNode);this.checkBoxs.push(a)},this)},getValue:function(){var a=[];g.forEach(this.checkBoxs,function(b){b.checked&&a.push(b.label)},this);return a}});d.MultiValueEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-multivalue",editorName:"MultiValueEditor",postCreate:function(){this.inherited(arguments);this.editors=[];
var a=c.create("div",{"class":"input-list"},this.domNode),b=k.clone(this.param,a);b.dataType=this.param.dataType.substr(13,this.param.dataType.length);b.originParam=this.param;this._initChildEditors(b,a);this._createAddInputNode(b,a)},_initChildEditors:function(a,b){this.param.defaultValue&&0<this.param.defaultValue.length?g.forEach(this.param.defaultValue,function(c){a.defaultValue=c;this._createSingleInputContainerNode(a,b)},this):(delete a.defaultValue,this._createSingleInputContainerNode(a,b))},
getValue:function(){var a=[];g.forEach(this.editors,function(b){(b=b.getValue())&&a.push(b)},this);return a},getGPValue:function(){var a=new u,b=[];g.forEach(this.editors,function(a){b.push(a.getGPValue())},this);v(b).then(function(b){a.resolve(b)},function(b){a.reject(b)});return a},destroy:function(){g.forEach(this.editors,function(a){a.destroy()});this.editors=[];this.inherited(arguments)},_createSingleInputContainerNode:function(a,b){b=c.create("div",{"class":"single-input"},b);a=this.editorManager.createEditor(a,
"input",this.context,{widgetUID:this.widgetUID,config:this.config});a.placeAt(b);this._createRemoveInputNode(b);b.inputEditor=a;this.editors.push(a);return b},_createRemoveInputNode:function(a){var b=c.create("div",{"class":"remove",innerHTML:"-"},a);this.own(p(b,"click",k.hitch(this,function(){this.editors.splice(this.editors.indexOf(a.inputEditor),1);a.inputEditor.destroy();c.destroy(a)})));return b},_createAddInputNode:function(a,b){var d=c.create("div",{"class":"add-input"},this.domNode),e=c.create("div",
{"class":"add-btn",innerHTML:"+"},d);this.own(p(e,"click",k.hitch(this,function(){this._createSingleInputContainerNode(a,b)})));return d}});d.LinerUnitEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-liner-unit",editorName:"LinerUnitEditor",postCreate:function(){this.inherited(arguments);this.distance=this.param.defaultValue?this.param.defaultValue.distance:0;this.units=this.param.defaultValue?this.param.defaultValue.units:"esriMeters";this.inputDijit=new h({value:this.distance});this.selectDijit=
new l({value:this.units,options:[{label:this.nls.meters,value:"esriMeters"},{label:this.nls.kilometers,value:"esriKilometers"},{label:this.nls.feet,value:"esriFeet"},{label:this.nls.miles,value:"esriMiles"},{label:this.nls.nauticalMiles,value:"esriNauticalMiles"},{label:this.nls.yards,value:"esriYards"}]});c.addClass(this.selectDijit.domNode,"restrict-select-width");this.inputDijit.placeAt(this.domNode);this.selectDijit.placeAt(this.domNode)},getValue:function(){var a=new B;a.distance=this.inputDijit.getValue();
a.units=this.selectDijit.getValue();return a}});d.DateTimeEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-datatime",editorName:"DateTimeEditor",postCreate:function(){var a=new Date(this.param.defaultValue);this.value=this.param.defaultValue?new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()):null;this.inherited(arguments);this.dateDijit=new x({value:this.value,style:{width:"60%"}});this.timeDijit=new y({value:this.value,style:{width:"40%"},constraints:{timePattern:"HH:mm:ss",
clickableIncrement:"T00:15:00",visibleIncrement:"T00:15:00"}});this.dateDijit.placeAt(this.domNode);this.timeDijit.placeAt(this.domNode)},startup:function(){this.dateDijit.startup();this.timeDijit.startup()},reset:function(){this.dateDijit.set("value",void 0);this.timeDijit.set("value",void 0)},getValue:function(){var a=new Date,b=this.dateDijit.getValue(),c=this.timeDijit.getValue();return null!==b&&null!==c?(a.setFullYear(b.getFullYear()),a.setMonth(b.getMonth()),a.setDate(b.getDate()),a.setHours(c.getHours()),
a.setMinutes(c.getMinutes()),a.setSeconds(c.getSeconds()),a.getTime()):null}});d.GetUrlObjectFromLayer=e([f,l],{editorName:"GetUrlObjectFromLayer",postCreate:function(){this.options=[];g.forEach(this.map.graphicsLayerIds,function(a){a=this.map.getLayer(a);"esri.layers.FeatureLayer"!==a.declaredClass||this.geometryType&&a.geometryType!==this.geometryType||this.options.push({label:a.label||a.title||a.name||a.id,value:a.id})},this);this.inherited(arguments);this.setValue(this.value);c.addClass(this.domNode,
"jimu-gp-editor-sffl");c.addClass(this.domNode,"jimu-gp-editor-base")},getValue:function(){return this.value},getGPValue:function(){var a,b;g.forEach(this.map.graphicsLayerIds,function(b){var c=this.map.getLayer(b);b===this.getValue()&&(a=c.url)},this);b={url:a};b=this.wrapGPValue(b);return this.wrapValueToDeferred(b)}});d.ObjectUrlEditor=e([f,A],{editorName:"ObjectUrlEditor",postCreate:function(){this.rest=!1;this.inherited(arguments);c.addClass(this.domNode,"jimu-gp-editor-ourl");c.addClass(this.domNode,
"jimu-gp-editor-base")},getValue:function(){return this.value},getGPValue:function(){var a;a=this.getValue()?{url:this.getValue()}:null;a=this.wrapGPValue(a);return this.wrapValueToDeferred(a)}});d.SimpleJsonEditor=e([f,w],{editorName:"SimpleJsonEditor",postMixInProperties:function(){this.inherited(arguments);"object"===typeof this.value&&(this.value=q.stringify(this.value))},postCreate:function(){this.inherited(arguments);c.addClass(this.domNode,"jimu-gp-editor-json");c.addClass(this.domNode,"jimu-gp-editor-base");
this.set("placeholder",this.nls.jsonPlaceholder)},getValue:function(){return this.value},getGPValue:function(){var a;a=this.getValue()?q.parse(this.getValue()):null;a=this.wrapGPValue(a);return this.wrapValueToDeferred(a)}});d.currentExtentEditor=e(f,{editorName:"SelectFeatureSetFromMap",postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"innerHTML",this.message)},getValue:function(){var a=new C,b=[new E(D.fromExtent(this.map.extent))];a.features=b;return a}});return d});