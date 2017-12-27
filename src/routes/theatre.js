const router = require('express-promise-router')()

const
{
    index,
    newTheatre,
    getTheatre,
    replaceTheatre,
    removeTheatre,
    newMovieInTheatre

} = require('../controllers/theatre')

router.get('/',index)
router.post('/:idTheatre/movies',newMovieInTheatre)
router.post('/',newTheatre)
router.get('/:idTheatre',getTheatre)
router.put('/:idTheatre',replaceTheatre)
router.delete('/:idTheatre',removeTheatre)


module.exports = router;