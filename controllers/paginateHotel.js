const Hotel = require("../model/hotel");
const paginate = async (req, resp) => {
  try {
    const body = req.body;
    const filter = {};
    filter.find = body.find;
    const hotel =await Hotel.find(filter.find);
    return resp.status(200).send(hotel);
  } catch (error) {
    return resp.status(500).send(error);
  }
};
module.exports = paginate   ;
