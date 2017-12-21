const Movie = require('../models/movie')

module.exports = {
    index: async (req,res,next) => 
    {
        const movies = await Movie.find({})
        res.status(200).json(movies)
    },
    newMovie: async (req,res,next) => 
    {
        const newMovie = new Movie(req.body)
        const movieAdded = newMovie.save()
        res.status(200).json(movieAdded)
    },
    getMovie: async (req,res,next) => 
    {
        const { idMovie } = req.params
        const movie = await Movie.findById(idMovie)
        res.status(200).json(movie)
    },
    replaceMovie: async (req,res,next) => 
    {
        const { idMovie } = req.params
        const movieUpdated = req.body
        const oldMovie = await Movie.findByIdAndUpdate(idMovie,movieUpdated)
        res.status(200).json({"Changed":movieUpdated})
    },
    modifyMovie: async (req,res,next) => 
    {
        const { idMovie } = req.params
        const movieUpdated = req.body
        const oldMovie = await Movie.findByIdAndUpdate(idMovie,movieUpdated)
        res.status(200).json({"Changed":movieUpdated})  
    },
    removeMovie: async (req,res,next) => 
    {
        const { idMovie } = req.params
        const movieRemoved = await Movie.findByIdAndRemove(idMovie)
        res.status(200).json({"remove":movieRemoved})
    }

};