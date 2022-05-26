
const Blog = require('./Blogmodel.js');
const User = require('./Usermodel.js');

User.hasMany(Blog);
Blog.belongsTo(User)


module.exports = {
    User,
    Blog
}