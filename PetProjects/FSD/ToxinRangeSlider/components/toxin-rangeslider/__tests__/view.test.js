var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import TRSView from '../core/view';
import TRSModel from '../core/model';
var path = require('path');
var less = require('less');
var fs = require('fs');
var cssFromLess;
var view;
function ConfigureJSDOM() {
    var textHTML = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><div class="test-in-jest"></div></body></html>';
    var fixWidth = '.test-in-jest {width: 390px;}.rangeslider{width: 390px;}.rangeslider__line{width: 390px;}';
    var urlLess = path.normalize(__dirname + "../../../../components/toxin-rangeslider/toxin-rangeslider.less");
    var LessFromFile = fs.readFileSync(urlLess, 'utf8');
    less.render(LessFromFile, function (e, output) {
        cssFromLess = output ? output.css : '';
    });
    document.documentElement.innerHTML = textHTML;
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssFromLess + fixWidth;
    head.appendChild(style);
}
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        ConfigureJSDOM();
        view = new TRSView($('.test-in-jest'));
        $.extend(true, view.setCurrentSettings, TRSModel.defaults);
        view.setCurrentSettings({
            isVertical: false,
            isTwoHandles: true,
            isTip: true,
            minValue: 0,
            maxValue: 1060,
            stepValue: 0,
            valueFrom: 322,
            valueTo: 720,
        });
        return [2];
    });
}); });
describe('Check result of isEqualArrays() function, return value true or false', function () {
    var ar1String = ['a', 'bb', '123'];
    var ar2String = ['a', 'bb', '123'];
    var ar3String = ['a', 'bb', '124'];
    var ar4String = ['a', 'bb', '123', 'x'];
    var ar1Number = [1, 2, 3, 4, 5];
    var ar2Number = [1, 2, 3, 4, 5];
    var ar3Number = [1, 2, 3, 4, 6];
    var ar4Number = [1, 2, 3, 4, 5, 6];
    test('isEqualArrays() function return true if two array is equal, both arrays have string type', function () {
        expect(view.isEqualArrays(ar1String, ar2String)).toBe(true);
    });
    test('isEqualArrays() function return true if two array is equal, both arrays have number type', function () {
        expect(view.isEqualArrays(ar1Number, ar2Number)).toBe(true);
    });
    describe('Check if isEqualArrays() function return false, different situations', function () {
        test('If string arrays have different length', function () {
            expect(view.isEqualArrays(ar3String, ar4String)).toBe(false);
        });
        test('If number arrays have different length', function () {
            expect(view.isEqualArrays(ar3Number, ar4Number)).toBe(false);
        });
        test('If different values in string arrays, but same length', function () {
            expect(view.isEqualArrays(ar2String, ar3String)).toBe(false);
        });
        test('If different values in number arrays, but same length', function () {
            expect(view.isEqualArrays(ar2Number, ar3Number)).toBe(false);
        });
        test('Arrays have different types', function () {
            expect(view.isEqualArrays(ar2Number, ar3String)).toBe(false);
        });
        test('First array is null', function () {
            expect(view.isEqualArrays(null, ar3String)).toBe(false);
        });
        test('Second array is null', function () {
            expect(view.isEqualArrays(ar2Number, null)).toBe(false);
        });
    });
});
describe('Check result of getNearestHandle() function. Six different tests.', function () {
    describe('If there are two handles.', function () {
        test('LMB clicked on the left of first handle', function () {
            expect(view.getNearestHandle(32)).toBe(view.handleFrom);
        });
        test('LMB clicked between two handles, closer to left handle', function () {
            expect(view.getNearestHandle(95)).toBe(view.handleFrom);
        });
        test('LMB clicked between two handles, closer to rigth handle', function () {
            expect(view.getNearestHandle(208)).toBe(view.handleTo);
        });
        test('LMB clicked on the right of second handle', function () {
            expect(view.getNearestHandle(300)).toBe(view.handleTo);
        });
    });
    describe('If there are one handle.', function () {
        beforeAll(function () {
            view.setCurrentSettings({
                isTwoHandles: false,
                valueTo: 491,
            });
        });
        test('LMB clicked on the left of handle', function () {
            expect(view.getNearestHandle(10)).toBe(view.handleTo);
        });
        test('LMB clicked on the right of handle', function () {
            expect(view.getNearestHandle(203)).toBe(view.handleTo);
        });
    });
});
describe('Check result of moveHandle() function', function () {
    test('If rangeslider has range of values from one(min.) to another(max.)  ', function () {
        var result = view.moveHandle(view.handleFrom, 10);
        var relValue = view.convertPixelValueToRelativeValue(10);
        expect(result.isFromHandle).toBe(true);
        expect(result.value).toBe(relValue);
        expect(result.isUsingItems).toBe(view.currentSettings.items.values.length > 1);
    });
    test('If rangeslider has collection of items', function () {
        view.setCurrentSettings({
            minValue: 1,
            maxValue: 5,
            valueFrom: 1,
            valueTo: 5,
            items: { values: [1, 2, 3, 4, 5], indexFrom: 0, indexTo: 4 },
        });
        var result = view.moveHandle(view.handleFrom, 20);
        var relValue = view.convertPixelValueToRelativeValue(20);
        expect(result.isFromHandle).toBe(true);
        expect(result.value).toBe(relValue);
        expect(result.isUsingItems).toBe(view.currentSettings.items.values.length > 1);
    });
});
describe('Check result of convertRelativeValueToPixelValue() function', function () {
    test('If passed value is index for values array', function () {
        view.setCurrentSettings({ items: { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] } });
        expect(view.convertRelativeValueToPixelValue(3)).toBe(102);
    });
    test('If passed value is relative value', function () {
        view.setCurrentSettings({ minValue: 100, maxValue: 1100, items: { values: [] } });
        expect(view.convertRelativeValueToPixelValue(600)).toBe(187);
    });
});
describe('Check result of convertPixelValueToRelativeValue() function ', function () {
    test('If passed value is relative value', function () {
        expect(view.convertPixelValueToRelativeValue(187)).toBe(600);
    });
});
describe('Check result of validate() function', function () {
    describe('If there are two handles', function () {
        beforeEach(function () {
            view.drawSlider(TRSModel.defaults, {
                isTwoHandles: true,
                minValue: 0,
                maxValue: 1060,
                valueFrom: 322,
                valueTo: 491,
                items: { values: [] },
            });
        });
        test('If from handle position is less than zero', function () {
            expect(view.validate(-5, view.handleFrom)).toBe(0);
        });
        test('If from handle position is bigger than to handle position', function () {
            expect(view.validate(444, view.handleFrom)).toBe(view.handleTo.getPos());
        });
        test('if to handle position is bigger than rangeslider length', function () {
            expect(view.validate(444, view.handleTo)).toBe(view.line.getSize() - view.handleTo.getSize());
        });
        test('if to handle position is less than from handle position', function () {
            expect(view.validate(10, view.handleTo)).toBe(view.handleFrom.getPos());
        });
    });
    describe('If only one handle', function () {
        beforeEach(function () {
            view.drawSlider(TRSModel.defaults, {
                isTwoHandles: false,
                minValue: 0,
                maxValue: 1060,
                valueFrom: 322,
                valueTo: 491,
                items: { values: [] },
            });
        });
        test('If to handle position is less than zero', function () {
            expect(view.validate(-15, view.handleTo)).toBe(0);
        });
        test('if to handle position is bigger than rangeslider length', function () {
            expect(view.validate(500, view.handleTo)).toBe(view.line.getSize() - view.handleTo.getSize());
        });
    });
});
describe('Check result of getSteppedPos() function', function () {
    beforeEach(function () {
        view.drawSlider(TRSModel.defaults, {
            isTwoHandles: true,
            minValue: 0,
            maxValue: 2000,
            valueFrom: 322,
            valueTo: 491,
            stepValue: 1,
            items: { values: [] },
        });
    });
    test('If there is no step', function () {
        view.currentSettings.items.values = [];
        expect(view.getSteppedPos(15)).toBe(null);
    });
    test('If there is step. Step is defined, rounding down ', function () {
        view.drawSlider(TRSModel.defaults, {
            minValue: 0,
            maxValue: 374,
            stepValue: 100,
        });
        expect(view.getSteppedPos(40)).toBe(0);
    });
    test('If there is step. Step is defined, rounding up ', function () {
        view.drawSlider(TRSModel.defaults, {
            minValue: 0,
            maxValue: 374,
            stepValue: 100,
        });
        expect(view.getSteppedPos(60)).toBe(100);
    });
    test('If there is step. Step not defined but pixel length of rangeslider is bigger than relative length, rounding down', function () {
        view.drawSlider(TRSModel.defaults, { minValue: 0, maxValue: 93.5, stepValue: 0 });
        expect(view.getSteppedPos(1)).toBe(0);
    });
    test('If there is step. Step not defined but pixel length of rangeslider is bigger than relative length, rounding up', function () {
        view.drawSlider(TRSModel.defaults, { minValue: 0, maxValue: 93.5, stepValue: 1 });
        expect(view.getSteppedPos(2)).toBe(4);
    });
    test('If there is step. Defined set of values, rounding down', function () {
        view.drawSlider(TRSModel.defaults, {
            items: { values: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], indexFrom: 0, indexTo: 9 },
        });
        expect(view.getSteppedPos(10)).toBe(0);
    });
    test('If there is step. Defined set of values, rounding up', function () {
        view.drawSlider(TRSModel.defaults, {
            items: { values: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], indexFrom: 0, indexTo: 9 },
        });
        expect(view.getSteppedPos(20)).toBe(37.4);
    });
});
//# sourceMappingURL=view.test.js.map