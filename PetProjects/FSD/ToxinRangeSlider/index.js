!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i(1),i(2),i(14),i(15)},function(e,t,i){},function(e,t,i){const n=i(3);n.keys().forEach(n)},function(e,t,i){var n={"./android-chrome-192x192.png":4,"./android-chrome-512x512.png":5,"./apple-touch-icon.png":6,"./browserconfig.xml":7,"./favicon-16x16.png":8,"./favicon-32x32.png":9,"./favicon.ico":10,"./mstile-150x150.png":11,"./safari-pinned-tab.svg":12,"./site.webmanifest":13};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=3},function(e,t,i){"use strict";i.r(t),t.default=i.p+"android-chrome-192x192.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"android-chrome-512x512.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"apple-touch-icon.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"browserconfig.xml"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"favicon-16x16.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"favicon-32x32.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"favicon.ico"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"mstile-150x150.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"safari-pinned-tab.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"site.webmanifest"},function(e,t){var i=function(){function e(e){this.initVariables(e),this.addEventListeners()}return e.prototype.initVariables=function(e){this.$selectItems=$(e),this.$buttonAdd=this.$selectItems.find(".js-select-items__button-add"),this.$buttonRemove=this.$selectItems.find(".js-select-items__button-remove"),this.$select=this.$selectItems.find(".js-select-items__options"),this.select=this.$select[0]},e.prototype.addEventListeners=function(){this.$buttonAdd.on("click.buttonAdd",this.handleButtonAddClick.bind(this)),this.$buttonRemove.on("click.buttonRemove",this.handleButtonRemoveClick.bind(this))},e.prototype.handleButtonAddClick=function(){var e=Math.random(),t=parseInt((1e3*e).toString(),10).toString(),i=prompt("Введите новый объект",t);i&&this.$select.append(new Option(i)),this.select.length>1?this.$selectItems.removeClass("select-items_not-using"):this.$selectItems.addClass("select-items_not-using"),this.select.length>0&&(this.$buttonRemove.prop("disabled",!1),this.$buttonRemove.removeClass("select-items__button-remove_disabled"))},e.prototype.handleButtonRemoveClick=function(){this.$select.find("option:selected").remove(),this.select.length>1?this.$selectItems.removeClass("select-items_not-using"):this.$selectItems.addClass("select-items_not-using"),0===this.select.length&&(this.$buttonRemove.prop("disabled",!0),this.$buttonRemove.addClass("select-items__button-remove_disabled"))},e}();$(".js-select-items").each((function(e,t){new i(t)}))},function(e,t){var i=function(){function e(e){this.initVariables(e),this.addEventListeners(),this.updatePanelValues()}return e.prototype.initVariables=function(e){this.$panel=$(e),this.$inputs=this.$panel.find("input"),this.$minValue=this.$panel.find(".js-panel__input-min-value").find(".js-input__field"),this.$maxValue=this.$panel.find(".js-panel__input-max-value").find(".js-input__field"),this.$stepValue=this.$panel.find(".js-panel__input-step-value").find(".js-input__field"),this.$valueFrom=this.$panel.find(".js-panel__input-value-from").find(".js-input__field"),this.$valueTo=this.$panel.find(".js-panel__input-value-to").find(".js-input__field"),this.$indexFrom=this.$panel.find(".js-panel__input-index-from").find(".js-input__field"),this.$indexTo=this.$panel.find(".js-panel__input-index-to").find(".js-input__field"),this.$buttonAdd=this.$panel.find(".js-select-items").find(".js-select-items__button-add"),this.$buttonRemove=this.$panel.find(".js-select-items").find(".js-select-items__button-remove"),this.$select=this.$panel.find(".js-select-items").find(".js-select-items__options"),this.select=this.$select[0],this.$rangesliderRootElement=this.$panel.find(".toxin-rangeslider-here"),this.rangeslider=this.$rangesliderRootElement.data("toxinRangeSlider"),this.$isVertical=this.$panel.find(".js-panel__checkbox-is-vertical").find(".checkbox__input"),this.$isTwoHandles=this.$panel.find(".js-panel__checkbox-is-two-handles").find(".checkbox__input"),this.$isShowTips=this.$panel.find(".js-panel__checkbox-is-tip").find(".checkbox__input")},e.prototype.addEventListeners=function(){var e=this.$valueFrom,t=this.$valueTo,i=this.$indexFrom,n=this.$indexTo;this.rangeslider.update({onHandlePositionChange:function(){this.isFromHandle?(e.val(this.value),this.isUsingItems&&i.val(this.index)):(t.val(this.value),this.isUsingItems&&n.val(this.index))}}),this.$isVertical.on("change.isVertical",this.handleIsVerticalChange.bind(this)),this.$isTwoHandles.on("change.isTwoHandles",this.handleIsTwoHandlesChange.bind(this)),this.$isShowTips.on("change",this.handleIsShowTipsChange.bind(this)),this.$minValue.on("input.minValue",this.handleMinValueInput.bind(this)),this.$maxValue.on("input.maxValue",this.handleMaxValueInput.bind(this)),this.$valueFrom.on("input.valueFrom",this.handleValueFromInput.bind(this)),this.$valueTo.on("input.valueTo",this.handleValueToInput.bind(this)),this.$indexFrom.on("input.indexFrom",this.handleIndexFromInput.bind(this)),this.$indexTo.on("input.indexTo",this.handleIndexToInput.bind(this)),this.$stepValue.on("input.stepValue",this.handleStepValueInput.bind(this)),this.$stepValue.keypress(this.preventMinusTyping),this.$indexFrom.keypress(this.preventMinusTyping),this.$indexTo.keypress(this.preventMinusTyping),this.$inputs.on("focusout.inputs",this.handleInputsFocusout.bind(this)),this.$buttonAdd.on("click.buttonAdd",this.handleButtonAddClick.bind(this)),this.$buttonRemove.on("click.buttonRemove",this.handleButtonRemoveClick.bind(this))},e.prototype.handleInputsFocusout=function(e){var t=$(e.target);t.parent().parent().hasClass("js-panel__input-min-value")&&t.val(this.rangeslider.data.getMinValue()),t.parent().parent().hasClass("js-panel__input-max-value")&&t.val(this.rangeslider.data.getMaxValue()),t.parent().parent().hasClass("js-panel__input-step-value")&&t.val(this.rangeslider.data.stepValue),t.parent().parent().hasClass("js-panel__input-value-from")&&t.val(this.rangeslider.data.getValueFrom()),t.parent().parent().hasClass("js-panel__input-value-to")&&t.val(this.rangeslider.data.getValueTo()),t.parent().parent().hasClass("js-panel__input-index-from")&&t.val(this.rangeslider.data.items.indexFrom),t.parent().parent().hasClass("js-panel__input-index-to")&&t.val(this.rangeslider.data.items.indexTo)},e.prototype.handleStepValueInput=function(e){var t=e.target;t.value.length&&(parseInt(t.value,10)<1&&(t.value="1"),this.isStepValid()||(t.value=this.getRangeLength().toString()),this.rangeslider.update({stepValue:parseInt(t.value,10)}))},e.prototype.handleButtonRemoveClick=function(){var e=this.$select.find("option"),t=this.select.length>1;this.$minValue.prop("disabled",t),this.$maxValue.prop("disabled",t),this.$stepValue.prop("disabled",t);var i=$.map(e,(function(e){return e.value}));this.rangeslider.update({items:{values:i}}),this.updatePanelValues()},e.prototype.handleButtonAddClick=function(){var e=this.$select.find("option"),t=this.select.length>1;this.$minValue.prop("disabled",t),this.$maxValue.prop("disabled",t),this.$stepValue.prop("disabled",t);var i=$.map(e,(function(e){return e.value}));this.rangeslider.update({items:{values:i}}),this.updatePanelValues()},e.prototype.handleIndexFromInput=function(e){var t=e.target;if(t.value.length){var i=parseInt(t.value,10),n=parseInt(this.$indexTo.val(),10);i>n&&(t.value=n.toString()),this.rangeslider.update({items:{indexFrom:parseInt(t.value,10)}}),this.$valueFrom.val(this.rangeslider.data.getValueFrom())}},e.prototype.handleIndexToInput=function(e){var t=e.target;if(t.value.length){var i=this.rangeslider.data.items.values.length-1,n=parseInt(this.$indexFrom.val(),10),a=parseInt(t.value,10);a<n&&(t.value=n.toString()),a>i&&(t.value=i.toString()),this.rangeslider.update({items:{indexTo:parseInt(t.value,10)}}),this.$valueTo.val(this.rangeslider.data.getValueTo())}},e.prototype.handleValueFromInput=function(e){var t=e.target;if(this.rangeslider.data.IsHaveItems()){var i=this.rangeslider.data.findIndexByItem(t.value);if(-1===i)return;this.rangeslider.update({items:{indexFrom:i}}),this.$indexFrom.val(i)}else{if(Number.isNaN(Number(t.value)))return;this.rangeslider.update({valueFrom:Number(t.value)})}},e.prototype.handleValueToInput=function(e){var t=e.target;if(this.rangeslider.data.IsHaveItems()){var i=this.rangeslider.data.findIndexByItem(t.value);if(-1===i)return;this.rangeslider.update({items:{indexTo:i}}),this.$indexTo.val(i)}else{if(Number.isNaN(Number(t.value)))return;var n=Number(t.value);if(this.rangeslider.data.isTwoHandles){var a=Number(this.$valueFrom.val());n<this.$valueFrom.val()&&(n=a)}this.rangeslider.update({valueTo:n})}},e.prototype.handleMinValueInput=function(e){var t=e.target,i=parseInt(t.value,10);if(!Number.isNaN(i)){t.value=i.toString();var n=parseInt(this.$maxValue.val(),10);i>=n&&(t.value=(n-1).toString(),i=parseInt(t.value,10));var a=parseInt(this.$valueTo.val(),10),s=parseInt(this.$valueFrom.val(),10);a<i&&this.$valueTo.val(i),this.rangeslider.data.isTwoHandles&&s<i&&this.$valueFrom.val(t.value),this.isStepValid()||this.$stepValue.val(this.getRangeLength().toString()),this.rangeslider.update({minValue:t.value,valueFrom:this.$valueFrom.val(),valueTo:this.$valueTo.val()})}},e.prototype.handleMaxValueInput=function(e){var t=e.target,i=parseInt(t.value,10);if(!Number.isNaN(i)){t.value=i.toString();var n=parseInt(this.$minValue.val(),10);i<=n&&(t.value=(n+1).toString(),i=parseInt(t.value,10));var a=parseInt(this.$valueTo.val(),10),s=parseInt(this.$valueFrom.val(),10);a>i&&this.$valueTo.val(i),this.rangeslider.data.isTwoHandles&&s>i&&this.$valueFrom.val(n),this.isStepValid()||this.$stepValue.val(this.getRangeLength().toString()),this.rangeslider.update({maxValue:t.value,valueFrom:this.$valueFrom.val(),valueTo:this.$valueTo.val()})}},e.prototype.handleIsShowTipsChange=function(e){this.rangeslider.update({isTip:e.target.checked})},e.prototype.updatePanelValues=function(){this.$minValue.val(this.rangeslider.data.getMinValue()),this.$maxValue.val(this.rangeslider.data.getMaxValue()),this.rangeslider.data.isTwoHandles&&this.$valueFrom.val(this.rangeslider.data.getValueFrom()),this.$valueTo.val(this.rangeslider.data.getValueTo()),this.select.length>1?(this.rangeslider.data.isTwoHandles&&(this.$indexFrom.prop("disabled",!1),this.$indexFrom.val(this.rangeslider.data.items.indexFrom)),this.$indexTo.prop("disabled",!1),this.$indexTo.val(this.rangeslider.data.items.indexTo)):(this.$indexFrom.prop("disabled",!0),this.$indexTo.prop("disabled",!0)),this.$stepValue.val(this.rangeslider.data.stepValue)},e.prototype.getRangeLength=function(){return this.$maxValue.val()-this.$minValue.val()},e.prototype.isStepValid=function(){return this.$stepValue.val()<this.getRangeLength()},e.prototype.preventMinusTyping=function(e){"-"===e.key&&e.preventDefault()},e.prototype.handleIsVerticalChange=function(e){var t=e.target;t.checked?this.$panel.addClass("panel_is-vertical"):this.$panel.removeClass("panel_is-vertical"),this.rangeslider.update({isVertical:t.checked})},e.prototype.handleIsTwoHandlesChange=function(e){var t=e.target;if(this.rangeslider.update({isTwoHandles:t.checked}),t.checked){if(this.$valueFrom.prop("disabled",!1),this.rangeslider.data.IsHaveItems()&&this.$indexFrom.prop("disabled",!1),!this.rangeslider.data.IsHaveItems()){var i=parseInt(this.$minValue.val(),10),n=parseInt(this.$maxValue.val(),10),a=parseInt(this.$valueFrom.val(),10);Number.isNaN(Number(a))&&(a=i);var s=parseInt(this.$valueTo.val(),10);(a<i||a>s||a>n)&&(a=i),this.rangeslider.update({valueFrom:a})}}else this.$valueFrom.prop("disabled",!0),this.rangeslider.data.IsHaveItems()&&this.$indexFrom.prop("disabled",!0);this.updatePanelValues()},e}();$(".panel").each((function(e,t){new i(t)}))}]);