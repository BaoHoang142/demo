const { addProduct, getAllProducts } = require("../services/products.service");

async function getProducts(req,res){
    try {
        const products = await getAllProducts()
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
}
async function addProductByAdmin(req,res){
    console.log("chay vao router product");
   
    try {
        const result = await addProduct(req.body)
        const products = await getAllProducts()
        if(!result){
            return res.status(500).json({
                message: "co loi khi them san pham"
            })
        }
        res.status(201).json({
            message: "Them san pham thanh cong",
            products
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {getProducts,addProductByAdmin}