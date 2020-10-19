var Panel = (function () {
    function Panel(element) {
        this.$panel = $(element);
        this.$inputs = this.$panel.find('input');
        this.$minValue = this.$panel.find('.js-panel__input-min-value').find('.js-input__field');
        this.$maxValue = this.$panel.find('.js-panel__input-max-value').find('.js-input__field');
        this.$stepValue = this.$panel.find('.js-panel__input-step-value').find('.js-input__field');
        this.$valueFrom = this.$panel.find('.js-panel__input-value-from').find('.js-input__field');
        this.$valueTo = this.$panel.find('.js-panel__input-value-to').find('.js-input__field');
        this.$indexFrom = this.$panel.find('.js-panel__input-index-from').find('.js-input__field');
        this.$indexTo = this.$panel.find('.js-panel__input-index-to').find('.js-input__field');
        this.$buttonAdd = this.$panel.find('.js-select-items').find('.js-select-items__button-add');
        this.$buttonRemove = this.$panel.find('.js-select-items').find('.js-select-items__button-remove');
        this.$select = this.$panel.find('.js-select-items').find('.js-select-items__options');
        this.select = this.$select[0];
        this.$rangesliderRootElement = this.$panel.find('.toxin-rangeslider-here');
        this.rangeslider = this.$rangesliderRootElement.data('toxinRangeSlider');
        this.$isVertical = this.$panel.find('.js-panel__checkbox-is-vertical').find('.checkbox__input');
        this.$isTwoHandles = this.$panel.find('.js-panel__checkbox-is-two-handles').find('.checkbox__input');
        this.$isShowTips = this.$panel.find('.js-panel__checkbox-is-tip').find('.checkbox__input');
        this.bindThis();
        this.addEventListeners();
        this.updatePanelValues();
    }
    Panel.prototype.bindThis = function () {
        this.handleIsVerticalChange = this.handleIsVerticalChange.bind(this);
        this.handleIsTwoHandlesChange = this.handleIsTwoHandlesChange.bind(this);
        this.handleIsShowTipsChange = this.handleIsShowTipsChange.bind(this);
        this.handleMinValueInput = this.handleMinValueInput.bind(this);
        this.handleMaxValueInput = this.handleMaxValueInput.bind(this);
        this.handleValueFromInput = this.handleValueFromInput.bind(this);
        this.handleValueToInput = this.handleValueToInput.bind(this);
        this.handleIndexFromInput = this.handleIndexFromInput.bind(this);
        this.handleIndexToInput = this.handleIndexToInput.bind(this);
        this.handleStepValueInput = this.handleStepValueInput.bind(this);
        this.handleInputsFocusout = this.handleInputsFocusout.bind(this);
        this.handleButtonAddClick = this.handleButtonAddClick.bind(this);
        this.handleButtonRemoveClick = this.handleButtonRemoveClick.bind(this);
    };
    Panel.prototype.addEventListeners = function () {
        var valueFrom = this.$valueFrom;
        var valueTo = this.$valueTo;
        var indexFrom = this.$indexFrom;
        var indexTo = this.$indexTo;
        this.rangeslider.update({
            onHandlePositionChange: function () {
                var _a = this, isFromHandle = _a.isFromHandle, isUsingItems = _a.isUsingItems, index = _a.index, value = _a.value;
                if (isFromHandle) {
                    valueFrom.val(value);
                    if (isUsingItems)
                        indexFrom.val(index);
                }
                else {
                    valueTo.val(value);
                    if (isUsingItems)
                        indexTo.val(index);
                }
            },
        });
        this.$isVertical.on('change.isVertical', this.handleIsVerticalChange);
        this.$isTwoHandles.on('change.isTwoHandles', this.handleIsTwoHandlesChange);
        this.$isShowTips.on('change.isShowTips', this.handleIsShowTipsChange);
        this.$minValue.on('input.minValue', this.handleMinValueInput);
        this.$maxValue.on('input.maxValue', this.handleMaxValueInput);
        this.$valueFrom.on('input.valueFrom', this.handleValueFromInput);
        this.$valueTo.on('input.valueTo', this.handleValueToInput);
        this.$indexFrom.on('input.indexFrom', this.handleIndexFromInput);
        this.$indexTo.on('input.indexTo', this.handleIndexToInput);
        this.$stepValue.on('input.stepValue', this.handleStepValueInput);
        this.$stepValue.keypress(this.preventMinusTyping);
        this.$indexFrom.keypress(this.preventMinusTyping);
        this.$indexTo.keypress(this.preventMinusTyping);
        this.$inputs.on('focusout.inputs', this.handleInputsFocusout);
        this.$buttonAdd.on('click.buttonAdd', this.handleButtonAddClick);
        this.$buttonRemove.on('click.buttonRemove', this.handleButtonRemoveClick);
    };
    Panel.prototype.handleInputsFocusout = function (event) {
        var _a;
        var isUsingItems = this.rangeslider.data.items.values.length > 1;
        var $element = $(event.target);
        if ($element
            .parent()
            .parent()
            .hasClass('js-panel__input-min-value')) {
            $element.val(isUsingItems ? this.rangeslider.data.items.values[0] : this.rangeslider.data.minValue);
        }
        if ($element
            .parent()
            .parent()
            .hasClass('js-panel__input-max-value')) {
            $element.val(isUsingItems
                ? this.rangeslider.data.items.values[((_a = this.rangeslider.data.items.values) === null || _a === void 0 ? void 0 : _a.length) - 1]
                : this.rangeslider.data.maxValue);
        }
        if ($element
            .parent()
            .parent()
            .hasClass('js-panel__input-step-value')) {
            $element.val(this.rangeslider.data.stepValue);
        }
        if ($element
            .parent()
            .parent()
            .hasClass('js-panel__input-value-from')) {
            $element.val(this.rangeslider.data.valueFrom);
        }
        if ($element
            .parent()
            .parent()
            .hasClass('js-panel__input-value-to')) {
            $element.val(this.rangeslider.data.valueTo);
        }
        if ($element
            .parent()
            .parent()
            .hasClass('js-panel__input-index-from')) {
            $element.val(this.rangeslider.data.items.indexFrom);
        }
        if ($element
            .parent()
            .parent()
            .hasClass('js-panel__input-index-to')) {
            $element.val(this.rangeslider.data.items.indexTo);
        }
    };
    Panel.prototype.handleStepValueInput = function (event) {
        var el = event.target;
        if (el.value.length) {
            var value = parseInt(el.value, 10);
            if (value < 1)
                el.value = '1';
            if (!this.isStepValid())
                el.value = this.getRangeLength().toString();
            this.rangeslider.update({ stepValue: parseInt(el.value, 10) });
        }
    };
    Panel.prototype.handleButtonRemoveClick = function () {
        var $selectOptions = this.$select.find('option');
        var isUsingItems = this.select ? this.select.length > 1 : false;
        this.$minValue.prop('disabled', isUsingItems);
        this.$maxValue.prop('disabled', isUsingItems);
        this.$stepValue.prop('disabled', isUsingItems);
        var options = [];
        $selectOptions.each(function (_, el) {
            options.push(el);
        });
        var newValues = $.map(options, function (option) { return option.value; });
        this.rangeslider.update({ items: { values: newValues } });
        this.updatePanelValues();
    };
    Panel.prototype.handleButtonAddClick = function () {
        var $selectOptions = this.$select.find('option');
        var isUsingItems = this.select ? this.select.length > 1 : false;
        this.$minValue.prop('disabled', isUsingItems);
        this.$maxValue.prop('disabled', isUsingItems);
        this.$stepValue.prop('disabled', isUsingItems);
        var options = [];
        $selectOptions.each(function (_, el) {
            options.push(el);
        });
        var newValues = $.map(options, function (option) { return option.value; });
        this.rangeslider.update({ items: { values: newValues } });
        this.updatePanelValues();
    };
    Panel.prototype.handleIndexFromInput = function (event) {
        var el = event.target;
        if (el.value.length) {
            var indexFrom = parseInt(el.value, 10);
            var indexTo = parseInt(String(this.$indexTo.val()), 10);
            if (indexFrom > indexTo)
                el.value = indexTo.toString();
            this.rangeslider.update({ items: { indexFrom: parseInt(el.value, 10) } });
            this.$valueFrom.val(this.rangeslider.data.valueFrom);
        }
    };
    Panel.prototype.handleIndexToInput = function (event) {
        var el = event.target;
        if (el.value.length) {
            var maxIndex = this.rangeslider.data.items.values.length - 1;
            var indexFrom = parseInt(String(this.$indexFrom.val()), 10);
            var indexTo = parseInt(el.value, 10);
            if (indexTo < indexFrom)
                el.value = indexFrom.toString();
            if (indexTo > maxIndex)
                el.value = maxIndex.toString();
            this.rangeslider.update({ items: { indexTo: parseInt(el.value, 10) } });
            this.$valueTo.val(this.rangeslider.data.valueTo);
        }
    };
    Panel.prototype.findIndexByItem = function (values, item) {
        return values.findIndex(function (value) { return value.toString() === item.toString(); });
    };
    Panel.prototype.handleValueFromInput = function (event) {
        var el = event.target;
        if (this.rangeslider.data.items.values.length > 1) {
            var indexFrom = this.findIndexByItem(this.rangeslider.data.items.values, el.value);
            if (indexFrom === -1)
                return;
            this.rangeslider.update({ items: { indexFrom: indexFrom } });
            this.$indexFrom.val(indexFrom);
        }
        else {
            if (Number.isNaN(Number(el.value)))
                return;
            this.rangeslider.update({ valueFrom: Number(el.value) });
        }
        this.updatePanelValues();
    };
    Panel.prototype.handleValueToInput = function (event) {
        var el = event.target;
        if (this.rangeslider.data.items.values.length > 1) {
            var indexTo = this.findIndexByItem(this.rangeslider.data.items.values, el.value);
            if (indexTo === -1)
                return;
            this.rangeslider.update({ items: { indexTo: indexTo } });
            this.$indexTo.val(indexTo);
        }
        else {
            if (Number.isNaN(Number(el.value)))
                return;
            var newValueTo = Number(el.value);
            if (this.rangeslider.data.isTwoHandles) {
                var valueFrom = Number(this.$valueFrom.val());
                if (newValueTo < valueFrom)
                    newValueTo = valueFrom;
            }
            this.rangeslider.update({ valueTo: newValueTo });
        }
        this.updatePanelValues();
    };
    Panel.prototype.handleMinValueInput = function (event) {
        var el = event.target;
        var minValue = parseInt(el.value, 10);
        if (!Number.isNaN(minValue)) {
            el.value = minValue.toString();
            var maxValue = parseInt(String(this.$maxValue.val()), 10);
            if (minValue >= maxValue) {
                el.value = (maxValue - 1).toString();
                minValue = parseInt(el.value, 10);
            }
            var toValue = parseInt(String(this.$valueTo.val()), 10);
            var fromValue = parseInt(String(this.$valueFrom.val()), 10);
            if (toValue < minValue)
                this.$valueTo.val(minValue);
            if (this.rangeslider.data.isTwoHandles && fromValue < minValue) {
                this.$valueFrom.val(el.value);
            }
            if (!this.isStepValid())
                this.$stepValue.val(this.getRangeLength().toString());
            this.rangeslider.update({
                minValue: el.value,
                valueFrom: Number(this.$valueFrom.val()),
                valueTo: Number(this.$valueTo.val()),
            });
        }
    };
    Panel.prototype.handleMaxValueInput = function (event) {
        var el = event.target;
        var maxValue = parseInt(el.value, 10);
        if (!Number.isNaN(maxValue)) {
            el.value = maxValue.toString();
            var minValue = parseInt(String(this.$minValue.val()), 10);
            if (maxValue <= minValue) {
                el.value = (minValue + 1).toString();
                maxValue = parseInt(el.value, 10);
            }
            var toValue = parseInt(String(this.$valueTo.val()), 10);
            var fromValue = parseInt(String(this.$valueFrom.val()), 10);
            if (toValue > maxValue)
                this.$valueTo.val(maxValue);
            if (this.rangeslider.data.isTwoHandles && fromValue > maxValue) {
                this.$valueFrom.val(minValue);
            }
            if (!this.isStepValid()) {
                this.$stepValue.val(this.getRangeLength().toString());
            }
            this.rangeslider.update({
                maxValue: el.value,
                valueFrom: Number(this.$valueFrom.val()),
                valueTo: Number(this.$valueTo.val()),
            });
        }
    };
    Panel.prototype.handleIsShowTipsChange = function (event) {
        var el = event.target;
        this.rangeslider.update({ isTip: el.checked });
    };
    Panel.prototype.updatePanelValues = function () {
        var isUsingItems = this.rangeslider.data.items.values.length > 1;
        this.$isVertical.prop('checked', this.rangeslider.data.isVertical);
        this.$isTwoHandles.prop('checked', this.rangeslider.data.isTwoHandles);
        this.$isShowTips.prop('checked', this.rangeslider.data.isTip);
        this.$minValue.val(isUsingItems ? this.rangeslider.data.items.values[0] : this.rangeslider.data.minValue);
        this.$maxValue.val(isUsingItems
            ? this.rangeslider.data.items.values[this.rangeslider.data.items.values.length - 1]
            : this.rangeslider.data.maxValue);
        if (this.rangeslider.data.isTwoHandles)
            this.$valueFrom.val(this.rangeslider.data.valueFrom);
        this.$valueTo.val(this.rangeslider.data.valueTo);
        if (this.select && this.select.length > 1) {
            if (this.rangeslider.data.isTwoHandles) {
                this.$indexFrom.prop('disabled', false);
                this.$indexFrom.val(this.rangeslider.data.items.indexFrom);
            }
            this.$indexTo.prop('disabled', false);
            this.$indexTo.val(this.rangeslider.data.items.indexTo);
        }
        else {
            this.$indexFrom.prop('disabled', true);
            this.$indexTo.prop('disabled', true);
        }
        this.$stepValue.val(this.rangeslider.data.stepValue);
    };
    Panel.prototype.getRangeLength = function () {
        return Number(this.$maxValue.val()) - Number(this.$minValue.val());
    };
    Panel.prototype.isStepValid = function () {
        return Number(this.$stepValue.val()) < this.getRangeLength();
    };
    Panel.prototype.preventMinusTyping = function (event) {
        if (event.key === '-')
            event.preventDefault();
    };
    Panel.prototype.handleIsVerticalChange = function (event) {
        var checkbox = event.target;
        if (checkbox.checked)
            this.$panel.addClass('panel_is-vertical');
        else
            this.$panel.removeClass('panel_is-vertical');
        this.rangeslider.update({ isVertical: checkbox.checked });
    };
    Panel.prototype.handleIsTwoHandlesChange = function (event) {
        var checkbox = event.target;
        this.rangeslider.update({ isTwoHandles: checkbox.checked });
        var isUsingItems = this.rangeslider.data.items.values.length > 1;
        if (!checkbox.checked) {
            this.$valueFrom.prop('disabled', true);
            if (isUsingItems)
                this.$indexFrom.prop('disabled', true);
        }
        else {
            this.$valueFrom.prop('disabled', false);
            if (isUsingItems)
                this.$indexFrom.prop('disabled', false);
            if (!isUsingItems) {
                var minValue = parseInt(String(this.$minValue.val()), 10);
                var maxValue = parseInt(String(this.$maxValue.val()), 10);
                var valueFrom = parseInt(String(this.$valueFrom.val()), 10);
                if (Number.isNaN(Number(valueFrom)))
                    valueFrom = minValue;
                var valueTo = parseInt(String(this.$valueTo.val()), 10);
                if (valueFrom < minValue || valueFrom > valueTo || valueFrom > maxValue)
                    valueFrom = minValue;
                this.rangeslider.update({ valueFrom: valueFrom });
            }
        }
        this.updatePanelValues();
    };
    return Panel;
}());
var $panels = $('.panel');
$panels.each(function (_, element) {
    new Panel(element);
});
//# sourceMappingURL=panel.js.map