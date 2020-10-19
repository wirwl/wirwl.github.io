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
import TRSPresenter from '../core/presenter';
var path = require('path');
var fs = require('fs');
var less = require('less');
var cssFromLess;
var presenter;
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
    var options;
    return __generator(this, function (_a) {
        ConfigureJSDOM();
        options = {
            isVertical: false,
            isTwoHandles: true,
            isTip: true,
            minValue: 0,
            maxValue: 1060,
            stepValue: 0,
            valueFrom: 322,
            valueTo: 720,
            items: { values: [], indexFrom: 0, indexTo: 0 },
        };
        presenter = new TRSPresenter(new TRSModel(options), new TRSView($('.test-in-jest')));
        return [2];
    });
}); });
describe('Check if model is updated after handles position change', function () {
    test('Left handle', function () {
        presenter.onHandlePositionUpdate(presenter.view.handleFrom, 150);
        expect(presenter.model.settings.valueFrom).toBe(425);
    });
    test('Right handle', function () {
        presenter.onHandlePositionUpdate(presenter.view.handleFrom, 200);
        expect(presenter.model.settings.valueFrom).toBe(567);
    });
});
//# sourceMappingURL=presenter.test.js.map