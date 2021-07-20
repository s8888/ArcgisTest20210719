// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Evented dojo/_base/array dojo/_base/html dojo/_base/fx dojo/on dojo/keys dojo/sniff dojo/touch dojo/query dojo/dnd/move dijit/_WidgetBase jimu/utils".split(" "),function(r,e,t,g,b,q,f,h,u,v,m,w,x,k){var p=0;return r([x,t],{declaredClass:"jimu.dijit.Popup",baseClass:"jimu-popup",classNames:[],titleLabel:"",content:null,container:null,customZIndex:null,buttons:[],enabledButtons:[],disabledButtons:[],onClose:null,_fixedHeight:!1,autoHeight:!1,isResize:!0,
horizontalWidthRate:0,maxHeight:800,maxWidth:1024,enableMoveable:!0,hasTitle:!0,contentHasNoMargin:!1,hasOverlay:!0,moveToCenter:!0,customPosition:null,hiddenAfterInit:!1,useFocusLogic:!0,constructor:function(){this.buttons=[];this.enabledButtons=[];this.disabledButtons=[];this.pauseKeyHandles=[];this.container=jimuConfig.layoutId},focusLastActiveNode:function(){this.focusedNodeBeforeOpen&&this.useFocusLogic&&this.focusedNodeBeforeOpen.focus()},postCreate:function(){this.focusedNodeBeforeOpen=document.activeElement;
this._preProcessing();this.inherited(arguments);this._initDomNode();this._addStylesByHeightType();this._calcAndSetPosition();b.place(this.domNode,this.container);setTimeout(e.hitch(this,function(){this._calcAndSetPosition(!0,!1);this.initFocusNodes()}),50);this.isResize&&this.own(f(window,"resize",e.hitch(this,function(){this._calcAndSetPosition(!0,!0)})));this.hasOverlay&&(this.overlayNode=b.create("div",{"class":"jimu-overlay"},this.container));this.customZIndex||0===this.customZIndex?(b.setStyle(this.domNode,
"zIndex",this.customZIndex+1),this.overlayNode&&b.setStyle(this.overlayNode,"zIndex",this.customZIndex)):this._increaseZIndex();this.hiddenAfterInit&&this.hide();q.animateProperty({node:this.domNode,properties:{opacity:1},duration:200}).play();b.setAttr(this.domNode,"aria-label",window.jimuNls.common.popup);this.own(f(this.domNode,"keydown",e.hitch(this,function(a){a.keyCode===h.ESCAPE&&(this.closeBtnNode?this.closeBtnNode.focus():(this.close(),this.focusLastActiveNode()));k.preventMapNavigation(a)})))},
initFocusNodes:function(){if(this.useFocusLogic){if("string"===typeof this.content){var a="uniqMsgId_"+k.getUUID();b.setAttr(this.contentContainerNode,"id",a);b.setAttr(this.domNode,"tabindex","0");b.setAttr(this.domNode,"aria-labelledby",a)}this.firstFocusNode=this._getFirstFocusNode();this.lastFocusNode=this._getLastFocusNode();this.firstFocusNode&&(this.own(f(this.firstFocusNode,"keydown",e.hitch(this,function(a){a.shiftKey&&a.keyCode===h.TAB&&(a.preventDefault(),this.firstFocusNode.focus())}))),
this.firstFocusNode.focus());this.lastFocusNode&&this.own(f(this.lastFocusNode,"keydown",e.hitch(this,function(a){a.shiftKey||a.keyCode!==h.TAB||(a.preventDefault(),this.firstFocusNode.focus())})))}},_getFirstFocusNode:function(){var a=this.closeBtnNode;"string"===typeof this.content&&(a=this.domNode);if(!a){var b=[];this.content.domNode?b=k.getFocusNodesInDom(this.content.domNode):1===this.content.nodeType&&(b=k.getFocusNodesInDom(this.content));0<b.length?a=b[0]:this.buttons.length&&(a=this._getFirstBtn())}return a},
_getLastFocusNode:function(){var a=this._getLastBtn();if(!a)if(this.content&&"string"!==typeof this.content){var b;this.content.domNode?b=k.getFocusNodesInDom(this.content.domNode):1===this.content.nodeType&&(b=k.getFocusNodesInDom(this.content));a=0<b.length?b[b.length-1]:this.closeBtnNode}else a=this.closeBtnNode;return a},_getFirstBtn:function(){for(var a=null,d=m(".jimu-btn",this.buttonContainer),c=0;c<=d.length-1;c++)if("none"!==b.getStyle(d[c],"display")){a=d[c];break}return a},_getLastBtn:function(){for(var a=
null,d=m(".jimu-btn",this.buttonContainer),c=d.length-1;0<=c;c--)if("none"!==b.getStyle(d[c],"display")){a=d[c];break}return a},_preProcessing:function(){"number"!==typeof this.width&&(this.width=this.maxWidth);"number"===typeof this.height&&(this._fixedHeight=!0,this.autoHeight=!1);this.autoHeight&&(this.maxHeight=598)},_createTitleNode:function(){this.titleNode=b.create("div",{"class":"title"},this.domNode);this.titleLabeNode=b.create("span",{"class":"title-label jimu-float-leading",innerHTML:k.sanitizeHTML(this.titleLabel)||
"\x26nbsp"},this.titleNode);this.closeBtnNode=b.create("div",{"class":"close-btn jimu-icon jimu-icon-close jimu-float-trailing",tabindex:0,"aria-label":window.jimuNls.common.close,role:"button"},this.titleNode);var a=null,a="ontouchstart"in document?v.press:"click";this.own(f(this.closeBtnNode,a,e.hitch(this,this.close)));this.own(f(this.closeBtnNode,"keydown",e.hitch(this,function(a){a.keyCode!==h.ENTER&&a.keyCode!==h.SPACE||this.close()})))},_initDomNode:function(){for(var a=0;a<=this.classNames.length-
1;a++)b.addClass(this.domNode,this.classNames[a]);this.hasTitle&&this._createTitleNode();this.contentContainerNode=b.create("div",{"class":"content"},this.domNode);this.content&&("string"===typeof this.content?this.contentContainerNode.innerHTML=this.content:this.content.domNode?(this.content.placeAt(this.contentContainerNode),this.content.popup=this):1===this.content.nodeType&&b.place(this.content,this.contentContainerNode));this.buttonContainer=b.create("div",{"class":"button-container"},this.domNode);
0===this.buttons.length&&b.setStyle(this.buttonContainer,"display","none");for(a=0;a<=this.buttons.length-1;a++)this._createButton(this.buttons[a]),this.buttons[a].disable&&this.disableButton(a)},_limitButtonsMaxWidth:function(){var a=this.enabledButtons.length;if(0!==a){var d=b.getContentBox(this.buttonContainer),c=b.getMarginExtents(this.enabledButtons[0]),n=b.getPadBorderExtents(this.enabledButtons[0]),f=0,n=8===u("ie")?n.l+n.r:0,f=(d.w-(c.l+c.r+n)*a)/a;0<f&&(g.forEach(this.enabledButtons,e.hitch(this,
function(a){b.setStyle(a,"maxWidth",f+"px")})),g.forEach(this.disabledButtons,e.hitch(this,function(a){b.setStyle(a,"maxWidth",f+"px")})))}},_moveableNode:function(a,d){this.moveable&&(this.moveable.destroy(),this.moveable=null);var c=b.getMarginBox(this.container);c.l=c.l-a+d;c.w+=2*(a-d);this.moveable=new w.boxConstrainedMoveable(this.domNode,{box:c,handle:this.titleNode||this.contentContainerNode,within:!0});this.own(f(this.moveable,"Moving",e.hitch(this,this.onMoving)));this.own(f(this.moveable,
"MoveStop",e.hitch(this,this.onMoveStop)))},_getHeaderBox:function(){return 0===m("#header").length?{t:0,l:0,w:0,h:0}:b.getMarginBox("header")},_getFooterBox:function(){return 0===m(".footer",this.container).length?{t:0,l:0,w:0,h:0}:b.getMarginBox(m(".footer",this.container)[0])},_calcAndSetPosition:function(a,d){var c=b.getMarginBox(this.domNode);if("string"!==typeof this.container||b.byId(this.container)){var e=b.getContentBox(this.container),f=this._getHeaderBox(),l=this._getFooterBox(),l=e.h-
f.h-l.h-40,g=0,k=0;this.customPosition&&this.customPosition.height?(this.height=this.customPosition.height,k="number"===typeof this.height?this.height+"px":this.height):(this.height=this._fixedHeight?this.height>l?l:this.height:this.autoHeight?(c.h>l?l:c.h)||l-200:l>this.maxHeight?this.maxHeight:l,k=this.height+"px");this.customPosition&&this.customPosition.width?(this.width=this.customPosition.width,g="number"===typeof this.width?this.width+"px":this.width):("number"===typeof this.horizontalWidthRate&&
0<this.horizontalWidthRate?(g=b.getMarginBox(window.document.body).w*this.horizontalWidthRate,this.width=g=g>this.maxWidth?g:this.maxWidth):this.width=this.width||this.maxWidth,g=this.width+"px");var h=c=0;this.customPosition?(c="number"===typeof this.customPosition.left?this.customPosition.left+"px":this.customPosition.left,h="number"===typeof this.customPosition.top?this.customPosition.top+"px":this.customPosition.top):this.moveToCenter&&(h=(l-this.height)/2+f.h+20,h=h<f.h?f.h:h,c=(e.w-this.width)/
2+"px",h+="px");b.setStyle(this.domNode,{width:g,height:this.autoHeight?"auto":k,left:c,top:h});this.enableMoveable&&this._moveableNode(this.width,100);!this.moveToCenter&&a&&"block"===b.getStyle(this.domNode,"display")&&this.emit("popupHasInitedSuccessfully",d)}},setDomNodeStyls:function(a){b.setStyle(this.domNode,a)},setCustomPosition:function(a,d,c,e){this.width=c||this.width||this.maxWidth;this.height=e||this.height||this.maxHeight;c="number"===typeof this.width?this.width+"px":this.width;e="number"===
typeof this.height?this.height+"px":this.height;b.setStyle(this.domNode,{left:"number"===typeof a?a+"px":a,top:"number"===typeof d?d+"px":d,width:c,height:this.autoHeight?"auto":e})},_addStylesByHeightType:function(){this.autoHeight?(b.addClass(this.contentContainerNode,"content-static"),0===this.buttons.length&&b.setStyle(this.contentContainerNode,{marginBottom:"15px"})):(b.addClass(this.contentContainerNode,"content-absolute"),this.hasTitle||b.addClass(this.contentContainerNode,"no-popup-title-content-absolute"),
b.addClass(this.buttonContainer,"button-container-absolute"),0===this.buttons.length&&b.setStyle(this.contentContainerNode,{bottom:"15px"}));this.contentHasNoMargin&&b.addClass(this.contentContainerNode,"content-fill-Popup")},_increaseZIndex:function(){b.setStyle(this.domNode,"zIndex",p+200+1);this.overlayNode&&b.setStyle(this.overlayNode,"zIndex",p+200);p++},setTitleLabel:function(a){this.titleNode.innerHTML=k.stripHTML(a)},onMoving:function(a){b.setStyle(a.node,"opacity",.9)},onMoveStop:function(a){b.setStyle(a.node,
"opacity",1)},show:function(){this.overlayNode&&b.setStyle(this.overlayNode,"display","block");b.setStyle(this.domNode,"display","block")},hide:function(){this.overlayNode&&b.setStyle(this.overlayNode,"display","none");b.setStyle(this.domNode,"display","none")},close:function(){if(!this.onClose||!1!==this.onClose()){var a=this.domNode.parentNode,d=e.clone(this.domNode);b.setStyle(this.domNode,"display","none");this.overlayNode&&b.destroy(this.overlayNode);this.destroy();this.moveable&&this.moveable.destroy();
b.place(d,a);q.animateProperty({node:d,properties:{opacity:0},duration:200,onEnd:function(){b.destroy(d)}}).play();this.focusLastActiveNode();window.currentMsgPopup=null}},addButton:function(a){this._createButton(a)},_createButton:function(a){var d=" ";a.classNames&&0<a.classNames.length&&"function"===typeof a.classNames.join&&(d+=a.classNames.join(" "));var c=b.create("div",{"class":"jimu-btn jimu-popup-action-btn jimu-float-trailing jimu-trailing-margin1 "+d,innerHTML:a.label,tabindex:0,role:"button",
title:a.title||a.label},this.buttonContainer);this.enabledButtons.push(c);d=b.create("div",{"class":"jimu-btn jimu-state-disabled jimu-float-trailing jimu-trailing-margin1 "+d,title:a.title||a.label,innerHTML:a.label,tabindex:0,role:"button","aria-disabled":"true",style:{display:"none"}},this.buttonContainer);this.disabledButtons.push(d);this.own(f(c,"click",e.hitch(this,function(b){if(a.onClick)a.onClick(b);else this.close()})));this.own(f(c,"keydown",e.hitch(this,function(b){if(b.keyCode===h.ENTER||
b.keyCode===h.SPACE)if(a.onClick)a.onClick(b);else this.close()})))},setButtonProps:function(a,d){"number"===typeof a&&isFinite(a)||(d=a,a=0);if(d&&0!==this.enabledButtons.length)for(var c in d)"title"===c?(b.setAttr(this.enabledButtons[a],"title",d[c]),b.setAttr(this.disabledButtons[a],"title",d[c])):"label"===c&&(b.setProp(this.enabledButtons[a],"innerHTML",d[c]),b.setProp(this.disabledButtons[a],"innerHTML",d[c]))},enableButton:function(a){"number"===typeof a&&isFinite(a)&&a<this.enabledButtons.length?
(b.setStyle(this.enabledButtons[a],"display","inline-block"),b.setStyle(this.disabledButtons[a],"display","none")):(g.forEach(this.enabledButtons[a],e.hitch(this,function(a){b.setStyle(a,"display","inline-block")})),g.forEach(this.disabledButtons[a],e.hitch(this,function(a){b.setStyle(a,"display","none")})))},disableButton:function(a){"number"===typeof a&&isFinite(a)&&a<this.disabledButtons.length?(b.setStyle(this.disabledButtons[a],"display","inline-block"),b.setStyle(this.enabledButtons[a],"display",
"none")):(g.forEach(this.disabledButtons,e.hitch(this,function(a){b.setStyle(a,"display","inline-block")})),g.forEach(this.enabledButtons,e.hitch(this,function(a){b.setStyle(a,"display","none")})))},showButton:function(a){this.enableButton(a)},hideButton:function(a){"number"===typeof a&&isFinite(a)&&a<this.disabledButtons.length?(b.setStyle(this.disabledButtons[a],"display","none"),b.setStyle(this.enabledButtons[a],"display","none")):(g.forEach(this.disabledButtons,e.hitch(this,function(a){b.setStyle(a,
"display","none")})),g.forEach(this.enabledButtons,e.hitch(this,function(a){b.setStyle(a,"display","none")})))},resize:function(a){a&&(this.width=a.w,this.height=a.h);this._calcAndSetPosition();this.content&&this.content.domNode&&this.content.resize&&this.content.resize()}})});