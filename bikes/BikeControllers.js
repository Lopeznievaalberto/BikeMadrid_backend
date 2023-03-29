
const Bike = require('./BikeModel');

const BikesController = {};

BikesController.getAllBikes = async (req, res) => {

    try {
        let result = await Bike.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "No se ha encontrado bicicleta." })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

BikesController.newBike = async (req, res) => {

    try {
        let bike = await Bike.create({
            img:req.body.img,
            brand: req.body.brand,
            model: req.body.model,
            state: req.body.state,
            price: req.body.price,           
        })
        console.log(bike)
        if (bike) {
            res.send({ "Message": "Bicicleta añadida correctamente" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

BikesController.updateBike = async (req, res) => {

    let _id = req.body._id;
    let newImg=req.body.img;
    let newBrand = req.body.brand;
    let newModel = req.body.model;
    let newState = req.body.state;
    let newPrice = req.body.price;

    try {
        let updated = await Bike.findOneAndUpdate(
            { _id: _id },
            {
                img:newImg,
                brand: newBrand,
                model: newModel,
                state: newState,
                price: newPrice,
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send('Bicicleta actualizada')
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

BikesController.deleteBike = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Bike.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": 'Bicicleta borrada' })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = BikesController;

