
const Rol = require('./RolModel');

const RolesController = {};

RolesController.getAllRoles = async (req, res) => {

    try {
        let result = await Rol.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "roles" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

RolesController.newRol = async (req, res) => {

    try {
        let rol = await Rol.create({
            rol_id: req.body.rol_id,
            type: req.body.type,         
        })
        console.log(rol)
        if (rol) {
            res.send({ "Message": "Rol añadido correctamente" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

RolesController.updateRol = async (req, res) => {

    let _id = req.body._id;
    let newRol_id = req.body.rol_id;
    let newType = req.body.type;

    try {
        let updated = await Rol.findOneAndUpdate(
            { _id: _id },
            {
                rol_id: newRol_id,
                type: newType,
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send('Rol actualizada')
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

RolesController.deleteRol = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Rol.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": 'Rol borrada' })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = RolesController;
