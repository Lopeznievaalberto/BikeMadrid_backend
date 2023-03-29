const express = require('express');
const router = express.Router();

const RentalsController = require('../rentals/RentalControllers');
//const auth = require('../middlewares/auth');
//const isAdmin = require('../middlewares/isAdmin');

//router.post("/getAll", isAdmin, RentalsControllers.getAll);
// router.post("/newRental", isAdmin, RentalsControllers.newRental);
// router.put("/updateRental",isAdmin,  RentalsControllers.updateRental);
// router.delete("/deleteRental",isAdmin,  RentalsControllers.deleteRental);
router.get("/getAllRentals", RentalsController.getAllRentals);
router.post("/newRental", RentalsController.newRental);
router.put("/updateRental",  RentalsController.updateRental);
router.delete("/deleteRental",  RentalsController.deleteRental);



module.exports = router;