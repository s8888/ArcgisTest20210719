// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on esri/SpatialReference jimu/BaseWidget dijit/_TemplatedMixin ./utils libs/Sortable".split(" "),function(k,l,d,e,g,m,h,n,p,c,q){return l([n,p,k],{baseClass:"dojoDndSource dojoDndTarget dojoDndContainer bookmarker-nodes",templateString:"\x3cdiv\x3e\x3c/div\x3e",nls:null,postCreate:function(){this.inherited(arguments);this.drawerHandle=e.create("div",{"class":"drawer-handle"},this.domNode);this.bookMarkerContainer=
e.create("div",{"class":"webmap"},this.domNode)},startup:function(){this.inherited(arguments);this.config.syncMode&&(!1===this.config.syncMode.webmap&&!1===this.config.syncMode.custom?e.addClass(this.domNode,"hide"):e.removeClass(this.domNode,"hide"));this.sortableBookMarkerNodes=q.create(this.bookMarkerContainer,{sort:!1,disabled:!0,animation:100})},refresh:function(){c.empty(this.bookmarks);this.bookmarks=[];this.config.syncMode&&!0===this.config.syncMode.webmap&&(this.bookmarks=c.readBookmarksInWebmap(this.map));
var a=d.clone(this.config.bookmarks2D);g.forEach(a,function(b){b&&!0===this.config.syncMode.custom&&this.bookmarks.push(b)},this);c.updateBookmarks(this.bookmarks);this.displayBookmarks(this.bookmarks)},_onBookmarkClick:function(a){require(["esri/geometry/Extent"],d.hitch(this,function(b){if(!1!==a.isSaveExtent){var f=a.extent;f.spatialReference?new h(f.spatialReference):new h({wkid:4326});this.map.setExtent(new b(f))}c.layerInfosRestoreState(a.isSaveLayers,a.layerOptions)}))},filter:function(a){c.filter(a,
this.bookmarks)},displayBookmarks:function(a){c.empty(a,this.bookMarkerContainer);g.forEach(a,function(b){if(b){var a={editBtn:!1,changeImgBtn:!0,layerInfosIcon:c.isWithLayerInfos(b)},a=c.createBookMarkNode(b,this.nls,this.folderUrl,a,{editBtn:!1,deleteBtn:!1,renameBtn:!1,changeImgBtn:!1});b.itemNode=a;this.own(m(a,"thumbnail-click",d.hitch(this,d.partial(this._onBookmarkClick,b))))}},this);a.forEach(d.hitch(this,function(a){a&&a.itemNode&&a.itemNode.domNode&&e.place(a.itemNode.domNode,this.bookMarkerContainer,
"last")}))}})});