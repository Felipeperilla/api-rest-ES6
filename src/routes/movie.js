// const express = require('express')
// const router = express.Router()

const router = require('express-promise-router')()

const
{
    index,
    newMovie,
    getMovie,
    replaceMovie,
    removeMovie

} = require('../controllers/movie')

router.get('/',index)
router.post('/',newMovie)
router.get('/:idMovie',getMovie)
router.put('/:idMovie',replaceMovie)
router.delete('/:idMovie',removeMovie)

module.exports = router;