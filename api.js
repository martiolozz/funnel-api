var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
// const cors = require('cors');
var FunnelModel = require('./funnelschema');
var FunnelModelTemporal = require('./funnelschematemporal');
var OrderModel = require('./orderschema');
 
// Connecting to database
var query = "mongodb+srv://xolarix:xolarix@cluster0.b0t8oys.mongodb.net/?retryWrites=true&w=majority";
 
const db = (query);
mongoose.Promise = global.Promise;
 
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});

module.exports = router;

// var corsOptions = {
//     origin: 'http://localhost:4500',
//     methods: "GET, PUT, POST"
// }

// router.use(cors(corsOptions));

// Save Funnel POST
router.post('/saveFunnel', function(req, res) {
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
            // res.redirect(`https://template-admin-dropi-funnel.vercel.app/${data.id}`);
            // res.send(data.id);
            res.json({
                'id': data.id
        });
        }
    });
});

// Save Funnel Temporal POST
router.post('/saveFunnelTemporal', function(req, res) {
    var newFunnelTemporal = new FunnelModelTemporal();

    newFunnelTemporal.ClientID = req.body.ClientID;
    newFunnelTemporal.Description = req.body.Description;
    newFunnelTemporal.Title = req.body.Title;
    newFunnelTemporal.Price = req.body.Price;
    newFunnelTemporal.ProductID = req.body.ProductID;
    newFunnelTemporal.ImageURL = req.body.ImageURL;
    newFunnelTemporal.SecondImageURL = req.body.SecondImageURL;
    newFunnelTemporal.ThirdImageURL = req.body.ThirdImageURL;
    newFunnelTemporal.FourthImageURL = req.body.FourthImageURL;
    newFunnelTemporal.FifthImageURL = req.body.FifthImageURL;
    newFunnelTemporal.SixthImageURL = req.body.SixthImageURL;

    
    newFunnelTemporal.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            // res.redirect(`https://template-admin-dropi-funnel.vercel.app/${data.id}`);
            // res.send(data.id);
            res.json({
                'id': data.id
        });
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

// Get Funnels Temporals by ID 
router.get('/findByIdTemporal/:id', function(req,res) {
    const id = req.params.id;
    FunnelModelTemporal.findById(id)
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

    // res.header('Access-Control-Allow-Origin', '*');
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