const express = require("express");
const router = express.Router();
const { joiSchema } = require('../../models/user');
const { validation, authenticate, upload} = require("../../middlewares");
const { usersController } = require('../../controllers');


router.post("/signup", validation(joiSchema), usersController.signup);
router.get("/verify/:verificationToken", usersController.verify);
router.post("/verify", usersController.reverification);
router.post("/login", validation(joiSchema), usersController.login);
router.post("/logout", authenticate, usersController.logout);
router.get("/current", authenticate, usersController.current);
router.patch("/avatars", [authenticate, upload.single("avatar")], usersController.addAvatar);


module.exports = router;