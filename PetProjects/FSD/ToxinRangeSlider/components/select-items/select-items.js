"use strict";
var SelectItems = (function () {
    function SelectItems(element) {
        this.$selectItems = $(element);
        this.$buttonAdd = this.$selectItems.find('.js-select-items__button-add');
        this.$buttonRemove = this.$selectItems.find('.js-select-items__button-remove');
        this.$select = this.$selectItems.find('.js-select-items__options');
        this.select = document.querySelector('.js-select-items__options');
        this.bindThis();
        this.addEventListeners();
    }
    SelectItems.prototype.bindThis = function () {
        this.handleButtonAddClick = this.handleButtonAddClick.bind(this);
        this.handleButtonRemoveClick = this.handleButtonRemoveClick.bind(this);
    };
    SelectItems.prototype.addEventListeners = function () {
        this.$buttonAdd.on('click.buttonAdd', this.handleButtonAddClick);
        this.$buttonRemove.on('click.buttonRemove', this.handleButtonRemoveClick);
    };
    SelectItems.prototype.handleButtonAddClick = function () {
        var randomValue = Math.random();
        var newValue = parseInt((randomValue * 1000).toString(), 10).toString();
        var item = prompt('Введите новый объект', newValue);
        if (item)
            this.$select.append(new Option(item));
        if (this.select.length > 1)
            this.$selectItems.removeClass('select-items_not-using');
        else
            this.$selectItems.addClass('select-items_not-using');
        if (this.select.length > 0) {
            this.$buttonRemove.prop('disabled', false);
            this.$buttonRemove.removeClass('select-items__button-remove_disabled');
        }
    };
    SelectItems.prototype.handleButtonRemoveClick = function () {
        this.$select.find('option:selected').remove();
        if (this.select.length > 1)
            this.$selectItems.removeClass('select-items_not-using');
        else
            this.$selectItems.addClass('select-items_not-using');
        if (this.select.length === 0) {
            this.$buttonRemove.prop('disabled', true);
            this.$buttonRemove.addClass('select-items__button-remove_disabled');
        }
    };
    return SelectItems;
}());
var $selectItems = $('.js-select-items');
$selectItems.each(function (index, element) {
    new SelectItems(element);
});
//# sourceMappingURL=select-items.js.map