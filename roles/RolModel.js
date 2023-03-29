
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolSchema = new Schema ({
    
    rol_id : {
        type: ["auth","admin"],
        default:"auth",
        required: true,
        unique: true
    },
    }
);

const Rol = mongoose.model("Rol", rolSchema);
module.exports = Rol;