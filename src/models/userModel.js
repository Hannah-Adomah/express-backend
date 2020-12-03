const mongoose = require('mongoose');


//const userSchema = new mongoose.Schema({

    //username: {type: String, minlenght: 5, maxlenght: 16, unique: true},
   // email: {type: String, unique: true},
    //password: {type: String, minlenght: 8}
//})

const userSchema = new mongoose.Schema({                        //setting model keys
    username: {
        type: String,
         minlength: [5, 'minimum username length is 5'], 
         maxlength: [16, 'maximum username length is 16'],
         unique: true,
         required: [true, 'please enter a username'],
         lowercase: true
        },
    email: {
        type: String,
        unique: true,
        required: [true, 'the email field is required'],
        lowercase: true
    },
    password: {
        type: String,
         minlength: 8,
         required: [true, 'you must enter a password']
        }
});

const User = mongoose.model('user', userSchema)

module.exports = User

