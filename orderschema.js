var mongoose=require('mongoose');
 
var OrderSchema = new mongoose.Schema({
    ClientID: Number,
    State: String,
    City: String,
    Name: String,
    Surname: String,
    Dir: String,
    Email: String,
    Phone: String,
    TotalOrder: Number,
    ProductID: Number,
    ProductName: String,
    Quantity: Number,
    ProductPrice: Number,
    Date : String
});
 
module.exports = mongoose.model(
    'order', OrderSchema, 'Orders');