const {authRouter} = require("./auth.router");
const { userRouter } = require("./users.route");
const {categoryRouter} = require("./category.route")
const {productRouter} = require("./products.route")
const rootRouter = (app) => {
  authRouter(app);
  userRouter(app);
  categoryRouter(app);
  productRouter(app)
};

module.exports = {rootRouter};
