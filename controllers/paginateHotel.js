const Hotel = require("../model/hotel");
const paginate = async (req, resp) => {
  try {
    console.log("in pag")
    const body = req.body;

    console.log(body)
    const filter = {};
    filter.find = body.find;
    const hotel =await Hotel.find(filter.find);
    // console.log(hotel)
    return resp.status(200).send(hotel);
  } catch (error) {
    console.log(error)
    return resp.status(500).send(error);
  }
};
module.exports = paginate;
