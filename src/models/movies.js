const mongoose = require('mongoose');
const schema = mongoose.Schema;

const movieSchema = new Schema({
    title_movie : String,
    autor : String,
    time : Number
});

module.exports = mongoose.model('movie', movieSchema)
