const express = require('express');
const router = express.Router();

const BikesController = require('../bikes/BikeControllers');
//const auth = require('../middlewares/auth');
//const isAdmin = require('../middlewares/isAdmin');

//router.post("/getAll", isAdmin, BikesControllers.getAll);
// router.post("/newBike", isAdmin, BikesControllers.newUser);
// router.put("/updateBike",isAdmin,  BikesControllers.updateUser);
// router.delete("/deleteBike",isAdmin,  BikesControllers.deleteUser);
router.get("/getAllBikes", BikesController.getAllBikes);
router.post("/newBike", BikesController.newBike);
router.put("/updateBike",  BikesController.updateBike);
router.delete("/deleteBike",  BikesController.deleteBike);



module.exports = router;