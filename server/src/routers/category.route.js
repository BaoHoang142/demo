const { getCategories, addCate } = require("../controllers/category.controller")
const { verifyToken } = require("../middlewares/middlewares")

const categoryRouter = (app) => {
    app.get("/api/v1/categories", getCategories);
    app.post("/api/v1/category",verifyToken, addCate)
}
module.exports = {
    categoryRouter
}