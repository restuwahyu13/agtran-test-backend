import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

/**
 * @description Passport Serialize User
 */
passport.serializeUser((user, done) => {
	if (!user) return done(null, false)
	return done(null, user)
})

/**
 * @description Passport Deserialize User
 */
passport.deserializeUser(async (user, done) => {
	if (!user) return done(null, false)
	return done(null, user)
})

/**
 * @description Passport Google Strategy
 */
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				if (!profile) return done(null, false)
				return done(null, {
					profile,
					accessToken,
					refreshToken
				})
			} catch (err) {
				return done(null, err)
			}
		}
	)
)
