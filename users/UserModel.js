
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    rol_id: {
        type: Schema.Types.ObjectId, ref: 'Rol',
        required: false,
        default:"auth"
    },
},
    {
        timestamps:true, //registro con las columnas createdAt, updatedAt
        versionKey:false
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;