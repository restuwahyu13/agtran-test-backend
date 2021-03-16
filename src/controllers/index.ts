import { registerController } from './auths-controller/controller.register'
import { loginController } from './auths-controller/controller.login'
import { activationController } from './auths-controller/controller.activation'
import { forgotController } from './auths-controller/controller.forgot'
import { resendController } from './auths-controller/controller.resend'
import { resetController } from './auths-controller/controller.reset'
import { refreshTokenController } from './auths-controller/controller.refreshToken'
import { resultUserController } from './profiles-controller/controller.result'
import { deleteUserController } from './profiles-controller/controller.delete'

export const controller = {
	registerController,
	loginController,
	activationController,
	forgotController,
	resendController,
	resetController,
	refreshTokenController,
	resultUserController,
	deleteUserController
}
