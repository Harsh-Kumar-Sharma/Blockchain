const express = require('express');
const router = express.Router();
const block= require("../controllers/block")


router.get("/blockchain", block.getblock)

module.exports=router