const express = require('express');
const router = express.Router();

const SalesController = require('../sales/SaleControllers');
//const auth = require('../middlewares/auth');
//const isAdmin = require('../middlewares/isAdmin');

//router.post("/getAll", isAdmin, SalesControllers.getAll);
// router.post("/newSale", isAdmin, SalesControllers.newSale);
// router.put("/updateSale",isAdmin,  SalesController.updateSale);
// router.delete("/deleteSale",isAdmin,  SalesControsllers.deleteSale);
//router.get("/BySales/:_id", auth, SalesController.getBySales);
router.get("/getAllSales", SalesController.getAllSales);
router.post("/newSale", SalesController.newSale);
router.put("/updateSale",  SalesController.updateSale);
router.delete("/deleteSale",  SalesController.deleteSale);
router.get("/BySales/:_id", SalesController.getBySales);



module.exports = router;