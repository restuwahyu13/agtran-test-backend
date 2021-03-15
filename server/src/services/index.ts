import { serviceRegister } from './auths-service/service.register'
import { serviceLogin } from './auths-service/service.login'
import { serviceActivation } from './auths-service/service.activation'
import { serviceForgot } from './auths-service/service.forgot'
import { serviceResend } from './auths-service/service.resend'
import { serviceReset } from './auths-service/service.reset'
import { serviceResultUser } from './profiles-service/service.result'
import { serviceDeleteUser } from './profiles-service/service.delete'
import { serviceUpdateUser } from './profiles-service/service.update'

export const service = {
	serviceRegister,
	serviceLogin,
	serviceActivation,
	serviceForgot,
	serviceResend,
	serviceReset,
	serviceResultUser,
	serviceDeleteUser,
	serviceUpdateUser
}
