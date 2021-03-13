import express, { Router } from 'express'
import { controller } from '../controllers'
import {
	loginValidator,
	emailValidator,
	registerValidator,
	tokenValidator,
	passwordValidator,
	tokenValidatorJwt
} from '../utils/util.validator'

const router: Router = express.Router()

router.post('/users/auth/register', [...registerValidator()], controller.registerController)
router.post('/users/auth/login', [...loginValidator()], controller.loginController)
router.get('/users/auth/activation/:token', [...tokenValidator()], controller.activationController)
router.post('/users/auth/forgot-password', [...emailValidator()], controller.forgotController)
router.post('/users/auth/resend-token', [...emailValidator()], controller.resendController)
router.post('/users/auth/reset-password/:token', [...tokenValidator(), ...passwordValidator()], controller.resetController)
router.post('/users/auth/refresh-token', [...tokenValidatorJwt()], controller.refreshTokenController)

export default router
