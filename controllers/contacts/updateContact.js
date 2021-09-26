const { NotFound } = require("http-errors");
const { sendSuccessRes } = require("../../helpers");
const { Contact } = require("../../models");

const updateContact = async (req, res) => {
        const { contactId } = req.params;
        const result = await Contact.findByIdAndUpdate(contactId,req.body, {new:true})
        if (!result) {
            throw new NotFound(404, `Contact with id=${contactId} not found`);
        }
        sendSuccessRes(res, { result });
};

module.exports = updateContact;