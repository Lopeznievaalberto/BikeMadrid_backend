
const User=require('../users/UserModel');

module.exports = (req, res, next) => {
    let _id = req.body._id;

    User.find({
         _id : _id 
    }).then(foundUser => {
        if(foundUser[0].rol == "admin"){
            next();
        }else {
            res.send(`Acceso no válido`)
        }
    }).catch(error => {
        res.send(`Introduce _id válido`)
    })
};