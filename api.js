var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var FunnelModel = require('./funnelschema');
 
// Connecting to database
var query = "mongodb+srv://martio:Jm1125920@cluster0.ummwxjl.mongodb.net/Dropi?retryWrites=true&w=majority";
 
const db = (query);
mongoose.Promise = global.Promise;
 
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
 
module.exports = router;

router.get('/save', function(req, res) {

    var newFunnel = new FunnelModel({
        ClientID:00001,
        Description: "Es algo muy lindo",
        Title: "Objeto",
        Price: 25000,
        ImageURL:"https://tikitiki",
        SecondImageURL:"https://tikitiki",
        ThirdImageURL:"https://tikitiki",
        FourthImageURL:"https://tikitiki",
        FifthImageURL:"https://tikitiki",
        SixthImageURL:"https://tikitiki"
    });

    newFunnel.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send(data.id);
        }
    });
});

router.post('/save', function(req, res) {
    var newFunnel = new FunnelModel();

    newFunnel.ClientID = req.body.ClientID;
    newFunnel.Description = req.body.Description;
    newFunnel.Title = req.body.Title;
    newFunnel.Price = req.body.Price;
    newFunnel.ImageURL = req.body.ImageURL;
    newFunnel.SecondImageURL = req.body.SecondImageURL;
    newFunnel.ThirdImageURL = req.body.ThirdImageURL;
    newFunnel.FourthImageURL = req.body.FourthImageURL;
    newFunnel.FifthImageURL = req.body.FifthImageURL;
    newFunnel.SixthImageURL = req.body.SixthImageURL;

    newFunnel.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});