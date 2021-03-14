import express, { Router, Request, Response } from 'express'
import passport from 'passport'

const router = express.Router() as Router

router.get('/', (req: Request, res: Response) => {
	return res.status(200).send(`
  <html>
		<head>
		<title>Google Oauth</title>
			</head>
			<body>
			  <h1>Form Auth Social</h1>
				<form action="/auth/google">
				 <button type="submit">Google Social Auth</button>
				</form>
			</body>
	</html>
 `)
})
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/callback', passport.authenticate('google'), (req: Request, res: Response) => {
	return res.status(200).redirect(`http://localhost:3000/homepage`)
})
router.get('/homepage', (req: Request, res: Response) => {
	console.log(req)
	return res.status(200).json({
		method: req.method,
		status: res.statusCode,
		message: 'login successfully',
		users: req.user
	})
})

export default router
