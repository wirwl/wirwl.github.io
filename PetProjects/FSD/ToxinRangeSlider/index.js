!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(14),n(15)},function(e,t,n){},function(e,t,n){const i=n(3);i.keys().forEach(i)},function(e,t,n){var i={"./android-chrome-192x192.png":4,"./android-chrome-512x512.png":5,"./apple-touch-icon.png":6,"./browserconfig.xml":7,"./favicon-16x16.png":8,"./favicon-32x32.png":9,"./favicon.ico":10,"./mstile-150x150.png":11,"./safari-pinned-tab.svg":12,"./site.webmanifest":13};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id=3},function(e,t,n){"use strict";n.r(t),t.default=n.p+"android-chrome-192x192.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"android-chrome-512x512.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"apple-touch-icon.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"browserconfig.xml"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"favicon-16x16.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"favicon-32x32.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"favicon.ico"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"mstile-150x150.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"safari-pinned-tab.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"site.webmanifest"},function(e,t){$(document).ready((function(){$(".js-select-items").each((function(){var e=$(this),t=e.find(".js-select-items__button-add"),n=e.find(".js-select-items__button-remove"),i=e.find(".js-select-items__options"),a=i[0];t.click((function(){var t=Math.random(),s=prompt("Введите новый объект",(~~(1e3*t)).toString());s&&i.append(new Option(s)),a.length>1?e.removeClass("select-items_not-using"):e.addClass("select-items_not-using"),a.length>0&&(n.prop("disabled",!1),n.removeClass("select-items__button-remove_disabled"))})),n.click((function(){i.find("option:selected").remove(),a.length>1?e.removeClass("select-items_not-using"):e.addClass("select-items_not-using"),0==a.length&&(n.prop("disabled",!0),n.addClass("select-items__button-remove_disabled"))}))}))}))},function(e,t){$(document).ready((function(){$(".panel").each((function(e){var t=$(this),n=t.find(".js-panel__input-min-value").find(".js-input__field"),i=t.find(".js-panel__input-max-value").find(".js-input__field"),a=t.find(".js-panel__input-step-value").find(".js-input__field"),s=t.find(".js-panel__input-value-from").find(".js-input__field"),o=t.find(".js-panel__input-value-to").find(".js-input__field"),u=t.find(".js-panel__input-index-from").find(".js-input__field"),d=t.find(".js-panel__input-index-to").find(".js-input__field"),l=t.find(".js-select-items").find(".js-select-items__button-add"),r=t.find(".js-select-items").find(".js-select-items__button-remove"),c=t.find(".js-select-items").find(".js-select-items__options"),f=c[0],p=t.find(".toxin-rangeslider-here").data("toxinRangeSlider"),v=t.find(".js-panel__checkbox-is-vertical").find(".checkbox__input"),m=t.find(".js-panel__checkbox-is-two-handles").find(".checkbox__input"),_=t.find(".js-panel__checkbox-is-tip").find(".checkbox__input");function h(){n.val(p.data.minValue),i.val(p.data.maxValue),s.val(p.data.valueFrom),o.val(p.data.valueTo),f.length>1?(u.prop("disabled",!1),d.prop("disabled",!1),u.val(p.data.items.indexFrom),d.val(p.data.items.indexTo)):(u.prop("disabled",!0),d.prop("disabled",!0))}p.update({onHandlePositionChange:function(){this.isFromHandle?(s.val(this.value),this.isUsingItems&&u.val(this.index)):(o.val(this.value),this.isUsingItems&&d.val(this.index))}}),v.change((function(){this.checked?t.addClass("panel_is-vertical"):t.removeClass("panel_is-vertical"),p.update({isVertical:this.checked})})),m.change((function(){p.update({isTwoHandles:this.checked}),this.checked?(s.prop("disabled",!1),u.prop("disabled",!1)):(s.prop("disabled",!0),u.prop("disabled",!0))})),_.change((function(){p.update({isTip:this.checked})})),n.focusout((function(){p.update({minValue:parseFloat(this.value)}),h()})),i.focusout((function(){p.update({maxValue:parseFloat(this.value)}),h()})),a.focusout((function(){p.update({stepValue:parseInt(this.value)})})),a.change((function(e){e.target.focus()})),s.focusout((function(){if(p.data.isHaveItems){var e=p.data.findIndexByItem(this.value);-1==e&&(this.value=p.data.valueFrom),e>p.data.items.indexTo&&(this.value=p.data.valueTo)}else parseInt(this.value)>p.data.valueTo&&(this.value=p.data.valueTo);p.update({valueFrom:this.value}),p.data.isHaveItems&&u.val(p.data.items.indexFrom)})),o.focusout((function(){if(p.data.isHaveItems){var e=p.data.findIndexByItem(this.value);-1==e&&(this.value=p.data.valueTo),e<p.data.items.indexFrom&&(this.value=p.data.valueFrom)}else parseInt(this.value)<p.data.valueFrom&&(this.value=p.data.valueFrom);p.update({valueTo:this.value}),p.data.isHaveItems&&d.val(p.data.items.indexTo)})),u.focusout((function(){p.update({items:{indexFrom:parseInt(this.value)}}),s.val(p.data.valueFrom)})),d.focusout((function(){p.update({items:{indexTo:parseInt(this.value)}}),o.val(p.data.valueTo)})),l.click((function(){var e=c.find("option"),t=f.length>1;n.prop("disabled",t),i.prop("disabled",t),a.prop("disabled",t);var s=$.map(e,(function(e){return e.value}));p.update({items:{values:s}}),h()})),r.click((function(){var e=c.find("option"),t=f.length>1;n.prop("disabled",t),i.prop("disabled",t),a.prop("disabled",t);var s=$.map(e,(function(e){return e.value}));p.update({items:{values:s}}),h()}))}))}))}]);