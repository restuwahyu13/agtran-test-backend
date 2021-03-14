"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordValidator = exports.idValidator = exports.tokenValidatorJwt = exports.tokenValidator = exports.emailValidator = exports.loginValidator = exports.registerValidator = exports.expressValidator = void 0;
const express_validator_1 = require("express-validator");
const expressValidator = (req) => {
    const errors = express_validator_1.validationResult(req);
    const messages = [];
    if (!errors.isEmpty()) {
        for (const i of errors.array()) {
            messages.push(i);
        }
    }
    return messages;
};
exports.expressValidator = expressValidator;
const registerValidator = () => [
    express_validator_1.check('firstName').notEmpty().withMessage('firstName is required'),
    express_validator_1.check('firstName')
        .not()
        .custom((val) => /[^a-zA-Z\s]/gi.test(val))
        .withMessage('firstName cannot include unique character'),
    express_validator_1.check('lastName').notEmpty().withMessage('lastName is required'),
    express_validator_1.check('lastName')
        .not()
        .custom((val) => /[^a-zA-Z\s]/gi.test(val))
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
];
exports.registerValidator = registerValidator;
const loginValidator = () => [
    express_validator_1.check('email').notEmpty().withMessage('email is required'),
    express_validator_1.check('email').isEmail().withMessage('email is not valid'),
    express_validator_1.check('password').notEmpty().withMessage('pasword is required')
];
exports.loginValidator = loginValidator;
const emailValidator = () => [
    express_validator_1.check('email').notEmpty().withMessage('email is required'),
    express_validator_1.check('email').isEmail().withMessage('email is not valid')
];
exports.emailValidator = emailValidator;
const tokenValidator = () => [
    express_validator_1.check('token').notEmpty().withMessage('token is required'),
    express_validator_1.check('token').isJWT().withMessage('token is not valid')
];
exports.tokenValidator = tokenValidator;
const tokenValidatorJwt = () => [
    express_validator_1.check('refreshToken').notEmpty().withMessage('refreshToken is required'),
    express_validator_1.check('refreshToken').isJWT().withMessage('refreshToken is not valid')
];
exports.tokenValidatorJwt = tokenValidatorJwt;
const idValidator = () => [
    express_validator_1.check('id').notEmpty().withMessage('id is required'),
    express_validator_1.check('id').isNumeric().withMessage('id must be a number')
];
exports.idValidator = idValidator;
const passwordValidator = () => [
    express_validator_1.check('password').notEmpty().withMessage('password is required'),
    express_validator_1.check('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
    express_validator_1.check('password')
        .not()
        .custom((value, { req }) => req.body.cpassword !== value)
        .withMessage('confirm password is not match with password'),
    express_validator_1.check('cpassword').notEmpty().withMessage('cpassword is required'),
    express_validator_1.check('cpassword').isLength({ min: 8 }).withMessage('cpassword must be at least 8 characters')
];
exports.passwordValidator = passwordValidator;
//# sourceMappingURL=util.validator.js.map