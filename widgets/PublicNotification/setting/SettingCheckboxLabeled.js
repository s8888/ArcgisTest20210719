// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/on","./settingComponents","./SettingObject"],function(h,k,l,b,m){return h(m,{_inputControl:null,constructor:function(a,n,d,e,c,f,g){a=[];c=b.checkboxCtl("inline-block",!1,c);a.push(c.div);this._inputControl=c.ctl;g&&this.own(l(this._inputControl,"change",k.hitch(this,g)));f&&a.push(b.text("hint",f));this._mainDiv=b.container("flexbox "+(n||""),"minorTrailingHorizGap",[b.container("inline-block "+(d?d:""),"",[]),b.container("inline-block "+(e?e:
""),"minorTrailingVertGap",a)])},setValue:function(a){this._inputControl&&this._inputControl.setValue(a)},getValue:function(){if(this._inputControl)return this._inputControl.getValue()},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(a,b){this._inputControl&&(this._config=this.getValue())}})});