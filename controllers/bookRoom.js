const Room = require("../model/room");
const create = async (req, resp) => {
  try {
    const body = req.body;
    const roomExists = await Room.findOne({ roomNo: body.roomNo });
    console.log("vjbdskiv",roomExists)
    if (roomExists && roomExists.isBooked) {
      return resp.send({ data: roomExists, message: "booked" });
    }

    const room = await Room.findOneAndUpdate({ roomNo: body.roomNo }, body, {
      upsert: true,
      new:true
    });
    console.log("sjknfsdk",room)

    return resp.send({ data: room, message: "success" });
  } catch (error) {
    console.log("Error", error);
  }
};
module.exports = create;
