const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"seval",
        password:"password"
    },
    {
        username:"emily",
        password:"pirate"
    },
]

const blogs = [
    {
        title:"my first blog",
        body:"Welcome to my blog, im going to do this every day! Like share subscribe",
        UserId:1
    },
    {
        title:"Javascript",
        body:"JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
        UserId:1
    },
    {
        title:"Html",
        body:"HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes.",
        UserId:2
    },
]

const filler = async () => {
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

filler();