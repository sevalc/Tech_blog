const express = require('express');
const router = express.Router();
const {User,Blog} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll().then(blogs=>{
        const hbsBlogs = blogs.map(blog=>blog.get({plain:true}))
        console.log(hbsBlogs)
        const loggedIn = req.session.user?true:false
        res.render("home",{
            blogs:hbsBlogs,
            loggedIn,
            username:req.session.user?.username})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("login")
})

router.get("/dashboard",(req,res) => {
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("login")
      
})

router.get("/blogs/:id", async (req,res) => {
    const oneBlog = await Blog.findByPk(req.params.id, {
        include:[User]
    })
    const hbsBlog = oneBlog.get({plain: true});
    console.log("************")
    console.log(hbsBlog);
    res.render("blog", {
        blog:hbsBlog,
        loggedIn:req.session.user?true:false,
        username:req.session.user?.username
    })
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[Blog]
    }).then(userData=>{
        console.log(userData);
        const hbsData = userData.get({plain:true})
        console.log("=======")
        console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("profile",hbsData)
    })
})

module.exports = router;