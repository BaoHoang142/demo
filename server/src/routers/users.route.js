const { getUsers } = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/middlewares");

const userRouter = (app) => {
  app.get("/api/users", verifyToken, getUsers);
};
module.exports = {
  userRouter,
};
