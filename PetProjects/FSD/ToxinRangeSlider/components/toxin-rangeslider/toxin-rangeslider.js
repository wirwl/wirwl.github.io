var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import TRSPresenter from './core/presenter';
import TRSView from './core/view';
import TRSModel from './core/model';
$.fn.toxinRangeSlider = function (options) {
    this.each(function () {
        if (!$.data(this, 'toxinRangeSlider')) {
            $.data(this, 'toxinRangeSlider', new TRSPresenter(new TRSModel(options), new TRSView($(this))));
        }
    });
    return this;
};
$.fn.toxinRangeSlider.options = __assign({}, TRSModel.defaults);
var el = $('.toxin-rangeslider-here');
el.each(function () {
    $(this).toxinRangeSlider();
});
//# sourceMappingURL=toxin-rangeslider.js.map