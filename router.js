
const router = require('express').Router();
//const router= express.Router();

const usersRouter = require('./users/UserViews');
const bikesRouter = require('./bikes/BikeViews');
const statesRouter=require('./states/StateViews');
const rentalsRouter=require('./rentals/RentalViews');
const salesRouter=require('./sales/SaleViews');


router.use('/users', usersRouter);
router.use('/bikes', bikesRouter);
router.use('/states', statesRouter);
router.use('/rentals', rentalsRouter);
router.use('/sales', salesRouter);

module.exports = router;
