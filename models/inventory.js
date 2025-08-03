const mongoose=require("mongoose");

const inventorySchema= new mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number,
    category:String,
    createdAt:{type:Date,default:Date.now}
});

module.exports=mongoose.model("Inventory",inventorySchema);