import { registerController } from './users-controller/controller.register'
import { loginController } from './users-controller/controller.login'
import { activationController } from './users-controller/controller.activation'
import { forgotController } from './users-controller/controller.forgot'
import { resendController } from './users-controller/controller.resend'
import { resetController } from './users-controller/controller.reset'

export const controller = {
	registerController,
	loginController,
	activationController,
	forgotController,
	resendController,
	resetController
}
