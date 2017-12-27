const Theatre = require('../models/theatre')
const Movie = require('../models/movie')

module.exports = {

    index: async (req,res,next) => 
    {
        const theatres = await Theatre.find({})
        res.status(200).json(theatres)
    },
    newMovieInTheatre: async (req,res,next) => {
        const { idTheatre } = req.params
        const newMovie = new Movie(req.body)
        const theatre = await Theatre.findById(idTheatre)
        newMovie.theatre = theatre
        await newMovie.save()
        theatre.movies.push(newMovie)
        await theatre.save()
        res.status(200).json(newMovie)
    },
    newTheatre: async (req,res,next) => 
    {
        const newTheatre = new Theatre(req.body)
        const TheatreAdded = newTheatre.save()
        res.status(200).json({"user":"TheatreAdded"})
        
    },
    getTheatre: async (req,res,next) => 
    {
        const { idTheatre } = req.params
        const theatre = await Theatre.findById(idTheatre)
        res.status(200).json(theatre)
    },
    replaceTheatre: async (req,res,next) => 
    {
        const { idTheatre } = req.params
        const theatreUpdated = req.body
        const oldTheatre = await Theatre.findByIdAndUpdate(idTheatre,theatreUpdated)
        res.status(200).json({"Changed":theatreUpdated})
    },
    modifyTheatre: async (req,res,next) => 
    {
        const { idTheatre } = req.params
        const theatreUpdated = req.body
        const oldTheatre = await Theatre.findByIdAndUpdate(idTheatre,theatreUpdated)
        res.status(200).json({"Changed":theatreUpdated})  
    },
    removeTheatre: async (req,res,next) => 
    {
        const { idTheatre } = req.params
        const TheatreRemoved = await Theatre.findByIdAndRemove(idTheatre)
        res.status(200).json({"remove":TheatreRemoved})
    }

}
