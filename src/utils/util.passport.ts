import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

export const pasportStrategy = (): void => {
	/**
	 * @description Passport Serialize User
	 */
	passport.serializeUser((user: string, done) => {
		if (!user) return done(null, false)
		return done(null, user)
	})

	/**
	 * @description Passport Deserialize User
	 */
	passport.deserializeUser(async (user: string, done) => {
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
				callbackURL: 'http://localhost:3000/auth/google/callback'
			},
			async (accessToken: string, refreshToken: string, profile: Record<string, any>, done) => {
				try {
					if (!profile) return done(null, false)
					return done(null, { accessToken, refreshToken, profile })
				} catch (error) {
					return done(null, error)
				}
			}
		)
	)
}
