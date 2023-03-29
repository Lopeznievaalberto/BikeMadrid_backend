
const State = require('./StateModel');

const StatesControllers = {};

StatesControllers.getAllStates = async (req, res) => {

    try {
        let result = await State.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "states" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

StatesControllers.newState = async (req, res) => {

    try {
        let state = await State.create({
            useStatus: req.body.useStatus,       
        })
        console.log(state)
        if (state) {
            res.send({ "Message": "states" })
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

StatesControllers.updateState = async (req, res) => {

    let _id = req.body._id;
    let newUseStatus = req.body.useStatus;

    try {
        let updated = await State.findOneAndUpdate(
            { _id: _id },
            {
                useStatus: newUseStatus,
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send('states')
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

StatesControllers.deleteState = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await State.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": 'states' })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = StatesControllers;