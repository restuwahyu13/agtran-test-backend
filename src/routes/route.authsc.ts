import express, { Router, Request, Response } from 'express'
import passport from 'passport'

const router = express.Router() as Router

const urlRedirect = process.env.NODE_ENV !== 'production' ? process.env.URL_DEV : process.env.URL_PROD

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/callback', passport.authenticate('google'), (req: Request, res: Response) => {
	return res.status(200).redirect(`${urlRedirect}`)
})

router.post('/auth/google/response', (req: Request, res: Response) => {
	if (req.user) {
		return res.status(200).json(req.user)
	} else {
		return res.status(400).redirect(`${urlRedirect}/login`)
	}
})

export default router
