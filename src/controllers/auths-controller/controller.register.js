"use strict";
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
exports.__esModule = true;
exports.registerController = void 0;
var mail_1 = require("@sendgrid/mail");
var services_1 = require("../../services");
var util_jwt_1 = require("../../utils/util.jwt");
var template_register_1 = require("../../templates/template.register");
var util_validator_1 = require("../../utils/util.validator");
var util_encrypt_1 = require("../../utils/util.encrypt");
var registerController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, firstName, lastName, email, password, birdDate, icNumber, _b, status_1, message, data, accessToken, template, sgResponse;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                errors = util_validator_1.expressValidator(req);
                if (!(errors.length > 0)) return [3 /*break*/, 1];
                return [2 /*return*/, res.status(400).json({
                        method: req.method,
                        status: res.statusCode,
                        errors: errors
                    })];
            case 1:
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, birdDate = _a.birdDate, icNumber = _a.icNumber;
                return [4 /*yield*/, services_1.service.serviceRegister({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        birdDate: birdDate,
                        password: util_encrypt_1.hashPassword(password),
                        icNumber: icNumber
                    })];
            case 2:
                _b = _c.sent(), status_1 = _b.status, message = _b.message, data = _b.data;
                if (!(status_1 >= 400)) return [3 /*break*/, 3];
                return [2 /*return*/, res.status(status_1).json({
                        method: req.method,
                        status: res.statusCode,
                        message: message
                    })];
            case 3:
                accessToken = util_jwt_1.signAccessToken()(req, { id: data[0].userId, email: data[0].email }, { expiresIn: '5m' }).accessToken;
                template = template_register_1.tempMailRegister(data[0].email, accessToken);
                mail_1["default"].setApiKey(process.env.SG_API_KEY);
                return [4 /*yield*/, mail_1["default"].send(template)];
            case 4:
                sgResponse = _c.sent();
                if (!sgResponse) {
                    return [2 /*return*/, res.status(500).json({
                            method: req.method,
                            status: 500,
                            message: 'Server error failed to sending email activation'
                        })];
                }
                else {
                    return [2 /*return*/, res.status(status_1).json({
                            method: req.method,
                            status: res.statusCode,
                            message: message
                        })];
                }
                _c.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.registerController = registerController;
