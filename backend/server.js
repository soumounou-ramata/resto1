const express = require('express');
const app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.raw({type: "*/*"}));
const MongoClient = require("mongodb").MongoClient;

app.listen(5000, 
    function(){
        console.log("Server listening from resto1");
    }
)

app.post('/', function(req, res){
    let body = JSON.parse(req.body.toString());

    let clientReservation = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        guests: body.guests,
        date: body.date.substr(0, 10),
        time: body.time,
        phone: body.phone,
        message: body.message 
    }
    let reservationState;

    MongoClient.connect(url, function(err, db){
        if(err)
            throw err;
        let dbo = db.db("resto1");
        
        /*Check if reservation already exists*/
        dbo.collection("reservations").findOne({firstName: body.firstName, lastName: body.lastName, email: body.email, date: body.date.substr(0, 10), time: body.time}, (err, result) =>{
            if(err)
                throw err;
            if(result){
                reservationState = {
                    status: false,
                    message: "reservation could not be completed as it already exists"
                }
                db.close();
                res.send(JSON.stringify(reservationState));
               
            }
            else{
                dbo.collection("reservations").insertOne(clientReservation, (err, result) =>{
                    if(err)
                        throw err;
                    console.log("connection successful");
                    reservationState = {
                        status: true,
                        message: "reservation successful"
                    }
                    db.close();
                    res.send(JSON.stringify(reservationState));
                });
            }

        })
    })
})
