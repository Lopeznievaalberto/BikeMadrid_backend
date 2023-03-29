const express = require('express');
const router = express.Router();

const RolesController = require('../roles/RolControllers');
//const auth = require('../middlewares/auth');
//const isAdmin = require('../middlewares/isAdmin');

//router.post("/getAll", isAdmin, RolesControllers.getAll);
// router.post("/newRol", isAdmin, RolesControllers.newRol);
// router.put("/updateRol",isAdmin,  RolesControllers.updateRol);
// router.delete("/deleteRol",isAdmin,  RolesControllers.deleteRol);
router.get("/getAllRoles", RolesController.getAllRoles);
router.post("/newRol", RolesController.newRol);
router.put("/updateRol",  RolesController.updateRol);
router.delete("/deleteRol",  RolesController.deleteRol);


module.exports = router;