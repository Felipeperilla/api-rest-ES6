const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theatreSchema = new Schema({
    name: String,
    location: String,
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }]
})

module.exports = mongoose.model('theatre', theatreSchema)