const express = require("express");
const bodyParser = require("body-parser");
const passport =require("passport");
const passportAuth = require('./config/jwt-middleware');
const { PORT } = require("./config/serverconfig");
const morgan = require("morgan");
const v1ApiRoutes = require("./routes/index");

const setupAndstartserver = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(morgan("combined"));
  app.use(passport.initialize());
  passportAuth(passport);
  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
    // if (process.env.SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }
  });
};
setupAndstartserver();