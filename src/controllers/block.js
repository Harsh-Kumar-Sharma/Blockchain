const blockchain= require('../model/blockchainModel')
const axios = require("axios")

const getblock= async (req,res)=>{
    try {
         let key =req.query.key
        let options ={
            method: "get",
            url :`http://api.coincap.io/v2/assets?appid=${key}`
        }

        let result = await axios(options)
        
            let x=result.data.data;
     
   x.sort((a,b)=>{return a.changePercent24Hr-b.changePercent24Hr});
    //empty collection 
   let db= await blockchain.deleteMany();
   //save database
   for(i of x){
    let store= await blockchain.create(i)
   }
   let fine =await blockchain.find()
        res.status(200).send({stauts:true,result:fine.length,data:fine})
    }
    catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports.getblock=getblock