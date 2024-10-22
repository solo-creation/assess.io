const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GCP_OAUTH_CLIENT_ID,
      clientSecret: process.env.GCP_OAUTH_CLIENT_SECRET,
      callbackURL: process.env.GCP_OAUTH_CALLBACK_URL,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log("Profile: " + profile);
      request.profile = profile;
      return done(null, profile);
    }
  )
);
