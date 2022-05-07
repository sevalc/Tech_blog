const express = require("express");
const router = express.Router();
const {User,Blog} = require("../models/");
const bcrypt  = require("bcrypt");

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [{ model: Blog }]
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });