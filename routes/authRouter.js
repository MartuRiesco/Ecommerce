const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/allusers", getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getOneUser);
router.delete("/:id", deleteOneUser);
router.put("/edituser", authMiddleware, updateOneUser);
module.exports = router;
