
const express = require('express');
const router = express.Router();

const UsersController = require('../users/UserControllers');
//const auth = require('../middlewares/auth');
//const isAdmin = require('../middlewares/isAdmin');

//router.post("/getAll", isAdmin, UsersControllers.getAll);
// router.post("/newUser", isAdmin, UsersControllers.newUser);
// router.put("/updateUser",isAdmin,  UsersControllers.updateUser);
// router.delete("/deleteUser",isAdmin,  UsersControllers.deleteUser);
router.get("/getAllUsers", UsersController.getAllUsers);
router.post("/newUser", UsersController.newUser);
router.put("/updateUser",  UsersController.updateUser);
router.delete("/deleteUser",  UsersController.deleteUser);
router.post("/login", UsersController.loginUser);


module.exports = router;
