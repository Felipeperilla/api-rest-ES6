const mongoose = require('mongoose');
const schema = mongoose.Schema;

const theatreSchema = new Schema({
    name: String,
    location: string,
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }]
})

module.exports = mongoose.model('theatre', theatreSchema)