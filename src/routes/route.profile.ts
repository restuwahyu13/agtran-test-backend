import express, { Router } from 'express'
import { controller } from '../controllers'
import { idValidator } from '../utils/util.validator'

const router: Router = express.Router()

router.get('/users/profile/:id', [...idValidator()], controller.resultUserController)
router.delete('/users/profile/:id', [...idValidator()], controller.deleteUserController)

export default router
