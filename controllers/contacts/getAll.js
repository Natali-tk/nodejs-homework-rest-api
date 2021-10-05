const { sendSuccessRes } = require("../../helpers");
const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const userId = req.user.id;
  const result = await Contact.find({owner:userId}, "_id name email phone favorite");
  sendSuccessRes(res, { result });
};

module.exports = getAll;
