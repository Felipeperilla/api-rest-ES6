const mongoose = require('mongoose');
const schema = mongoose.Schema;

const theatre = new Schema({
    headquarters: String,
    location: string,
    movies: [{
        type: Ob
    }]
})