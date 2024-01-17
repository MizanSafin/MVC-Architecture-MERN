const path = require("path");
const persons = require("../models/usersModel");

exports.saveUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../veiws/index.html"));
};

exports.getUsers = (req, res) => {
  let name = req.body.name;
  let age = Number(req.body.age);
  let user = { name, age };
  persons.push(user);
  res.status(201).json({
    status: "success",
    data: persons,
  });
};
