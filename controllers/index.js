const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const blogRoutes = require("./blogRoutes.js");
router.use("/api/blogs",blogRoutes)

module.exports = router;