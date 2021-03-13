import { serviceRegister } from './auths-service/service.register'
import { serviceLogin } from './auths-service/service.login'
import { serviceActivation } from './auths-service/service.activation'
import { serviceForgot } from './auths-service/service.forgot'
import { serviceResend } from './auths-service/service.resend'
import { serviceReset } from './auths-service/service.reset'

export const service = {
	serviceRegister,
	serviceLogin,
	serviceActivation,
	serviceForgot,
	serviceResend,
	serviceReset
}
