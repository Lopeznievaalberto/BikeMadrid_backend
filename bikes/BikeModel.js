
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    img: {
        type: String,
        required: false
    },
    brand:{
        type:String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    state:{
        type: Schema.ObjectId,
        ref: "State"
    },
    price:{
        type: String,
        required: true
    },
});

const Bike = mongoose.model('Bike', bikeSchema);
module.exports = Bike;