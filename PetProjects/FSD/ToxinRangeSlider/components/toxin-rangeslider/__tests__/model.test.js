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
import TRSModel from '../core/model';
var model;
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        model = new TRSModel();
        return [2];
    });
}); });
describe('Check correctness of validate() function, that correct invalid values', function () {
    describe('If rangeslider has set of values', function () {
        test('Check if indexTo field value out of range (is greater than numbers of values)', function () {
            $.extend(true, model.settings, { items: { values: [1, 2, 3, 4, 5], indexTo: 10 } });
            model.validate();
            expect(model.settings.items.indexTo).toBe(4);
        });
        describe('If rangeslider has two handles', function () {
            test('Check if indexFrom field value is bigger than indexTo field value', function () {
                $.extend(true, model.settings, { items: { values: [1, 2, 3, 4, 5], indexFrom: 12, indexTo: 3 } });
                model.validate();
                expect(model.settings.items.indexFrom).toBe(3);
            });
            test('Check if indexFrom field value is less than zero', function () {
                $.extend(true, model.settings, { items: { values: [1, 2, 3, 4, 5], indexFrom: -1 } });
                model.validate();
                expect(model.settings.items.indexFrom).toBe(0);
            });
        });
    });
    describe('If rangeslider has range of values from one(min.) to another(max.)', function () {
        test('Check if stepValue field value is less than zero', function () {
            model = new TRSModel();
            $.extend(true, model.settings, { items: { values: [] }, stepValue: -5 });
            model.validate();
            expect(model.settings.stepValue).toBe(1);
        });
        test('Check if stepValue field value is greater than length of rangeslider', function () {
            model = new TRSModel();
            $.extend(true, model.settings, {
                items: { values: [] },
                minValue: 100,
                maxValue: 1000,
                stepValue: 3000,
            });
            model.validate();
            expect(model.settings.stepValue).toBe(900);
        });
        test('Check if valueTo field value is greater than maxValue field value', function () {
            $.extend(true, model.settings, { items: { values: [] }, valueTo: 1000, maxValue: 921 });
            model.validate();
            expect(model.settings.valueTo).toBe(921);
        });
        describe('If rangeslider has two handles', function () {
            test('Check if valueFrom field value is greater than valueTo field value ', function () {
                $.extend(true, model.settings, {
                    items: { values: [] },
                    valueFrom: 2000,
                    valueTo: 1234,
                    maxValue: 5000,
                });
                model.validate();
                expect(model.settings.valueFrom).toBe(1234);
            });
            test('Check if valueFrom field value is less than minValue field value ', function () {
                $.extend(model.settings, {
                    items: { values: [] },
                    valueFrom: 2000,
                    minValue: 3000,
                    maxValue: 5000,
                });
                model.validate();
                expect(model.settings.valueFrom).toBe(3000);
            });
        });
    });
});
//# sourceMappingURL=model.test.js.map