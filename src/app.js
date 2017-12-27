const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

const movieRoutes = require('./routes/movie')
const theatreRoutes = require('./routes/theatre')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cine',{
    useMongoClient:true
}
).then(db => console.log("db conect"))
.catch(err => console.log(err))

app.set('port', process.env. PORT || 3000)

app.listen(app.get('port'), ()=>{
    console.log("cuando los humanos lleguen a Marte")    
})

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/movies',movieRoutes)
app.use('/theatre',theatreRoutes)