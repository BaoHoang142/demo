const db = require("../configs/mysql.config");
async function getAllProducts(){
    try {
        const [result] = await db.execute("select * from products")
        return result;
    } catch (error) {
        console.log(error)
    }
}
async function addProduct(newProduct) {
  const { nameProduct, price, description, stock, image, categoryId } =
    newProduct;
  try {
    const [result] = await db.execute(
      "insert into products (nameProduct, price, description, stock, image, categoryId) values (?, ?, ?, ?, ?, ?)",
      [nameProduct, price, description, stock, image, categoryId]
    );
    if (result.insertId) {
        return true
    }
    return false
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
    getAllProducts,
    addProduct
}