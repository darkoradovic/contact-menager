const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name, emal, password} = req.body;

    try{
      let user = await User.findOne({emal: emal});

      if(user){
        return res.status(400).json({msg: 'User already exists'})
      }
    }catch (err){

    }
  }
);

module.exports = router;
