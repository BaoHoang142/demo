const { addProductByAdmin, getProducts } = require("../controllers/product.controller")
const { verifyToken } = require("../middlewares/middlewares")

const productRouter = (app) => {
    app.get("/api/v1/products", getProducts)
    app.post("/api/v1/product", verifyToken, addProductByAdmin)
}
module.exports = {productRouter}