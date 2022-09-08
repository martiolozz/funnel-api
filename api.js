var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var FunnelModel = require('./funnelschema');
var OrderModel = require('./orderschema');
 
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


// Save Funnel GET
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


// Save Funnel POST
router.post('/save', function(req, res) {
    var newFunnel = new FunnelModel();

    newFunnel.ClientID = req.body.ClientID;
    newFunnel.Description = req.body.Description;
    newFunnel.Title = req.body.Title;
    newFunnel.Price = req.body.Price;
    newFunnel.ProductID = req.body.ProductID;
    newFunnel.DesignID = req.body.DesignID;
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
            res.send(data.id);
        }
    });
});


// Get all Funnels
router.get('/findall', function(req, res) {
    FunnelModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});


// Get Funnels by ID 
router.get('/findById/:id', function(req,res) {
    const id = req.params.id;
    FunnelModel.findById(id)
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      console.log(err);
    });
})

// Get Funnels By User ID
router.get('/getFunnels/:id', function(req,res) {
    const id = req.params.id;
    FunnelModel.find({ClientID:id})
    .then(doc => {
        res.send(doc);
      })
      .catch(err => {
        console.log(err);
    });
})

// Insert Order
router.post('/saveOrder', function(req, res) {
    var newOrder = new OrderModel();

    newOrder.ClientID = req.body.ClientID;
    newOrder.State = req.body.State;
    newOrder.City = req.body.City;
    newOrder.Name = req.body.Name;
    newOrder.Surname = req.body.Surname;
    newOrder.Dir = req.body.Dir;
    newOrder.Email = req.body.Email;
    newOrder.Phone = req.body.Phone;
    newOrder.TotalOrder = req.body.TotalOrder;
    newOrder.ProductID = req.body.ProductID;
    newOrder.Quantity = req.body.Quantity;
    newOrder.ProductPrice = req.body.ProductPrice;

    newOrder.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send(data.id);
        }
    });
})

// Get Orders By User ID
router.get('/getOrders/:id', function(req,res) {
    const id = req.params.id;
    OrderModel.find({ClientID:id})
    .then(doc => {
        res.send(doc);
      })
      .catch(err => {
        console.log(err);
    });
})