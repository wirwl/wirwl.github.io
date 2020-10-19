import Handle from './entities/handle';
import Tip from './entities/tip';
import Line from './entities/line';
import Rangeslider from './entities/rangeslider';
import { ERRORS } from './const';
var TRSView = (function () {
    function TRSView(el) {
        this.htmlTemplate = "<div class='rangeslider'>\n        <div class='rangeslider__tip-min'>00</div>\n        <div class='rangeslider__tip-max'>99</div>\n        <div class='rangeslider__line'></div>\n        <div class='rangeslider__line-selected'></div>\n        <div class='rangeslider__handle rangeslider__handle-from'>\n          <div class='rangeslider__tip rangeslider__tip-from'>23</div>\n        </div>\n        <div class='rangeslider__handle rangeslider__handle-to'>\n          <div class='rangeslider__tip rangeslider__tip-to'>456</div>\n        </div>\n        </div>";
        this.el = el;
        this.el.html(this.htmlTemplate);
        this.rangeslider = new Rangeslider(el.find('.rangeslider'));
        this.line = new Line(el.find('.rangeslider__line'));
        this.lineSelected = new Line(this.rangeslider.$el.find('.rangeslider__line-selected'));
        this.data = el.data('options');
        this.tipFrom = new Tip(el.find('.rangeslider__tip-from'));
        this.tipTo = new Tip(el.find('.rangeslider__tip-to'));
        this.tipMin = new Tip(el.find('.rangeslider__tip-min'));
        this.tipMax = new Tip(el.find('.rangeslider__tip-max'));
        this.handleFrom = new Handle(this.rangeslider.$el.find('.rangeslider__handle-from'));
        this.offsetFrom = this.handleFrom.getWidth() / 2;
        this.handleTo = new Handle(this.rangeslider.$el.find('.rangeslider__handle-to'));
        this.offsetTo = this.handleTo.getWidth() / 2;
        this.rangeslider.addControls([
            this.tipMin,
            this.tipFrom,
            this.tipTo,
            this.tipMax,
            this.handleFrom,
            this.handleTo,
            this.line,
            this.lineSelected,
        ]);
        this.currentSettings = {
            isVertical: false,
            isTwoHandles: true,
            isTip: true,
            minValue: 0,
            maxValue: 4321,
            stepValue: 1,
            valueFrom: 0,
            valueTo: 4321,
            items: { indexFrom: 0, indexTo: 0, values: [] },
        };
        this.bindThis();
        this.addEventListeners();
    }
    TRSView.prototype.bindThis = function () {
        this.onMouseDownByLine = this.onMouseDownByLine.bind(this);
        this.onMouseDownByHandle = this.onMouseDownByHandle.bind(this);
    };
    TRSView.prototype.addEventListeners = function () {
        this.line.$el.on('mousedown.line', this.onMouseDownByLine);
        this.handleFrom.$el.on('mousedown.handleFrom', this.onMouseDownByHandle);
        this.handleTo.$el.on('mousedown.handleTo', this.onMouseDownByHandle);
    };
    TRSView.prototype.setCurrentSettings = function (data) {
        if (data === void 0) { data = {}; }
        $.extend(true, this.currentSettings, data);
    };
    TRSView.prototype.drawSlider = function (oldSettings, newSettings, forceRedraw) {
        var _a, _b, _c, _d, _e, _f;
        if (newSettings === void 0) { newSettings = {}; }
        if (forceRedraw === void 0) { forceRedraw = false; }
        var oldMinValue = oldSettings.minValue, oldMaxValue = oldSettings.maxValue, oldValueFrom = oldSettings.valueFrom, oldValueTo = oldSettings.valueTo, oldIsVertical = oldSettings.isVertical, oldIsTip = oldSettings.isTip, oldIsTwoHandles = oldSettings.isTwoHandles;
        var oldIndexFrom = (_a = oldSettings.items) === null || _a === void 0 ? void 0 : _a.indexFrom;
        var oldIndexTo = (_b = oldSettings.items) === null || _b === void 0 ? void 0 : _b.indexTo;
        var oldValues = (_c = oldSettings.items) === null || _c === void 0 ? void 0 : _c.values;
        $.extend(true, this.currentSettings, newSettings);
        var _g = this.currentSettings, currentMinValue = _g.minValue, currentMaxValue = _g.maxValue, currentValueFrom = _g.valueFrom, currentValueTo = _g.valueTo, currentIsVertical = _g.isVertical, currentIsTip = _g.isTip, currentIsTwoHandles = _g.isTwoHandles;
        var currentIndexFrom = (_d = this.currentSettings.items) === null || _d === void 0 ? void 0 : _d.indexFrom;
        var currentIndexTo = (_e = this.currentSettings.items) === null || _e === void 0 ? void 0 : _e.indexTo;
        var currentValues = (_f = this.currentSettings.items) === null || _f === void 0 ? void 0 : _f.values;
        var _h = this.rangeslider, setVertical = _h.setVertical, setTwoHandles = _h.setTwoHandles;
        var isUsingItemsCurrent = (currentValues === null || currentValues === void 0 ? void 0 : currentValues.length) > 1;
        var isVerticalChanged = currentIsVertical !== oldIsVertical;
        var isTwoHandlesChanged = currentIsTwoHandles !== oldIsTwoHandles;
        var isTipChanged = currentIsTip !== oldIsTip;
        var minValueChanged = oldMinValue !== currentMinValue;
        var maxValueChanged = oldMaxValue !== currentMaxValue;
        var valueFromChanged = oldValueFrom !== currentValueFrom;
        var valueToChanged = oldValueTo !== currentValueTo;
        var indexFromChanged = currentIndexFrom !== oldIndexFrom;
        var indexToChanged = currentIndexTo !== oldIndexTo;
        var isNeedRedraw = forceRedraw;
        if (isVerticalChanged) {
            setVertical(currentIsVertical);
            isNeedRedraw = true;
        }
        if (isNeedRedraw || isTwoHandlesChanged) {
            setTwoHandles(currentIsTwoHandles);
            if (currentIsTwoHandles) {
                if (!this.rangeslider.$el.find('.rangeslider__handle-from').length) {
                    this.rangeslider.appendToDomTree(this.handleFrom);
                    this.handleFrom.$el.on('mousedown.handleFrom', this.onMouseDownByHandle);
                    this.tipFrom.setText(currentValueFrom);
                }
            }
            else
                this.handleFrom.removeFromDomTree();
            isNeedRedraw = true;
        }
        if (isNeedRedraw || isTipChanged) {
            if (currentIsTip) {
                if (currentIsTwoHandles)
                    this.handleFrom.appendToDomTree(this.tipFrom);
                this.handleTo.appendToDomTree(this.tipTo);
                this.rangeslider.appendToDomTree(this.tipMin);
                this.rangeslider.appendToDomTree(this.tipMax);
            }
            else {
                if (currentIsTwoHandles)
                    this.tipFrom.removeFromDomTree();
                this.tipTo.removeFromDomTree();
                this.tipMin.removeFromDomTree();
                this.tipMax.removeFromDomTree();
            }
        }
        if (isNeedRedraw || minValueChanged) {
            this.tipMin.setText(currentMinValue);
        }
        if (isNeedRedraw || maxValueChanged) {
            this.tipMax.setText(currentMaxValue);
        }
        var isItemValuesChanged = !this.isEqualArrays(oldValues, currentValues);
        if (isNeedRedraw || isItemValuesChanged) {
            if (currentValues) {
                var count = currentValues.length;
                if (count > 1) {
                    this.tipMin.setText(currentValues[0]);
                    this.tipMax.setText(currentValues[count - 1]);
                }
            }
        }
        if (currentIsTwoHandles) {
            if (isNeedRedraw || valueFromChanged || minValueChanged || maxValueChanged || isItemValuesChanged) {
                var val = isUsingItemsCurrent ? currentIndexFrom : Number(currentValueFrom);
                var posXWithOutStep = this.convertRelativeValueToPixelValue(val);
                var posXWithStep = this.getSteppedPos(posXWithOutStep);
                this.moveHandle(this.handleFrom, posXWithStep == null ? posXWithOutStep : posXWithStep);
            }
        }
        if (isNeedRedraw || valueToChanged || minValueChanged || maxValueChanged || isItemValuesChanged) {
            var val = isUsingItemsCurrent ? currentIndexTo : Number(currentValueTo);
            var posXWithOutStep = this.convertRelativeValueToPixelValue(val);
            var posXWithStep = this.getSteppedPos(posXWithOutStep);
            this.moveHandle(this.handleTo, posXWithStep == null ? posXWithOutStep : posXWithStep);
        }
        if (isUsingItemsCurrent) {
            var pxLength = this.line.getSize() - this.offsetFrom - this.offsetTo;
            var pxStep = pxLength / (currentValues.length - 1);
            if (currentIsTwoHandles && (isNeedRedraw || indexFromChanged)) {
                var newPos = currentIndexFrom * pxStep;
                this.moveHandle(this.handleFrom, newPos);
            }
            if (isNeedRedraw || indexToChanged) {
                var newPos = currentIndexTo * pxStep;
                this.moveHandle(this.handleTo, newPos);
            }
        }
    };
    TRSView.prototype.isEqualArrays = function (ar1, ar2) {
        if (!ar1 || !ar2)
            return false;
        if (ar1.length !== ar2.length)
            return false;
        return ar1.every(function (value, index) { return value === ar2[index]; });
    };
    TRSView.prototype.onMouseDownByHandle = function (e) {
        var _this = this;
        var $el = $(e.target);
        var currentHandle = this.handleFrom;
        if ($el.is(this.handleTo.$el) || $el.is(this.tipTo.$el))
            currentHandle = this.handleTo;
        currentHandle.setMoving(true);
        var clientPos = this.currentSettings.isVertical ? e.clientY : e.clientX;
        var shiftPos;
        try {
            if (clientPos)
                shiftPos = clientPos - currentHandle.getOffset();
            else
                throw new Error(ERRORS.undefinedValue);
        }
        catch (e) {
            throw e;
        }
        this.rangeslider.$el.on('mousemove.rangeslider', function (e) { return _this.onMouseMoveRangeSlider(e, currentHandle, shiftPos); });
        var $document = $(document);
        $document.on('mousemove.document', function (e) { return _this.onMouseMoveRangeSlider(e, currentHandle, shiftPos); });
        currentHandle.$el.on('mouseup.handle', function (e) { return _this.onMouseUp(e, currentHandle); });
        $document.on('mouseup.document', function (e) { return _this.onMouseUp(e, currentHandle); });
    };
    TRSView.prototype.onMouseMoveRangeSlider = function (e, currentHandle, shiftPos) {
        var $target = $(e.target);
        var isVertical = this.currentSettings.isVertical;
        var eOffset = isVertical ? e.offsetY : e.offsetX;
        var offsetPos = eOffset || 0;
        var targetOffsetCoord = $target.offset();
        var targetOffset;
        try {
            if (targetOffsetCoord)
                targetOffset = isVertical ? targetOffsetCoord.top : targetOffsetCoord.left;
            else
                throw new Error(ERRORS.undefinedValue);
        }
        catch (e) {
            throw e;
        }
        var newPos = this.getSteppedPos(offsetPos + targetOffset - this.line.getOffset() - this.offsetFrom);
        var eClient = isVertical ? e.clientY : e.clientX;
        var clientPos = eClient || 0;
        if (newPos == null)
            newPos = clientPos - this.line.getOffset() - shiftPos;
        newPos = this.validate(newPos, currentHandle);
        this.onHandlePositionUpdate(currentHandle, newPos);
        return false;
    };
    TRSView.prototype.validate = function (pos, currentHandle) {
        var result = pos;
        var lw = this.line.getSize();
        var ch = currentHandle;
        if (this.currentSettings.isTwoHandles) {
            if (ch.is(this.handleFrom) && pos < 0)
                result = 0;
            if (ch.is(this.handleFrom) && pos > this.handleTo.getPos())
                result = this.handleTo.getPos();
            if (ch.is(this.handleTo) && pos > lw - ch.getSize())
                result = lw - ch.getSize();
            if (ch.is(this.handleTo) && pos < this.handleFrom.getPos()) {
                result = this.handleFrom.getPos();
            }
        }
        else {
            if (pos < 0)
                result = 0;
            if (pos > lw - ch.getSize())
                result = lw - ch.getSize();
        }
        return result;
    };
    TRSView.prototype.onMouseUp = function (e, currentHandle) {
        currentHandle.setMoving(false);
        this.rangeslider.$el.off('mousemove.rangeslider');
        currentHandle.$el.off('mouseup.handle');
        $(document).off('mousemove.document');
        $(document).off('mouseup.document');
    };
    TRSView.prototype.onMouseDownByLine = function (e) {
        e.preventDefault();
        var eOffset = this.currentSettings.isVertical ? e.offsetY : e.offsetX;
        var offsetPos;
        try {
            if (eOffset)
                offsetPos = eOffset;
            else
                throw Error('Value is undefined. This is not valid value!');
        }
        catch (e) {
            throw e;
        }
        if (offsetPos < this.offsetFrom)
            offsetPos = this.offsetFrom;
        if (offsetPos > this.line.getSize() - this.offsetTo) {
            offsetPos = this.line.getSize() - this.offsetTo;
        }
        var nearHandle = this.getNearestHandle(offsetPos);
        var newPos = this.getSteppedPos(offsetPos - this.offsetFrom);
        if (newPos == null) {
            var offset = nearHandle.is(this.handleFrom) ? this.offsetFrom : this.handleTo.getSize() - this.offsetTo;
            newPos = offsetPos - offset;
        }
        this.onHandlePositionUpdate(nearHandle, newPos);
        var newEvent = e;
        newEvent.target = nearHandle.$el;
        nearHandle.$el.trigger(newEvent, 'mousedown.handle');
    };
    TRSView.prototype.getNearestHandle = function (pos) {
        if (this.currentSettings.isTwoHandles) {
            if (pos < this.handleFrom.getPos())
                return this.handleFrom;
            if (pos > this.handleTo.getPos())
                return this.handleTo;
            var distanceBetweenHandles = this.handleTo.getPos() - this.handleFrom.getPos() - this.handleFrom.getSize();
            var half = this.handleFrom.getPos() + this.handleFrom.getSize() + distanceBetweenHandles / 2;
            if (pos < half)
                return this.handleFrom;
            return this.handleTo;
        }
        return this.handleTo;
    };
    TRSView.prototype.moveHandle = function (currentHandle, pxX) {
        var _a;
        var _b = this.currentSettings, valueFrom = _b.valueFrom, valueTo = _b.valueTo;
        var values = (_a = this.currentSettings.items) === null || _a === void 0 ? void 0 : _a.values;
        var isUsingItemsCurrent = (values === null || values === void 0 ? void 0 : values.length) > 1;
        currentHandle.setPos(pxX);
        var restoreIndex = -1;
        if (isUsingItemsCurrent) {
            var lw = this.line.getSize() - this.offsetFrom - this.offsetTo;
            var pxStep = lw / (values.length - 1);
            restoreIndex = Math.round(pxX / pxStep);
            if (currentHandle.is(this.handleFrom)) {
                this.currentSettings.items.indexFrom = restoreIndex;
                this.currentSettings.valueFrom = values[restoreIndex];
            }
            else {
                this.currentSettings.items.indexTo = restoreIndex;
                this.currentSettings.valueTo = values[restoreIndex];
            }
        }
        else {
            if (currentHandle.is(this.handleFrom)) {
                this.currentSettings.valueFrom = this.convertPixelValueToRelativeValue(pxX);
            }
            else
                this.currentSettings.valueTo = this.convertPixelValueToRelativeValue(pxX);
            valueFrom = this.currentSettings.valueFrom;
            valueTo = this.currentSettings.valueTo;
        }
        this.drawLineSelected(currentHandle);
        this.tipFrom.setText(valueFrom);
        this.tipTo.setText(valueTo);
        var isHandleFrom = currentHandle.is(this.handleFrom);
        return {
            isFromHandle: isHandleFrom,
            value: isHandleFrom ? valueFrom : valueTo,
            isUsingItems: isUsingItemsCurrent,
            index: restoreIndex,
        };
    };
    TRSView.prototype.drawLineSelected = function (currentHandle) {
        if (this.currentSettings.isTwoHandles) {
            if (currentHandle.is(this.handleFrom)) {
                this.lineSelected.setPos(this.handleFrom.getPos() + this.offsetFrom);
            }
            this.lineSelected.setSize(this.handleTo.getPos() -
                this.handleFrom.getPos() +
                this.handleTo.getSize() -
                this.offsetFrom -
                this.offsetTo +
                1);
        }
        else {
            this.lineSelected.setSize(currentHandle.getPos() + currentHandle.getSize() - this.offsetTo + 1);
        }
    };
    TRSView.prototype.convertRelativeValueToPixelValue = function (val) {
        var _a = this.currentSettings, items = _a.items, minValue = _a.minValue, maxValue = _a.maxValue;
        var values = items === null || items === void 0 ? void 0 : items.values;
        var lw = this.line.getSize() - this.offsetFrom - this.offsetTo;
        var isHasValues = items && values && values.length > 1;
        var result;
        if (isHasValues) {
            var pxStep = lw / (values.length - 1);
            result = val * pxStep;
        }
        else {
            var relLength = Number(maxValue) - Number(minValue);
            var relPercent = (val - Number(minValue)) / relLength;
            result = lw * relPercent;
        }
        return result;
    };
    TRSView.prototype.convertPixelValueToRelativeValue = function (val) {
        var _a = this.currentSettings, maxValue = _a.maxValue, minValue = _a.minValue;
        var lw = this.line.getSize() - this.offsetFrom - this.offsetTo;
        var percent = val / lw;
        var result = Math.round(Number(minValue) + percent * (Number(maxValue) - Number(minValue)));
        return result;
    };
    TRSView.prototype.getSteppedPos = function (pxValue) {
        var _a = this.currentSettings, stepValue = _a.stepValue, items = _a.items, maxValue = _a.maxValue, minValue = _a.minValue;
        var values = items === null || items === void 0 ? void 0 : items.values;
        var pxLength = this.line.getSize() - this.offsetFrom - this.offsetTo;
        var isDefinedStep = stepValue > 1;
        var isDefinedSetOfValues = items && values && values.length > 1;
        var isTooLongLine = pxLength > Number(maxValue) - Number(minValue);
        var isHaveStep = isDefinedStep || isTooLongLine || isDefinedSetOfValues;
        if (pxValue === 15) {
            console.log(values);
            console.log("!!! " + isDefinedStep + " " + isTooLongLine + " " + isDefinedSetOfValues);
        }
        if (isHaveStep) {
            var pxStep = 0;
            if (isDefinedStep) {
                pxStep = this.convertRelativeValueToPixelValue(Number(minValue) + Number(stepValue));
            }
            if (isTooLongLine) {
                var relativeLength = Number(maxValue) - Number(minValue);
                pxStep = pxLength / relativeLength;
                if (isDefinedStep)
                    pxStep *= stepValue;
            }
            if (isDefinedSetOfValues) {
                pxStep = pxLength / (values.length - 1);
            }
            var nStep = Math.round(pxValue / pxStep);
            var newPos = nStep * pxStep;
            if (pxValue / pxStep > Math.trunc(pxLength / pxStep)) {
                var remainder = pxLength - newPos;
                if (pxValue > newPos + remainder / 2)
                    newPos += remainder;
            }
            if (newPos > pxLength)
                newPos = pxLength;
            return newPos;
        }
        return null;
    };
    return TRSView;
}());
export default TRSView;
//# sourceMappingURL=view.js.map