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
exports.serviceRegister = void 0;
var databases_1 = require("../../databases");
var serviceRegister = function (payload) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var checkUser, addNewUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, databases_1["default"]('users').select().where({ email: payload.email }).returning('email')];
                case 1:
                    checkUser = _a.sent();
                    if (!(checkUser.length > 0)) return [3 /*break*/, 2];
                    resolve({
                        status: 409,
                        message: "register new account failed email already taken " + payload.email + ", please try again"
                    });
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, databases_1["default"]('users')
                        .insert({
                        firstName: payload.firstName,
                        lastName: payload.lastName,
                        email: payload.email,
                        password: payload.password,
                        birdDate: new Date(payload.birdDate),
                        icNumber: payload.icNumber,
                        createdAt: new Date()
                    })
                        .returning('*')];
                case 3:
                    addNewUser = _a.sent();
                    if (!addNewUser) {
                        resolve({
                            status: 403,
                            message: 'register new account failed, please try again'
                        });
                    }
                    else {
                        resolve({
                            status: 201,
                            message: "register new account successfully, please check your email " + payload.email,
                            data: addNewUser
                        });
                    }
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    resolve({
                        status: 500,
                        message: "internal server error: " + error_1
                    });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
};
exports.serviceRegister = serviceRegister;
