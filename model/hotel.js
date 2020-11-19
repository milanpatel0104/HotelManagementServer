const mongoose = require('mongoose')
const HotelSchema = mongoose.Schema({
    name:{
        type:"string"
    },
   
    totalRooms:{
        type:"number"
    },
    phone:{
        type:"number"
    },
    email:{
        type:'string'
    }

})

module.exports = mongoose.model("Hotel",HotelSchema)