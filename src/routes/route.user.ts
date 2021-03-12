import express, { Router } from 'express'
import { controller } from '../controllers'
import { loginValidator, emailValidator, registerValidator, tokenValidator, passwordValidator } from '../utils/util.validator'

const router: Router = express.Router()

router.post('/users/register', [...registerValidator()], controller.registerController)
router.post('/users/login', [...loginValidator()], controller.loginController)
router.get('/users/activation/:token', [...tokenValidator()], controller.activationController)
router.post('/users/forgot-password', [...emailValidator()], controller.forgotController)
router.post('/users/resend-token', [...emailValidator()], controller.resendController)
router.post('/users/reset-password/:token', [...tokenValidator(), ...passwordValidator()], controller.resetController)

export default router
