const mongoose= require("mongoose")

const blockchain= new mongoose.Schema({
    symbol:{
        type:String,
           unquie:true
        },
    name:{
        type:String,
        unquie:true
    },
    marketCapUsd:String,
    priceUsd:String
})

module.exports= mongoose.model("Block",blockchain)