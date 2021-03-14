"use strict";
exports.__esModule = true;
exports.passwordValidator = exports.idValidator = exports.tokenValidatorJwt = exports.tokenValidator = exports.emailValidator = exports.loginValidator = exports.registerValidator = exports.expressValidator = void 0;
var express_validator_1 = require("express-validator");
var expressValidator = function (req) {
    var errors = express_validator_1.validationResult(req);
    var messages = [];
    if (!errors.isEmpty()) {
        for (var _i = 0, _a = errors.array(); _i < _a.length; _i++) {
            var i = _a[_i];
            messages.push(i);
        }
    }
    return messages;
};
exports.expressValidator = expressValidator;
var registerValidator = function () { return [
    express_validator_1.check('firstName').notEmpty().withMessage('firstName is required'),
    express_validator_1.check('firstName')
        .not()
        .custom(function (val) { return /[^a-zA-Z\s]/gi.test(val); })
        .withMessage('firstName cannot include unique character'),
    express_validator_1.check('lastName').notEmpty().withMessage('lastName is required'),
    express_validator_1.check('lastName')
        .not()
        .custom(function (val) { return /[^a-zA-Z\s]/gi.test(val); })
        .withMessage('lastName cannot include unique character'),
    express_validator_1.check('email').notEmpty().withMessage('email is required'),
    express_validator_1.check('email').isEmail().withMessage('email is not valid'),
    express_validator_1.check('password').notEmpty().withMessage('password is required'),
    express_validator_1.check('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
    express_validator_1.check('birdDate').notEmpty().withMessage('birdDate is required'),
    express_validator_1.check('birdDate').isDate({ format: 'mm-dd-yyyy' }).withMessage('birdDate is not valid'),
    express_validator_1.check('icNumber').notEmpty().withMessage('icNumber is required'),
    express_validator_1.check('icNumber').isLength({ min: 10, max: 10 }).withMessage('icNumber number must be at least 10 characters'),
    express_validator_1.check('icNumber').isNumeric().withMessage('icNumber must be a number')
]; };
exports.registerValidator = registerValidator;
var loginValidator = function () { return [
    express_validator_1.check('email').notEmpty().withMessage('email is required'),
    express_validator_1.check('email').isEmail().withMessage('email is not valid'),
    express_validator_1.check('password').notEmpty().withMessage('pasword is required')
]; };
exports.loginValidator = loginValidator;
var emailValidator = function () { return [
    express_validator_1.check('email').notEmpty().withMessage('email is required'),
    express_validator_1.check('email').isEmail().withMessage('email is not valid')
]; };
exports.emailValidator = emailValidator;
var tokenValidator = function () { return [
    express_validator_1.check('token').notEmpty().withMessage('token is required'),
    express_validator_1.check('token').isJWT().withMessage('token is not valid')
]; };
exports.tokenValidator = tokenValidator;
var tokenValidatorJwt = function () { return [
    express_validator_1.check('refreshToken').notEmpty().withMessage('refreshToken is required'),
    express_validator_1.check('refreshToken').isJWT().withMessage('refreshToken is not valid')
]; };
exports.tokenValidatorJwt = tokenValidatorJwt;
var idValidator = function () { return [
    express_validator_1.check('id').notEmpty().withMessage('id is required'),
    express_validator_1.check('id').isNumeric().withMessage('id must be a number')
]; };
exports.idValidator = idValidator;
var passwordValidator = function () { return [
    express_validator_1.check('password').notEmpty().withMessage('password is required'),
    express_validator_1.check('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
    express_validator_1.check('password')
        .not()
        .custom(function (value, _a) {
        var req = _a.req;
        return req.body.cpassword !== value;
    })
        .withMessage('confirm password is not match with password'),
    express_validator_1.check('cpassword').notEmpty().withMessage('cpassword is required'),
    express_validator_1.check('cpassword').isLength({ min: 8 }).withMessage('cpassword must be at least 8 characters')
]; };
exports.passwordValidator = passwordValidator;
