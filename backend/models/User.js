const mongoose = require("mongoose")


// this creates the user data 

const UserSchema = new mongoose.Schema({

    //Username field
    username:{
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },

    // email field
    email:{
        type: String,
        require: true,
        max: 50,
        unique: true
    },

    //password field
    password:{
        type: String,
        require: true, 
        min: 6
    },
},

// time stamp to automatically add date and time 
{timestamps: true}
);


// export it 
module.exports = mongoose.model("User", UserSchema)
