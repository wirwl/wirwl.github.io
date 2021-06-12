!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t,s){
/*!
 * bem-cn v3.0.1
 * Friendly BEM class names generator, greate for React
 * @author Alexander Burtsev, https://github.com/albburtsev
 */
e.exports=function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(1);t.ERROR_BLOCK_NAME_TYPE="Block name should be a string",t.ERROR_BLOCK_NAME_EMPTY="Block name should be non-empty";var n={ns:"",el:"__",mod:"_",modValue:"_"},a=function(e){return"string"==typeof e},o=function(e){return"string"!=typeof e},l=function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];var a=i.assign({},t);return a.mixes=a.mixes.concat(s),d(a,e)},r=function(e,t,s){for(var n=[],a=3;a<arguments.length;a++)n[a-3]=arguments[a];var o=i.assign({},t),l=i.assign({},o.states||{});return l[s]=i.assign.apply(void 0,[{},l[s]||{}].concat(n)),o.states=l,d(o,e)},h=function(e,t,s,i){return String.prototype.split.call(u(e,t),s,i)},u=function(e,t){var s=t.name,i=t.mods,n=t.mixes,a=t.states,o=[s];if(i&&(o=o.concat(Object.keys(i).filter((function(e){return i[e]})).map((function(t){var n=i[t];return!0===n?s+e.mod+t:s+e.mod+t+e.modValue+n})))),a&&Object.keys(a).forEach((function(e){var t=a[e];o=o.concat(Object.keys(t).filter((function(e){return t[e]})).map((function(t){return e+t})))})),e.ns&&(o=o.map((function(t){return e.ns+t}))),n&&(o=o.concat(function(e){return void 0===e&&(e=[]),e.map((function(e){return Array.isArray(e)?e.join(" "):"object"==typeof e&&null!==e||"function"==typeof e?e.toString():"string"==typeof e?e:""})).filter((function(e){return!!e}))}(n))),e.classMap){var l=e.classMap;o=o.map((function(e){return l[e]||e}))}return o.join(" ")},d=function(e,t){return{mix:l.bind(null,t,e),split:h.bind(null,t,e),is:r.bind(null,t,e,"is-"),has:r.bind(null,t,e,"has-"),state:r.bind(null,t,e,"is-"),toString:u.bind(null,t,e)}},m=function(e,t){var s={name:e,mods:{},mixes:[],states:{"is-":{},"has-":{}}},n=function(e,t){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];if(!s.length)return u(e,t);var l=i.assign({},t),r=s.filter(a).reduce((function(t,s){return t+e.el+s}),"");r&&(l.name=l.name+r);var h=s.filter(o).reduce((function(e,t){return i.assign(e,t)}),{});return l.mods=i.assign({},l.mods,h),d(l,e)}.bind(null,t,s);return n.mix=l.bind(null,t,s),n.split=h.bind(null,t,s),n.is=r.bind(null,t,s,"is-"),n.has=r.bind(null,t,s,"has-"),n.state=r.bind(null,t,s,"is-"),n.toString=u.bind(null,t,s),n};t.setup=function(e){return void 0===e&&(e={}),function(s){if("string"!=typeof s)throw new Error(t.ERROR_BLOCK_NAME_TYPE);var a=s.trim();if(!a)throw new Error(t.ERROR_BLOCK_NAME_EMPTY);return m(a,i.assign({},n,e))}},t.block=t.setup(),t.default=t.block},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assign=function(e){for(var t=[],s=1;s<arguments.length;s++)t[s-1]=arguments[s];for(var i=0;i<t.length;i++){var n=t[i];for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a])}return e}}])},function(e,t,s){s(3),e.exports=s(2)},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=class{constructor(e,t){this.model=e,this.view=t,this.bindThis(),this.init()}bindThis(){this.notifyModel=this.notifyModel.bind(this)}init(){this.model.setState(this.view.getDataOptions()),this.view.addObservers(this.notifyModel),this.view.firstDrawSlider(this.getState())}notifyModel(e){this.model.onHandlePositionChange(e),this.view.drawSlider(this.getState())}getState(){return this.model.getState()}setState(e={}){this.model.setState(e),this.view.drawSlider(this.getState())}getIsVertical(){return this.model.getIsVertical()}setIsVertical(e){this.model.setIsVertical(e)}getIsTwoHandles(){return this.model.getIsTwoHandles()}setIsTwoHandles(e){this.model.setIsTwoHandles(e)}getIsTip(){return this.model.getIsTip()}setIsTip(e){this.model.setIsTip(e)}getMinValue(){return this.model.getMinValue()}setMinValue(e){this.model.setMinValue(e)}getMaxValue(){return this.model.getMaxValue()}setMaxValue(e){this.model.setMaxValue(e)}getStepValue(){return this.model.getStepValue()}setStepValue(e){this.model.setStepValue(e)}getValueFrom(){return this.model.getValueFrom()}setValueFrom(e){this.model.setValueFrom(e)}getValueTo(){return this.model.getValueTo()}setValueTo(e){this.model.setValueTo(e)}getItems(){return this.model.getItems()}setItems(e){this.model.setItems(e)}getItemsValues(){return this.model.getItemsValues()}setItemsValues(e){this.model.setItemsValues(e)}getIndexFrom(){return this.model.getIndexFrom()}setIndexFrom(e){this.model.setIndexFrom(e)}getIndexTo(){return this.model.getIndexTo()}setIndexTo(e){this.model.setIndexTo(e)}isUsingItems(){return this.model.isUsingItems()}};class n{constructor(e){this._isVertical=!1,this.initSubView(e)}initSubView({domEntity:e,$parentElement:t}){this.$el=$(e),this.$parentElement=t,this.appendToDomTree()}getParentElementWidth(){return parseFloat(this.$parentElement.css("width"))}getParentElementHeight(){return parseFloat(this.$parentElement.css("height"))}isVertical(){return this._isVertical}setVertical(e){this._isVertical=e,this.$el.removeAttr("style")}getX(){return parseFloat(this.$el.css("left"))}setX(e){const t=e/this.getParentElementWidth()*100;this.$el.css("left",t+"%")}setWidth(e){const t=e/this.getParentElementWidth()*100;this.$el.css("width",t+"%")}getY(){return parseFloat(this.$el.css("top"))}setY(e){this.$el.css("top",e/this.getParentElementHeight()*100+"%")}getOffsetTop(){var e;return(null===(e=this.$el.offset())||void 0===e?void 0:e.top)||0}getOffsetLeft(){var e;return(null===(e=this.$el.offset())||void 0===e?void 0:e.left)||0}getOffset(){return this.isVertical()?this.getOffsetTop():this.getOffsetLeft()}getPos(){return this.isVertical()?this.getY():this.getX()}setPos(e){this.isVertical()?this.setY(e):this.setX(e)}getWidth(){return parseFloat(this.$el.css("width"))}getHeight(){return parseFloat(this.$el.css("height"))}setHeight(e){this.$el.css("height",e/this.getParentElementHeight()*100+"%")}getSize(){return this.isVertical()?this.getHeight():this.getWidth()}setSize(e){this.isVertical()?this.setHeight(e):this.setWidth(e)}appendToDomTree(){this.$parentElement.append(this.$el)}removeFromDomTree(){this.$el.off(),this.$el.remove()}}class a extends n{setText(e){this.$el.text(e)}getText(){return this.$el.text()}}var o=class{constructor(){this.observers=[]}addObserver(e){this.observers.push(e)}detach(e){this.observers=this.observers.filter(t=>t!==e)}notify(e){this.observers.forEach(t=>t(e))}};class l extends n{constructor(e){super(e),this.notifier=new o,this.bindThis(),this.addEventListeners()}bindThis(){this.onMouseDownByLine=this.onMouseDownByLine.bind(this)}addEventListeners(){this.$el.on("mousedown.line",this.onMouseDownByLine)}draw(e,t){e&&this.setPos(e),t&&this.setSize(t)}onMouseDownByLine(e){const t=this.isVertical()?e.offsetY:e.offsetX;t&&this.notifier.notify({value:t,event:e})}}class r extends n{constructor(e){super(e),this.bindThis(),this.init(),this.addEventListeners()}bindThis(){this.onMouseDownByHandle=this.onMouseDownByHandle.bind(this)}init(){this.notifier=new o}addEventListeners(){this.$el.on("mousedown.handle",e=>this.onMouseDownByHandle(e))}setMoving(e){e?this.$el.addClass("rangeslider__handle_isMoving"):this.$el.removeClass("rangeslider__handle_isMoving")}is(e){return this.$el.is(e.$el)}onMouseDownByHandle(e){this.setMoving(!0);const t=this.isVertical()?e.clientY:e.clientX;if(!t)return;const s=t-this.getOffset();this.$parentElement.on("mousemove.rangeslider",e=>this.onMouseMoveHandle(e,s));const i=$(document);i.on("mousemove.document",e=>this.onMouseMoveHandle(e,s)),this.$parentElement.on("mouseup.handle",e=>this.onMouseUp(e,this)),i.on("mouseup.document",e=>this.onMouseUp(e,this))}onMouseUp(e,t){t.setMoving(!1),this.$parentElement.off("mousemove.rangeslider"),t.$el.off("mouseup.handle"),$(document).off("mousemove.document"),$(document).off("mouseup.document")}onMouseMoveHandle(e,t){e.preventDefault();const s=this.isVertical()?e.clientY:e.clientX;if(!s)return;const i=s-t;this.notifier.notify({value:i,handle:this})}moveHandle(e){this.setPos(e)}}var h=s(0);const u=s.n(h)()("rangeslider"),d={rootElement:`<div class='${u()}'></div>`,tipMin:`<div class='${u("tip-min")}'>00</div>`,tipMax:`<div class='${u("tip-max")}'>99</div>`,tipFrom:`<div class='${u("tip")} ${u("tip-from")}'>23</div>`,tipTo:`<div class='${u("tip")} ${u("tip-to")}'>456</div>`,lineMain:`<div class='${u("line")}'></div>`,lineSelected:`<div class='${u("line-selected")}'></div>`,handleFrom:`<div class='${u("handle")} ${u("handle-from")}'>`,handleTo:`<div class='${u("handle")} ${u("handle-to")}'>`},m="rangeslider_one-handle",v="rangeslider_is-vertical";var c={isVertical:!1,isTwoHandles:!0,isTip:!0,minValue:0,maxValue:1234,stepValue:1,valueFrom:0,valueTo:1234,items:{indexFrom:0,indexTo:0,values:[]}};const f=(e,t)=>{const{items:s}=t,i=s&&s.values;return(null==i?void 0:i.length)>0&&(e.items.values=[]),$.extend(!0,e,t),e},V=(e,t)=>!(!e||!t)&&(e.length===t.length&&e.every((e,s)=>e===t[s])),g=(e,t,s)=>{const{items:i,minValue:n,maxValue:a}=s,o=null==i?void 0:i.values;let l;if(i&&o&&o.length>1){const s=t/(o.length-1),i=o.indexOf(e);l=-1===i?0:i*s}else{const s=Number(a)-Number(n);l=t*((Number(e)-Number(n))/s)}return l};var p=class{constructor(e){this.controls=[],this.setTwoHandles=e=>{this.$rangeslider.find(".rangeslider__line-selected").removeAttr("style"),e?this.$rangeslider.removeClass(m):this.$rangeslider.addClass(m)},this.setVertical=e=>{e?this.$rangeslider.addClass(v):this.$rangeslider.removeClass(v),this.controls.forEach(t=>t.setVertical(e))},this.bindThis(),this.init(e)}init(e){this.$el=e,this.$el.html(d.rootElement),this.notifier=new o,this.state=$.extend(!0,{},c),this.$rangeslider=e.find(".rangeslider"),this.initSubViews(),this.addControls([this.tipMinView,this.tipFromView,this.tipToView,this.tipMaxView,this.handleFromView,this.handleToView,this.lineView,this.lineSelectedView])}addControls(e){this.controls=e}initSubView(e,t,s=this.$rangeslider){return new e({domEntity:t,$parentElement:s})}initSubViews(){const{lineMain:e,lineSelected:t,tipMin:s,tipMax:i,tipFrom:n,tipTo:o,handleFrom:h,handleTo:u}=d,{initSubView:m}=this;this.lineView=m(l,e),this.lineSelectedView=m(l,t),this.tipMinView=m(a,s),this.tipMaxView=m(a,i),this.handleFromView=m(r,h),this.offsetFrom=this.handleFromView.getWidth()/2,this.tipFromView=m(a,n,this.handleFromView.$el),this.handleToView=m(r,u),this.offsetTo=this.handleToView.getWidth()/2,this.tipToView=m(a,o,this.handleToView.$el)}bindThis(){this.receiveDataAfterUserInput=this.receiveDataAfterUserInput.bind(this),this.initSubView=this.initSubView.bind(this)}addObservers(e){this.notifier.addObserver(e),this.handleFromView.notifier.addObserver(this.receiveDataAfterUserInput),this.handleToView.notifier.addObserver(this.receiveDataAfterUserInput),this.lineView.notifier.addObserver(this.receiveDataAfterUserInput)}receiveDataAfterUserInput({value:e,handle:t,event:s}){const i=void 0===t,n=void 0===s,a=this.lineView.getSize()-this.offsetFrom-this.offsetTo,o=t||this.getNearestHandle(e),l=o.is(this.handleFromView);n&&(e-=this.lineView.getOffset()),i&&(e=l?e-this.offsetFrom:e-this.handleToView.getSize()+this.offsetTo);const r=((e,t,s)=>{let i;const{items:n,maxValue:a,minValue:o}=s,l=null==n?void 0:n.values;let r=-1;if(n&&l&&l.length>1){const s=t/(n.values.length-1);r=Math.round(e/s),i=l[r]}else{const s=e/t;i=Math.round(Number(o)+s*(Number(a)-Number(o)))}return i})(e,a,this.state);if(r&&(this.notifier.notify({isFromHandle:l,relValue:r}),i)){const e=s;o.$el.trigger(e,"mousedown.handle")}}getNearestHandle(e){if(this.state.isTwoHandles){if(e<this.handleFromView.getPos())return this.handleFromView;if(e>this.handleToView.getPos())return this.handleToView;const t=this.handleToView.getPos()-this.handleFromView.getPos()-this.handleFromView.getSize();return e<this.handleFromView.getPos()+this.handleFromView.getSize()+t/2?this.handleFromView:this.handleToView}return this.handleToView}getDataOptions(){return this.$el.data("options")}firstDrawSlider(e){this.drawSlider(e,!0)}drawSlider(e,t=!1){const s=$.extend(!0,{},this.state);f(this.state,e);let i=t;i=this.changeSliderOrientation(s,i),i=this.appendHandleFromToDOMTree(s,i),this.appendTipsToDOMTree(s,i),this.drawTips(s,i),this.drawHandles(s,i),this.drawLineSelected()}changeSliderOrientation(e,t){const{isVertical:s}=e,{isVertical:i}=this.state;let n=t;return i!==s&&(this.setVertical(i),n=!0),n}appendHandleFromToDOMTree(e,t){const{isTwoHandles:s}=e,{isTwoHandles:i,valueFrom:n}=this.state;let a=t;if(t||i!==s){if(this.setTwoHandles(i),i){this.$rangeslider.find(".rangeslider__handle-from").length||(this.handleFromView.appendToDomTree(),this.handleFromView.$el.on("mousedown.handleFrom",e=>this.handleFromView.onMouseDownByHandle(e)),this.tipFromView.setText(n))}else this.handleFromView.removeFromDomTree();a=!0}return a}appendTipsToDOMTree(e,t){const{isTip:s}=e,{isTip:i,isTwoHandles:n}=this.state;(t||i!==s)&&(i?(n&&this.tipFromView.appendToDomTree(),this.tipToView.appendToDomTree(),this.tipMinView.appendToDomTree(),this.tipMaxView.appendToDomTree()):(n&&this.tipFromView.removeFromDomTree(),this.tipToView.removeFromDomTree(),this.tipMinView.removeFromDomTree(),this.tipMaxView.removeFromDomTree()))}drawTips(e,t){var s,i;const{minValue:n,maxValue:a}=e,{minValue:o,maxValue:l}=this.state,r=n!==o,h=a!==l,u=null===(s=e.items)||void 0===s?void 0:s.values,d=null===(i=this.state.items)||void 0===i?void 0:i.values;(t||r)&&this.tipMinView.setText(o),(t||h)&&this.tipMaxView.setText(l);const m=!V(u,d);if((t||m)&&d){const e=d.length;e>1&&(this.tipMinView.setText(d[0]),this.tipMaxView.setText(d[e-1]))}}drawHandles(e,t){var s,i,n,a,o,l;const{minValue:r,maxValue:h,valueFrom:u,valueTo:d}=e,m=null===(s=e.items)||void 0===s?void 0:s.indexFrom,v=null===(i=e.items)||void 0===i?void 0:i.indexTo,c=null===(n=e.items)||void 0===n?void 0:n.values,{minValue:f,maxValue:p,valueFrom:T,valueTo:w,isTwoHandles:x}=this.state,b=null===(a=this.state.items)||void 0===a?void 0:a.indexFrom,F=null===(o=this.state.items)||void 0===o?void 0:o.indexTo,M=null===(l=this.state.items)||void 0===l?void 0:l.values,$=(null==M?void 0:M.length)>1,S=r!==f,y=h!==p,I=u!==T,H=d!==w,O=b!==m,_=F!==v,N=!V(c,M);if(x&&(t||I||S||y||N)){const e=this.lineView.getSize()-this.offsetFrom-this.offsetTo,t=g(T,e,this.state);this.handleFromView.moveHandle(t),this.tipFromView.setText(T)}if(t||H||S||y||N){const e=this.lineView.getSize()-this.offsetFrom-this.offsetTo,t=g(w,e,this.state);this.handleToView.moveHandle(t),this.tipToView.setText(w)}if($){const e=this.lineView.getSize()-this.offsetFrom-this.offsetTo;if(x&&(t||O)){const t=g(T,e,this.state);this.handleFromView.moveHandle(t),this.tipFromView.setText(T)}if(t||_){const t=g(w,e,this.state);this.handleToView.moveHandle(t),this.tipToView.setText(w)}}}drawLineSelected(){const{isTwoHandles:e}=this.state,t=e?this.handleFromView.getPos()+this.offsetFrom:0,s=e?this.handleToView.getPos()-this.handleFromView.getPos()+this.handleToView.getSize()-this.offsetFrom-this.offsetTo+1:this.handleToView.getPos()+this.handleToView.getSize()-this.offsetTo+1;this.lineSelectedView.draw(t,s)}};class T{constructor(e){this.state=$.extend(!0,{},T.defaults),f(this.state,e||{}),this.validate()}validateIsStepValueDefined(){const{stepValue:e,maxValue:t,minValue:s}=this.state,i=e>1,n=Number(t)-Number(s);if(e<1&&(this.state.stepValue=1),this.state.stepValue>n&&(this.state.stepValue=n),i){const{valueFrom:i,valueTo:n}=this.state,a=Number(t)-Number(s),o=Math.ceil(a/e),l=a%e,r=l>0,h=t=>{const i=Number(t)-Number(s),n=Math.trunc(i/e),a=r&&n>=o-1?l:e,h=a/2,u=Number(s)+n*e;return t<=u+h?u:u+a};this.state.valueFrom=h(Number(i)),this.state.valueTo=h(Number(n))}}validateItemsValues(){const{items:e,isTwoHandles:t}=this.state,s=null==e?void 0:e.indexFrom,i=null==e?void 0:e.indexTo,n=null==e?void 0:e.values;[this.state.minValue]=n,this.state.maxValue=n[n.length-1],this.state.valueFrom=n[s],this.state.valueTo=n[i],void 0===s&&(this.state.items.indexFrom=0),void 0===i&&(this.state.items.indexTo=n.length-1),i>n.length-1&&(this.state.items.indexTo=n.length-1),t&&(s>i&&(this.state.valueFrom=this.state.valueTo,this.state.items.indexFrom=i),s<0&&(this.state.items.indexFrom=0))}applyDefaultValuesForUndefinedValues(){const{items:e,stepValue:t,isTwoHandles:s,isVertical:i,isTip:n,minValue:a,maxValue:o,valueFrom:l,valueTo:r}=this.state;"boolean"!=typeof i&&(this.state.isVertical=T.defaults.isVertical),"boolean"!=typeof s&&(this.state.isTwoHandles=T.defaults.isTwoHandles),"boolean"!=typeof n&&(this.state.isTip=T.defaults.isTip),Number.isNaN(a)&&(this.state.minValue=Number(T.defaults.minValue)),Number.isNaN(o)&&(this.state.maxValue=Number(T.defaults.maxValue)),Number.isNaN(l)&&(this.state.valueFrom=Number(T.defaults.valueFrom)),Number.isNaN(r)&&(this.state.valueTo=Number(T.defaults.valueTo)),Number.isNaN(t)&&(this.state.stepValue=T.defaults.stepValue),"object"!=typeof e&&(this.state.items=T.defaults.items)}validateMinAndMaxValues(){var e,t;const{items:s}=this.state;let{valueFrom:i,valueTo:n}=this.state;const a=s&&s.values.length>1;let o=Number(a?s.values[(null===(e=s.values)||void 0===e?void 0:e.length)-1]:this.state.maxValue),l=Number(a?s.values[0]:this.state.minValue);l===o&&(this.state.valueFrom=l,i=this.state.valueFrom,this.state.maxValue=l+1,o=Number(a?s.values[(null===(t=s.values)||void 0===t?void 0:t.length)-1]:this.state.maxValue),this.state.valueTo=o,n=o),o<l&&(this.state.minValue=o,this.state.maxValue=l,l=o,o=l),i<l&&(this.state.valueFrom=l),i>o&&(this.state.valueFrom=o),n>o&&(this.state.valueTo=o),n<l&&(this.state.valueTo=this.getIsTwoHandles()?i:l)}validateHandlesValue(){const{isTwoHandles:e,minValue:t,maxValue:s}=this.state;let{valueFrom:i,valueTo:n}=this.state;e?(i>n&&(this.state.valueFrom=n,this.state.valueTo=i,i=this.state.valueFrom,n=this.state.valueTo),n<i&&(this.state.valueTo=i),i<t&&(this.state.valueFrom=t)):n<t&&(this.state.valueTo=t),n>s&&(this.state.valueTo=s)}validate(){this.applyDefaultValuesForUndefinedValues(),this.isUsingItems()?this.validateItemsValues():(this.validateMinAndMaxValues(),this.validateHandlesValue(),this.validateIsStepValueDefined())}getIndex(e){const{items:{values:t}}=this.state;let s=-1;if(this.isUsingItems())for(let i=0;i<t.length;i+=1)if(e.toString()===t[i].toString()){s=i;break}return s}onHandlePositionChange(e){var t;const{isFromHandle:s,relValue:i}=e;s?this.setValueFrom(i):this.setValueTo(i);const n=s?this.getValueFrom():this.getValueTo();null===(t=this.state.onHandlePositionChange)||void 0===t||t.call(Object.assign({},this.state),{isFromHandle:s,relValue:n})}getState(){return this.state}setState(e){e&&(f(this.state,e),this.validate())}getIsVertical(){return this.state.isVertical}setIsVertical(e){this.state.isVertical=e}getIsTwoHandles(){return this.state.isTwoHandles}setIsTwoHandles(e){this.state.isTwoHandles=e}getIsTip(){return this.state.isTip}setIsTip(e){this.state.isTip=e}getMinValue(){return this.state.minValue}setMinValue(e){if(this.isUsingItems()){const t=this.getIndex(e);-1!==t&&(this.state.minValue=this.state.items.values[t])}else this.state.minValue=e;this.validate()}getMaxValue(){return this.state.maxValue}setMaxValue(e){if(this.isUsingItems()){const t=this.getIndex(e);-1!==t&&(this.state.maxValue=this.state.items.values[t])}else this.state.maxValue=e;this.validate()}getStepValue(){return this.state.stepValue}setStepValue(e){this.state.stepValue=e,this.validate()}getValueFrom(){return this.state.valueFrom}setValueFrom(e){if(this.isUsingItems()){const t=this.getIndex(e);-1!==t&&(this.state.valueFrom=this.state.items.values[t],this.state.items.indexFrom=t)}else this.state.valueFrom=e;this.validate()}getValueTo(){return this.state.valueTo}setValueTo(e){if(this.isUsingItems()){const t=this.getIndex(e);-1!==t&&(this.state.valueTo=this.state.items.values[t],this.state.items.indexTo=t)}else this.state.valueTo=e;this.validate()}getItems(){return this.state.items}setItems(e){this.state.items=Object.assign({},e),this.validate()}getItemsValues(){var e;return null===(e=this.state.items)||void 0===e?void 0:e.values}setItemsValues(e){this.state.items.values=e,this.validate()}getIndexFrom(){var e;return null===(e=this.state.items)||void 0===e?void 0:e.indexFrom}setIndexFrom(e){this.state.items&&(this.state.items.indexFrom=e,this.isUsingItems()&&(this.state.valueFrom=this.state.items.values[e]),this.validate())}getIndexTo(){var e;return null===(e=this.state.items)||void 0===e?void 0:e.indexTo}setIndexTo(e){this.state.items&&(this.state.items.indexTo=e,this.isUsingItems()&&(this.state.valueTo=this.state.items.values[e]),this.validate())}isUsingItems(){var e,t;return(null===(t=null===(e=this.state.items)||void 0===e?void 0:e.values)||void 0===t?void 0:t.length)>1}}T.defaults=$.extend(!0,{},c);var w=T;$.fn.toxinRangeSlider=function(e){return this.each((function(){$.data(this,"toxinRangeSlider")||$.data(this,"toxinRangeSlider",new i(new w(e),new p($(this))))})),this},$.fn.toxinRangeSlider.options=Object.assign({},w.defaults);$(".toxin-rangeslider-here").each((function(){$(this).toxinRangeSlider()}))}]);