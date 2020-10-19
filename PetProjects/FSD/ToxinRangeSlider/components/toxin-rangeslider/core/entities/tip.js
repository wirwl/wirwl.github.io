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
var Tip = (function (_super) {
    __extends(Tip, _super);
    function Tip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tip.prototype.setText = function (value) {
        this.$el.text(value);
    };
    Tip.prototype.getText = function () {
        return this.$el.text();
    };
    return Tip;
}(TRSElement));
export default Tip;
//# sourceMappingURL=tip.js.map