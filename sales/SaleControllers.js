
const Sale = require('./SaleModel');

const SalesController = {};

SalesController.getAllSales = async (req, res) => {

    try {
        let result = await Sale.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "ventas" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

SalesController.newSale = async (req, res) => {

    try {
        let sale = await Sale.create({
            user_id: req.body.brand,
            bike_id: req.body.model,
            price: req.body.price,           
        })
        console.log(sale)
        if (sale) {
            res.send({ "Message": "Venta añadida correctamente" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

SalesController.updateSale = async (req, res) => {

    let _id = req.body._id;
    let newUser_id = req.body.user_id;
    let newBike_id = req.body.bike_id;
    let newPrice = req.body.price;

    try {
        let updated = await Sale.findOneAndUpdate(
            { _id: _id },
            {
                user_id: newUser_id,
                bike_id: newBike_id,
                price: newPrice,
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send('Venta actualizada')
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

SalesController.deleteSale = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Sale.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": 'Venta borrada' })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};


SalesController.getBySales = async (req, res) =>{
    let _id = req.params._id
    try {

        let result = await Sale.findOne({user_id: _id })
           

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Error" })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};

module.exports = SalesController;

