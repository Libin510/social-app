const express = require("express");
const data = require("../Controller/UserRegister");
const login=require('../Controller/Userlog');
const Post=require('../Controller/PostControl')
const Getdata=require('../Controller/Getdata')
const getpost=require('../Controller/Getpost')
const deletpost=require("../Controller/Deletepost")


const router = express.Router();

router.route("/register").post(data);
router.route("/login").post(login);
router.route("/post").post(Post);
router.route("/getdata").post(Getdata);
router.route("/getpost").get(getpost);
router.route("/delet/:id").delete(deletpost);




module.exports = router;