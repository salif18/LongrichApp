const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/users");

router.post("/signup", usersControllers.signup);
router.post("/login", usersControllers.login);
router.get("/stats", usersControllers.statsUsers);
router.get('/',usersControllers.readUsers)
router.get('/:id',usersControllers.readOneUser)
router.put('/:id',usersControllers.updateUser)
router.delete('/:id',usersControllers.deleteUser)

module.exports = router;
