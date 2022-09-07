var mongoose=require('mongoose');
 
var FunnelSchema = new mongoose.Schema({
    ClientID: Number,
    Description:String,
    Title:String,
    Price:Number,
    ImageURL:String,
    SecondImageURL:String,
    ThirdImageURL:String,
    FourthImageURL:String,
    FifthImageURL:String,
    SixthImageURL:String,
});
 
module.exports = mongoose.model(
    'funnel', FunnelSchema, 'Funnels');