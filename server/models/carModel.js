const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    name : {
        type : String, 
        required : true,
        trim:true
    },
    image : {
        type : String, 
        required : true
    }, 
    capacity : {
        type : Number, 
        required : true
    },
    fuelType : {
        type : String, 
        required : true
    } , 
    bookedTimeSlots : [
        {
            from : {
                type : String, 
                required : true
            },
            to : {
                type : String, 
                required : true
            }
        }
    ] , 

    rentPerHour : {
        type : Number, 
        required : true
    }


}, {
    timestamps : true
}

)
const Car = mongoose.model('Car' , carSchema)
module.exports = Car;