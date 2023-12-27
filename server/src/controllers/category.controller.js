const { getAllCates, addCategory } = require("../services/category.service");

const getCategories = async (req, res) => {
  try {
    const cates = await getAllCates();
    res.status(200).json(cates);
  } catch (error) {
    console.log(error);
  }
};
const addCate = async (req, res) => {
  try {
    const { nameCategory } = req.body;
    const result = await addCategory(nameCategory);
    if (!result) {
      return res.status(500).json({
        message: "Them category that bai",
      });
    }
    const cates = await getAllCates();
    res.status(200).json({
      message: "Them category thanh cong",
      cates,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getCategories,
  addCate,
};
