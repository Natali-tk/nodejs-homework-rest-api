const { contactsOperations } = require("../../model");
const { contactSchema } = require("../../schemas");

const updateContact = async (req, res, next) => {
    try {
        const { error } = contactSchema.validate(req.body);
        if (error) {
            const err = new Error("Missing fields");
            err.status = 400;
            throw err;
        }
        const { contactId } = req.params;
        const result = await contactsOperations.updateContact(contactId, req.body);
        if (!result) {
            const error = new Error("Not found");
            error.status = 404;
            throw error;
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result,
            },
        });

    } catch (error) {
        next(error);
    }
};
module.exports = updateContact;