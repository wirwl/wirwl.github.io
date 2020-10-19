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
var Handle = (function (_super) {
    __extends(Handle, _super);
    function Handle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Handle.prototype.setMoving = function (value) {
        if (value)
            this.$el.addClass('rangeslider__handle_isMoving');
        else
            this.$el.removeClass('rangeslider__handle_isMoving');
    };
    Handle.prototype.is = function (h) {
        return this.$el.is(h.$el);
    };
    return Handle;
}(TRSElement));
export default Handle;
//# sourceMappingURL=handle.js.map