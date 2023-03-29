
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    user_id:{
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    bike_id:{
        type: Schema.Types.ObjectId, ref: 'Bike',
        required: true
    },
    // date:{
    //     timestamps:true, //registro con las columnas createdAt, updatedAt
    // },
    price:{ 
        type: String
    }
});
const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;