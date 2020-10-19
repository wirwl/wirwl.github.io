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
import TRSModel from './model';
var TRSPresenter = (function () {
    function TRSPresenter(model, view) {
        this.view = view;
        this.model = model;
        this.view.onHandlePositionUpdate = this.onHandlePositionUpdate.bind(this);
        $.extend(true, this.model.settings, this.view.data);
        this.model.validate();
        this.data = __assign({}, this.model.settings);
        this.view.drawSlider(__assign({}, TRSModel.defaults), this.model.settings, true);
    }
    TRSPresenter.prototype.updateSettings = function (_a) {
        var isFromHandle = _a.isFromHandle, isUsingItems = _a.isUsingItems, index = _a.index, value = _a.value;
        if (isFromHandle) {
            if (isUsingItems) {
                this.model.settings.items.indexFrom = index;
                this.model.settings.valueFrom = this.model.settings.items.values[index];
            }
            else
                this.model.settings.valueFrom = value;
        }
        else if (isUsingItems) {
            this.model.settings.items.indexTo = index;
            this.model.settings.valueTo = this.model.settings.items.values[index];
        }
        else
            this.model.settings.valueTo = value;
    };
    TRSPresenter.prototype.onHandlePositionUpdate = function (handle, pxNewPos) {
        var onHandlePositionChange = this.model.settings.onHandlePositionChange;
        var handleMovingResult = this.view.moveHandle(handle, pxNewPos);
        this.updateSettings(handleMovingResult);
        if (onHandlePositionChange)
            onHandlePositionChange.call(handleMovingResult);
    };
    TRSPresenter.prototype.update = function (data) {
        if (data === void 0) { data = {}; }
        var oldSettings = __assign({}, this.model.settings);
        $.extend(true, this.model.settings, data);
        this.model.validate();
        this.data = this.model.settings;
        this.view.drawSlider(oldSettings, this.model.settings);
    };
    return TRSPresenter;
}());
export default TRSPresenter;
//# sourceMappingURL=presenter.js.map