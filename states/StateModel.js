
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  useStatus: {
    type: String,
    required: true   
}
});

const State = mongoose.model('State', stateSchema);
module.exports = State;
