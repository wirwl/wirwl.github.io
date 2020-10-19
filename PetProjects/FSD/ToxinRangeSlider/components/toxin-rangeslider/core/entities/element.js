var TRSElement = (function () {
    function TRSElement(el) {
        this._isVertical = false;
        this.$el = el;
        this.$parentElement = this.$el.parent();
    }
    TRSElement.prototype.getParentElementWidth = function () {
        return parseFloat(this.$parentElement.css('width'));
    };
    TRSElement.prototype.getParentElementHeight = function () {
        return parseFloat(this.$parentElement.css('height'));
    };
    TRSElement.prototype.isVertical = function () {
        return this._isVertical;
    };
    TRSElement.prototype.setVertical = function (value) {
        this._isVertical = value;
        this.$el.removeAttr('style');
    };
    TRSElement.prototype.getX = function () {
        return parseFloat(this.$el.css('left'));
    };
    TRSElement.prototype.setX = function (value) {
        var valueInPercent = (value / this.getParentElementWidth()) * 100;
        this.$el.css('left', valueInPercent + "%");
    };
    TRSElement.prototype.setWidth = function (value) {
        var valueInPercent = (value / this.getParentElementWidth()) * 100;
        this.$el.css('width', valueInPercent + "%");
    };
    TRSElement.prototype.getY = function () {
        return parseFloat(this.$el.css('top'));
    };
    TRSElement.prototype.setY = function (value) {
        this.$el.css('top', (value / this.getParentElementHeight()) * 100 + "%");
    };
    TRSElement.prototype.getOffsetTop = function () {
        var result;
        try {
            var offset = this.$el.offset();
            if (!offset)
                throw new Error('Offset method return undefined value. Can not get top property value from offset method!');
            result = offset.top;
        }
        catch (e) {
            throw e;
        }
        return result;
    };
    TRSElement.prototype.getOffsetLeft = function () {
        var result;
        try {
            var offset = this.$el.offset();
            if (!offset)
                throw new Error('Offset method return undefined value. Can not get left property value from offset method!');
            result = offset.left;
        }
        catch (e) {
            throw e;
        }
        return result;
    };
    TRSElement.prototype.getOffset = function () {
        return this.isVertical() ? this.getOffsetTop() : this.getOffsetLeft();
    };
    TRSElement.prototype.getPos = function () {
        return this.isVertical() ? this.getY() : this.getX();
    };
    TRSElement.prototype.setPos = function (value) {
        if (this.isVertical())
            this.setY(value);
        else
            this.setX(value);
    };
    TRSElement.prototype.getWidth = function () {
        return parseFloat(this.$el.css('width'));
    };
    TRSElement.prototype.getHeight = function () {
        return parseFloat(this.$el.css('height'));
    };
    TRSElement.prototype.setHeight = function (value) {
        this.$el.css('height', (value / this.getParentElementHeight()) * 100 + "%");
    };
    TRSElement.prototype.getSize = function () {
        return this.isVertical() ? this.getHeight() : this.getWidth();
    };
    TRSElement.prototype.setSize = function (value) {
        if (this.isVertical())
            this.setHeight(value);
        else
            this.setWidth(value);
    };
    TRSElement.prototype.appendToDomTree = function (childElement) {
        this.$el.append(childElement.$el);
    };
    TRSElement.prototype.removeFromDomTree = function () {
        this.$el.off();
        this.$el.remove();
    };
    return TRSElement;
}());
export default TRSElement;
//# sourceMappingURL=element.js.map