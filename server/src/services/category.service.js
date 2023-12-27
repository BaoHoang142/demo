const db = require("../configs/mysql.config")
async function getAllCates() {
    try {
        const [result] = await db.execute("select * from category")
        return result
    } catch (error) {
        console.log(error)
    }
}
async function addCategory(name){
    try {
        const [result] = await db.execute("insert into category (nameCategory) values (?)", [name])
        if(result.insertId){
            return true
        }
        return false
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getAllCates,
    addCategory
}