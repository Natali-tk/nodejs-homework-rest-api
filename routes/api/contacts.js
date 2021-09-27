const express = require("express");
const router = express.Router();

const { controllerWrapper, validation} = require("../../middlewares");
const { contactsController } = require("../../controllers");
const { joiSchema, updateActiveJoiSchema } = require("../../models/contact");



router.get("/", controllerWrapper(contactsController.getAll));

router.get("/:contactId", controllerWrapper(contactsController.getContactById ));

router.post("/", validation(joiSchema, "missing required name field"), controllerWrapper(contactsController.addContact));

router.delete("/:contactId", controllerWrapper(contactsController.deleteContact));

router.put("/:contactId", validation(joiSchema, "missing fields"), controllerWrapper(contactsController.updateContact));

router.patch("/:contactId",validation(updateActiveJoiSchema, "missing field favorite"), controllerWrapper(contactsController.updateStatusContact));

module.exports = router;
