const Hotel = require("../model/hotel");
const create = async (req, resp) => {
  try {
    console.log("body",req.body)
    const hotelObj = new Hotel(req.body);
    const hotel = await hotelObj.save();
    return resp.send(hotel);
  } catch (error) {
    console.log("Error", error);
  }
};
module.exports = create;
