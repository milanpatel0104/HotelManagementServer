const mongoose = require('mongoose')
const RoomSchema = mongoose.Schema({

    name:{
        type:"string"
    },
    roomNo:{
        type:"number",
        unique:true
    },
    totalPerson:{
        type:"number"
    },
    isBooked:{
        type:'boolean',
        default:true
    },
phone:{
type:'number'
},
email:{
    type:"string"
}
})

module.exports = mongoose.model("Room",RoomSchema)
