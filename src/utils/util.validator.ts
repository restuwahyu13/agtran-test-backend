import { Request } from 'express'
import { check, validationResult, ValidationError, ValidationChain, Result, Meta } from 'express-validator'

export const expressValidator = (req: Request): ValidationError[] => {
	const errors: Result<ValidationError> = validationResult(req)

	const messages: ValidationError[] = []
	if (!errors.isEmpty()) {
		for (const i of errors.array()) {
			messages.push(i)
		}
	}
	return messages
}

export const registerValidator = (): ValidationChain[] => [
	check('firstName').notEmpty().withMessage('firstName is required'),
	check('firstName')
		.not()
		.custom((val: string) => /[^a-zA-Z\s]/gi.test(val))
		.withMessage('firstName cannot include unique character'),
	check('lastName').notEmpty().withMessage('lastName is required'),
	check('lastName')
		.not()
		.custom((val: string) => /[^a-zA-Z\s]/gi.test(val))
		.withMessage('lastName cannot include unique character'),
	check('email').notEmpty().withMessage('email is required'),
	check('email').isEmail().withMessage('email is not valid'),
	check('password').notEmpty().withMessage('password is required'),
	check('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
	check('birdDate').notEmpty().withMessage('birdDate is required'),
	check('birdDate').isDate({ format: 'mm-dd-yyyy' }).withMessage('birdDate is not valid'),
	check('icNumber').notEmpty().withMessage('icNumber is required'),
	check('icNumber').isLength({ min: 10, max: 10 }).withMessage('icNumber number must be at least 10 characters'),
	check('icNumber').isNumeric().withMessage('icNumber must be a number')
]

export const loginValidator = (): ValidationChain[] => [
	check('email').notEmpty().withMessage('email is required'),
	check('email').isEmail().withMessage('email is not valid'),
	check('password').notEmpty().withMessage('pasword is required')
]

export const emailValidator = (): ValidationChain[] => [
	check('email').notEmpty().withMessage('email is required'),
	check('email').isEmail().withMessage('email is not valid')
]

export const tokenValidator = (): ValidationChain[] => [
	check('token').notEmpty().withMessage('token is required'),
	check('token').isJWT().withMessage('token is not valid')
]

export const tokenValidatorJwt = (): ValidationChain[] => [
	check('refreshToken').notEmpty().withMessage('refreshToken is required'),
	check('refreshToken').isJWT().withMessage('refreshToken is not valid')
]

export const idValidator = (): ValidationChain[] => [
	check('id').notEmpty().withMessage('id is required'),
	check('id').isNumeric().withMessage('id must be a number')
]

export const passwordValidator = (): ValidationChain[] => [
	check('password').notEmpty().withMessage('password is required'),
	check('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
	check('password')
		.not()
		.custom((value: string, { req }: Meta) => req.body.cpassword !== value)
		.withMessage('confirm password is not match with password'),
	check('cpassword').notEmpty().withMessage('cpassword is required'),
	check('cpassword').isLength({ min: 8 }).withMessage('cpassword must be at least 8 characters')
]
