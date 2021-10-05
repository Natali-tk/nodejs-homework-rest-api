const express = require("express");
const router = express.Router();
const { joiSchema } = require('../../models/user');
const { controllerWrapper, validation, authenticate} = require("../../middlewares");
const { usersController } = require('../../controllers');

router.post("/signup", validation(joiSchema), controllerWrapper(usersController.signup));
router.post("/login", validation(joiSchema), controllerWrapper(usersController.login));
router.post("/logout", authenticate, controllerWrapper(usersController.logout));
router.get('/current', authenticate, controllerWrapper(usersController.current)   );


module.exports = router;