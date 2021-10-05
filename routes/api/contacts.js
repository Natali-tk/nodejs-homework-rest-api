const express = require("express");
const router = express.Router();

const { controllerWrapper, validation, authenticate} = require("../../middlewares");
const { contactsController } = require("../../controllers");
const { joiSchema, updateActiveJoiSchema } = require("../../models/contact");



router.get("/", authenticate, controllerWrapper(contactsController.getAll));

router.get("/:contactId", authenticate, controllerWrapper(contactsController.getContactById ));

router.post("/", authenticate, validation(joiSchema, "missing required name field"), controllerWrapper(contactsController.addContact));

router.delete("/:contactId", authenticate, controllerWrapper(contactsController.deleteContact));

router.put("/:contactId", authenticate, validation(joiSchema, "missing fields"), controllerWrapper(contactsController.updateContact));

router.patch("/:contactId", authenticate, validation(updateActiveJoiSchema, "missing field favorite"), controllerWrapper(contactsController.updateStatusContact));

module.exports = router;
