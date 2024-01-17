const { getUsers, saveUsers } = require("../controllers/usersController");

const router = require("express").Router();

router.get("/users", saveUsers);

router.post("/users", getUsers);

module.exports = router;
