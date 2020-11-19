const Room = require("../model/room");
const deleteOne = async (req, resp) => {
  try {
    const id = req.params.id;
    console.log(req)
    const record = await Room.findByIdAndDelete({ _id: id});
    // console.log("vjbdskiv",_i  d)
    return resp.send(record);
  } catch (error) {
    console.log("Error", error);
  }
};
module.exports = deleteOne;
