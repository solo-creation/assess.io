const passport = require("passport");
const userRouter = require("express").Router();
const UserController = require("")
require("../utils/passport.util");

userRouter.use(passport.initialize());
// userRouter.use(passport.session());

userRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    session: false,
  })
);

userRouter.get("/auth/google/callback", (req, res, next) => {
  passport.authenticate("google", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.redirect("/auth/google/failure");
    } else {
      return res.status(200).json({ success: true, data: user });
    }
  })(req, res, next);
});

userRouter.get("/auth/google/failure", async (req, res, next) => {
  return res
    .status(400)
    .json({ success: false, message: "Authentication failed" });
});

module.exports = userRouter;
