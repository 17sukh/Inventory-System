const express=require("express");
const cors=require("cors");
require("dotenv").config();

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("inventory system API is running...... ");
});

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server running on port ${PORT}'));

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/inventoryDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err));

const inventoryRoutes=require("./routes/inventoryRoutes");
app.use("/api/inventory",inventoryRoutes);