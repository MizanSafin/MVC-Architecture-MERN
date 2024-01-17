const express = require("express");
const router = require("./routes/route");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3117, () =>
  console.log(`App is running at the port http:localhost:3117`)
);
