const express=require('express');
const router=express.Router();
const productController=require("../../../controllers/api/v1/product-controller")

router.use('./product',require('./product'))
module.exports=router;