"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
/**
 * @description Passport Serialize User
 */
passport_1.default.serializeUser((user, done) => {
    if (!user)
        return done(null, false);
    return done(null, user);
});
/**
 * @description Passport Deserialize User
 */
passport_1.default.deserializeUser(async (user, done) => {
    if (!user)
        return done(null, false);
    return done(null, user);
});
/**
 * @description Passport Google Strategy
 */
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    try {
        if (!profile)
            return done(null, false);
        return done(null, {
            profile,
            accessToken,
            refreshToken
        });
    }
    catch (err) {
        return done(null, err);
    }
}));
//# sourceMappingURL=util.passport.js.map