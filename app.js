// Import express
let express = require('express');
// Import Body parser
//Import Model
require('./model')
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
const cors = require('cors')
const create = require('./controllers/createHotel');
const paginate = require('./controllers/paginateHotel');
const createRoom = require('./controllers/bookRoom');
const paginateRoom = require('./controllers/paginateRoom')
const deleteOne = require('./controllers/delete');
// Initialise the app
let app = express();

// Import routes
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://root:1234@cluster0.nd2t8.mongodb.net', { useNewUrlParser: true});

var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 3002;

app.use(cors())
// Send message for default URL
app.post('/hotel/create',create);
app.post('/hotel/paginate',paginate)
app.post('/room',createRoom)
app.post('/room/paginate',paginateRoom)
app.delete('/room/delete/:id',deleteOne)

// Use Api routes in the App
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});