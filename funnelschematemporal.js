var mongoose=require('mongoose');
 
var FunnelSchemaTemporal = new mongoose.Schema({
    ClientID: Number,
    Description:String,
    Title:String,
    Price:Number, 
    ProductID:Number,
    ImageURL:String,
    SecondImageURL:String,
    ThirdImageURL:String,
    FourthImageURL:String,
    FifthImageURL:String,
    SixthImageURL:String,
});
 
module.exports = mongoose.model(
    'funnelTemporal', FunnelSchemaTemporal, 'TemporalFunnels');