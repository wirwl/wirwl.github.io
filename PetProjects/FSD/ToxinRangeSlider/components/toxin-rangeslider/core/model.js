var TRSModel = (function () {
    function TRSModel(options) {
        this.settings = $.extend(true, {}, TRSModel.defaults);
        $.extend(true, this.settings, options);
    }
    TRSModel.prototype.validate = function () {
        var _a, _b;
        var _c = this.settings, items = _c.items, stepValue = _c.stepValue, isTwoHandles = _c.isTwoHandles, isVertical = _c.isVertical, isTip = _c.isTip;
        var indexFrom = items === null || items === void 0 ? void 0 : items.indexFrom;
        var indexTo = items === null || items === void 0 ? void 0 : items.indexTo;
        var values = items === null || items === void 0 ? void 0 : items.values;
        var isUsingItems = items && items.values.length > 1;
        if (isUsingItems) {
            this.settings.minValue = values[0];
            this.settings.maxValue = values[values.length - 1];
            this.settings.valueFrom = values[indexFrom];
            this.settings.valueTo = values[indexTo];
            if (typeof indexFrom === 'undefined')
                this.settings.items.indexFrom = 0;
            if (typeof indexTo === 'undefined')
                this.settings.items.indexTo = values.length - 1;
            if (indexTo > values.length - 1) {
                this.settings.items.indexTo = values.length - 1;
            }
            if (isTwoHandles) {
                if (indexFrom > indexTo) {
                    this.settings.items.indexFrom = indexTo;
                }
                if (indexFrom < 0)
                    this.settings.items.indexFrom = 0;
            }
        }
        else {
            var maxValue = Number(isUsingItems ? items.values[((_a = items.values) === null || _a === void 0 ? void 0 : _a.length) - 1] : this.settings.maxValue);
            var minValue = Number(isUsingItems ? items.values[0] : this.settings.minValue);
            var valueFrom = this.settings.valueFrom;
            var valueTo = this.settings.valueTo;
            if (typeof isVertical !== 'boolean')
                this.settings.isVertical = TRSModel.defaults.isVertical;
            if (typeof isTwoHandles !== 'boolean')
                this.settings.isTwoHandles = TRSModel.defaults.isTwoHandles;
            if (typeof isTip !== 'boolean')
                this.settings.isTip = TRSModel.defaults.isTip;
            if (Number.isNaN(minValue))
                this.settings.minValue = Number(TRSModel.defaults.minValue);
            if (Number.isNaN(maxValue))
                this.settings.maxValue = Number(TRSModel.defaults.maxValue);
            if (Number.isNaN(valueFrom))
                this.settings.valueFrom = Number(TRSModel.defaults.valueFrom);
            if (Number.isNaN(valueTo))
                this.settings.valueTo = Number(TRSModel.defaults.valueTo);
            if (Number.isNaN(stepValue))
                this.settings.stepValue = TRSModel.defaults.stepValue;
            if (typeof items !== 'object')
                this.settings.items = TRSModel.defaults.items;
            if (minValue === maxValue) {
                this.settings.valueFrom = minValue;
                valueFrom = this.settings.valueFrom;
                this.settings.maxValue = minValue + 1;
                maxValue = Number(isUsingItems ? items.values[((_b = items.values) === null || _b === void 0 ? void 0 : _b.length) - 1] : this.settings.maxValue);
                this.settings.valueTo = maxValue;
                valueTo = maxValue;
            }
            if (maxValue < minValue) {
                this.settings.minValue = maxValue;
                this.settings.maxValue = minValue;
                minValue = maxValue;
                maxValue = minValue;
                if (valueFrom < minValue || valueFrom > maxValue)
                    this.settings.valueFrom = minValue;
                if (valueTo < minValue || valueTo > maxValue)
                    this.settings.valueTo = maxValue;
            }
            var size = maxValue - minValue;
            if (stepValue < 1)
                this.settings.stepValue = 1;
            if (this.settings.stepValue > size)
                this.settings.stepValue = size;
            if (isTwoHandles) {
                if (valueFrom > valueTo) {
                    this.settings.valueFrom = valueTo;
                    this.settings.valueTo = valueFrom;
                    valueFrom = this.settings.valueFrom;
                    valueTo = this.settings.valueTo;
                }
                if (valueTo < valueFrom)
                    this.settings.valueTo = valueFrom;
                if (valueFrom < minValue)
                    this.settings.valueFrom = minValue;
            }
            else if (valueTo < minValue)
                this.settings.valueTo = minValue;
            if (valueTo > maxValue)
                this.settings.valueTo = maxValue;
        }
    };
    TRSModel.defaults = {
        isVertical: false,
        isTwoHandles: true,
        isTip: true,
        minValue: 0,
        maxValue: 1234,
        stepValue: 1,
        valueFrom: 0,
        valueTo: 1234,
        items: { indexFrom: 0, indexTo: 0, values: [] },
    };
    return TRSModel;
}());
export default TRSModel;
//# sourceMappingURL=model.js.map