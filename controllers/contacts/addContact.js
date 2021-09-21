const { contactsOperations } = require("../../model");
const { contactSchema } = require("../../schemas");
const addContact = async (req, res, next) => {
    try {
        const { error } = contactSchema.validate(req.body);
        if (error) {
            const err = new Error(error.message);
            err.status = 400;
            throw err;
        }
        const result = await contactsOperations.addContact(req.body);
        res.status(201).json({
            status: "success",
            code: "201",
            data: {
                result
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = addContact;
