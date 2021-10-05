const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require('joi');

const contactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        required: true,
        unuque: true,
    },
    phone: {
        type: String,
        required: true,
        unuque: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    }
}, {versionKey: false, timestamps: true });

const joiSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().min(1).required(),
  phone: Joi.string().min(1).required(),
  favorite: Joi.boolean()
});

const updateActiveJoiSchema = Joi.object({
    favorite: Joi.boolean().required()
});

const Contact = model("contact", contactSchema);

module.exports = {
    joiSchema,
    updateActiveJoiSchema,
    Contact
};