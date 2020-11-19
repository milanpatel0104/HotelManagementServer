const room = require("../model/room");
const Room = require("../model/room");
const paginate = async (req, resp) => {
  try {
    const body = req.body;
    const filter = {};
    filter.find = body.find;
    const rooms =await Room.find(filter.find);
    return resp.status(200).send(rooms);
  } catch (error) {
    return resp.status(500).send(error);
  }
};
module.exports = paginate   ;
