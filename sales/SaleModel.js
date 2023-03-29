
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    bike_id: {
        type: Schema.Types.ObjectId, ref: 'Bike',
        required: true
    },
    // date:{
    //     timestamps:true, //registro con las columnas createdAt, updatedAt
    // },
    price: {
        type: String
    },
}, 
{
    timestamps: true, //registro con las columnas createdAt, updatedAt
    versionKey: false
}
);

const Sale = mongoose.model("Sale", saleSchema);
module.exports = Sale;