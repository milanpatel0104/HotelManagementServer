// Import express
let express = require("express");
// Import Body parser
//Import Model
// require('./model')
let bodyParser = require("body-parser");
// Import Mongoose
// let mongoose = require('mongoose');
const cors = require("cors");
// const create = require('./controllers/createHotel');
// const paginate = require('./controllers/paginateHotel');

// Initialise the app
let app = express();
const request = require("request");
var router = express.Router();
var urllib = require("urllib");
const { resolve } = require("path");
router.use(function (req, res, next) {
  console.log("req", req.originalUrl);
  var net = require("net");
  var hosts = [["localhost", 3002]];
  hosts.forEach(function (item) {
    var sock = new net.Socket();
    // sock.setTimeout(2500);
    sock
      .on("connect", async function () {  try {
        console.log(2);
        var urllib = require("urllib");

        const data = await new Promise((resolve, reject) => {
          urllib.request(
            `http://localhost:3004${req.originalUrl}`,
            { method: req.method, data: req.body },
            function (err, data, res) {
              if (err) {
                console.log("err");
                reject(err);
              }
              resolve(JSON.parse(data.toString()));
            }
          );
        });
        console.log(1234, data);
        if (data) {
          console.log("IN");
          return res.send(data);
        }
      } catch (error) {
        console.log("error", error);
        return res.status(500).send(error);
      }
        sock.destroy();
      })
      .on("error", async function (e) {
        try {
          console.log(2);
          var urllib = require("urllib");
          console.log("BODY",req.body)

          const data = await new Promise((resolve, reject) => {
            urllib.request(
              `http://localhost:3004${req.originalUrl}`,
              { method: req.method, data: req.body },
              function (err, data, res) {
                if (err) {
                  console.log("err");
                  reject(err);
                }
                resolve(JSON.parse(data.toString()));
              }
            );
          });
        //   console.log(1234, data);
          if (data) {
            console.log("IN");
            return res.send(data);
          }
        } catch (error) {
          console.log("error", error);
        return res.status(500).send(error);

        }
      })
      .on("timeout", function (e) {
        console.log(item[0] + ":" + item[1] + " is down: timeout");
      })
      .connect(item[1], item[0]);
  });
  //   next();
});
// Import routes
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
// mongoose.connect('mongodb+srv://root:1234@cluster0.nd2t8.mongodb.net', { useNewUrlParser: true});

// var db = mongoose.connection;
// Added check for DB connection
// if(!db)
//     console.log("Error connecting db")
// else
//     console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 3009;
app.use("/", router);
app.use(cors());

// });
// Send message for default URL

// app.post('/hotel/create',create);
// app.post('/hotel/paginate',paginate)
// app.post('/hotel/paginate',paginate)

// Use Api routes in the App
// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});
