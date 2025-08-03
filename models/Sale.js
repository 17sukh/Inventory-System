const mongoose=require("mongoose");

const saleSchema= new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Inventory"},
    quantitySold:Number,
    totalPrice:Number,
    soldAt:{type:Date,default:Date.now}
});

module.exports=mongoose.model("Sale",saleSchema);