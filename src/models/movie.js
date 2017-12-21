const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title_movie : String,
    autor : String,
    date_initial : Date,
    language: String,
    theatres: [{
        type: Schema.Types.ObjectId,
        ref: 'theatre',
        
    }]
});

module.exports = mongoose.model('movie', movieSchema)
