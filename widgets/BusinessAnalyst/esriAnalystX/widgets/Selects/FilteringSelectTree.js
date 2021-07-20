// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","./FilteringSelect","esri/dijit/geoenrichment/SelectableTree","../../widgets/SelectableTreeGrid/SelectableTreeGrid","xstyle/css!./css/FilteringSelect.css"],function(d,h,k,f){function l(a,b){var c=[];a.forEach(function(a){a.children.forEach(function(a){var e={};e[b.idProperty]=a[b.idProperty];e[b.labelProperty]=a[b.labelProperty];e.__item=a;c.push(e)})});return c}function m(a,b,c){var g={};b.forEach(function(a){g[a[c.idProperty]]=a});var d=[];a.forEach(function(a){var b=
a.children.filter(function(a){return g[a[c.idProperty]]});if(b.length){var e={};e[c.idProperty]=a[c.idProperty];e[c.labelProperty]=a[c.labelProperty];e.children=b.map(function(a){var b={};b[c.idProperty]=a[c.idProperty];b[c.labelProperty]=a[c.labelProperty];return b});d.push(e)}});return{treeData:d,idsHash:g}}f=d(f,{showRootCheckbox:!1,showCheckboxColumn:!1,enableRowSelection:!0,expandOnNodeClick:!0,baseTree:null,hostWidget:null,defaultExpand:null,_firstTimeExpand:!0,getLabel:function(a,b){return a[this.labelProperty]},
onRowsSelected:function(a,b){a=a&&a[0];b=b&&b[0];a&&!a.children&&(b.setAttribute("item",a[this.idProperty]),this.onChange(b))},createOptions:function(a,b,c){a=m(this.baseTree.data,a,this);this.items=a.idsHash;this.tree.clear();if(this._firstTimeExpand){this._firstTimeExpand=!1;var d;if(this.defaultExpand)d=Object.assign({},this.defaultExpand);else{d={};var f=this;a.treeData.forEach(function(a){d[a[f.idProperty]]=!0})}this.grid._expanded=d}this.tree.addNodes(a.treeData);this.refresh()},getHighlightedOption:function(){},
highlightFirstOption:function(){},highlightLastOption:function(){},clearResultList:function(){this.tree.clear()},onChange:function(a){}});d=d(h,{dropDownClass:f,tree:null,autoComplete:!1,defaultExpand:null,postCreate:function(){this.inherited(arguments);this.tree&&this.setItems(this._getStoreItemsFromTree())},_setTreeAttr:function(a){this.tree=a;this._isCreated&&this.setItems(this._getStoreItemsFromTree());this.dropDown&&(this.dropDown.baseTree=this.tree)},_getStoreItemsFromTree:function(){return l(this.tree.data,
this)},_startSearch:function(a){if(!this.dropDown){var b=this.id+"_popup";this.dropDown=new this.dropDownClass({gridClass:"esriMapsAnalystXSelectableTreeGrid esriMapsAnalystXFilteringSelect_treeGrid",onChange:function(){return this._selectOption.apply(this,arguments)}.bind(this),id:b,dir:this.dir,textDir:this.textDir,tree:new k([],{idProperty:this.idProperty}),idProperty:this.idProperty,labelProperty:this.labelProperty,baseTree:this.tree,hostWidget:this,defaultExpand:this.defaultExpand})}this.inherited(arguments)},
_openResultList:function(){this.inherited(arguments);this.dropDown&&this.dropDown.refresh()},getSelectedItem:function(){var a=this.inherited(arguments);return a&&a.__item}});d.NONE_ID=h.NONE_ID;return d});