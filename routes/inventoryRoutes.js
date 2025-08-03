const express=require("express");
const router=express.Router();
const Inventory=require("../models/inventory");

router.post("/",async(req,res)=>{
    try{
        const newItem= new Inventory(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

router.get("/",async(req,res)=>{
    try{
        const items=await Inventory.find();
        res.json(items);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

router.put("/:id",async(req,res)=>{
    try{
        const updatedItem=await Inventory.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedItem);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        await Inventory.findByIdAndDelete(req.params.id);
        res.json({message:"Item deleted successfully"});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

module.exports=router;