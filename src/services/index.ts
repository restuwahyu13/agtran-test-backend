import { serviceRegister } from './users-service/service.register'
import { serviceLogin } from './users-service/service.login'
import { serviceActivation } from './users-service/service.activation'
import { serviceForgot } from './users-service/service.forgot'
import { serviceResend } from './users-service/service.resend'
import { serviceReset } from './users-service/service.reset'

export const service = {
	serviceRegister,
	serviceLogin,
	serviceActivation,
	serviceForgot,
	serviceResend,
	serviceReset
}
