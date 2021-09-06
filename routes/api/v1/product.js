const express=require("express")
const router=express.Router();
const {body}=require("express-validator");
const productController=require('../../../controllers/api/v1/product-controller')
// Creating
router.post('/create',[
    body("name").not().isEmpty().withMessage("Name is empty"),
    body("quantity").isFloat({gt:0}).withMessage("quantity is less than 0")

],productController.createProduct)
// getting all products
router.get("/all",productController.getProduct);
// updating the product based on id
router.put('/update/:id',[
    body("quantity").isFloat({gt:0}).withMessage("qty should be greater than 0")

],productController.updateProduct);
// deleting a product
router.delete('/delete',productController.deleteProduct)
module.exports=router;