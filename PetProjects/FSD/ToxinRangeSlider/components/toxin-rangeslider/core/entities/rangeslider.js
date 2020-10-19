var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import TRSElement from './element';
var Rangeslider = (function (_super) {
    __extends(Rangeslider, _super);
    function Rangeslider(el) {
        var _this = _super.call(this, el) || this;
        _this.controls = [];
        _this._isTwoHandles = false;
        _this.isTwoHandles = function () {
            return _this._isTwoHandles;
        };
        _this.setTwoHandles = function (value) {
            _this._isTwoHandles = value;
            _this.$el.find('.rangeslider__line-selected').removeAttr('style');
            if (_this._isTwoHandles)
                _this.$el.removeClass('rangeslider_one-handle');
            else
                _this.$el.addClass('rangeslider_one-handle');
        };
        _this._isVertical = false;
        _this.isVertical = function () {
            return _this._isVertical;
        };
        _this.setVertical = function (value) {
            _this._isVertical = value;
            if (value)
                _this.$el.addClass('rangeslider_is-vertical');
            else
                _this.$el.removeClass('rangeslider_is-vertical');
            _this.controls.forEach(function (val) {
                val.setVertical(value);
            });
        };
        el.on('dragstart', function (e) { return e.preventDefault(); });
        return _this;
    }
    Rangeslider.prototype.addControls = function (controls) {
        this.controls = controls;
    };
    return Rangeslider;
}(TRSElement));
export default Rangeslider;
//# sourceMappingURL=rangeslider.js.map