const express = require('express');
const router = express.Router();

const StatesController = require('../states/StateControllers');
//const auth = require('../middlewares/auth');
//const isAdmin = require('../middlewares/isAdmin');

//router.post("/getAll", isAdmin, StatesControllers.getAll);
// router.post("/newState", isAdmin, StatesControllers.newState);
// router.put("/updateState",isAdmin,  StatesControllers.updateState);
// router.delete("/deleteState",isAdmin,  StatesControllers.deleteState);
router.get("/getAllStates", StatesController.getAllStates);
router.post("/newState", StatesController.newState);
router.put("/updateState",  StatesController.updateState);
router.delete("/deleteState",  StatesController.deleteState);



module.exports = router;