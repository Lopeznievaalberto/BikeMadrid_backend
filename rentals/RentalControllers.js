
const Rental = require('./RentalModel');

const RentalsController = {};

RentalsController.getAllRentals = async (req, res) => {

    try {
        let result = await Rental.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Alquileres" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

RentalsController.newRental = async (req, res) => {

    try {
        let rental = await Rental.create({
            user_id: req.body.brand,
            bike_id: req.body.model,
            price: req.body.price,           
        })
        console.log(rental)
        if (rental) {
            res.send({ "Message": "Alquiler añadida correctamente" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

RentalsController.updateRental = async (req, res) => {

    let _id = req.body._id;
    let newUser_id = req.body.user_id;
    let newBike_id = req.body.bike_id;
    let newPrice = req.body.price;

    try {
        let updated = await Rental.findOneAndUpdate(
            { _id: _id },
            {
                user_id: newUser_id,
                bike_id: newBike_id,
                price: newPrice,
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send('Alquiler actualizado')
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

RentalsController.deleteRental = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Rental.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": 'Alquiler borrada' })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = RentalsController;
