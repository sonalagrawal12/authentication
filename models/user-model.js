const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
     email: {
        type: String,
         required:true,
        unique: true, // no two users can create two same emails
    },
    googleId: String,
    username:String
});

const User = mongoose.model('user', userSchema);
module.exports = User;