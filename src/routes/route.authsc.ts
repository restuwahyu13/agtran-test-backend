import express, { Router } from 'express'
import passport from 'passport'

const router = express.Router() as Router

const urlRedirect = process.env.NODE_ENV !== 'production' ? process.env.URL_DEV : process.env.URL_PROD

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get(
	'/auth/google/callback',
	passport.authenticate('google', { failureRedirect: `${urlRedirect}/login`, successRedirect: `${urlRedirect}/dashboard` })
)
export default router
