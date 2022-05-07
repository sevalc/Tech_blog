const express = require("express");
const router = express.Router();
const {User,Blog} = require("../models");

router.get('/', async (req, res) => {
      try {
        const blogData = await Blog.findAll();
        res.status(200).json(blogData);
      } catch (err) {
        res.status(500).json(err);
      }
    });