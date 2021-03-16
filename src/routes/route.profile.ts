import express, { Router } from 'express'
import { controller } from '../controllers'
import { idValidator, registerValidator } from '../utils/util.validator'
import { authJwt } from '../middlewares/middleware.auth'

const router: Router = express.Router()

router.get('/users/profile/:id', [authJwt(), ...idValidator()], controller.resultUserController)
router.delete('/users/profile/:id', [authJwt(), ...idValidator()], controller.deleteUserController)
router.put('/users/profile/:id', [authJwt(), ...idValidator(), ...registerValidator()])

export default router
