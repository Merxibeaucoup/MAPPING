const mongoose = require("mongoose")


// this creates the Pin data 

const PinSchema = new mongoose.Schema({


    // username field 

    username:{
        type: String,
        require: true,
    },
    //tiltle field

    title:{
        type: String,
        require: true,
        min: 3
    },

    // description field

    desc:{
        type: String,
        require: true,
        min:3

    },

    //ratings filed 

    rating:{
        type: Number,
        required: true,
        min: 0,
        max: 5
    },

    // latitude field 

    lat:{
        type: Number,
        require: true

    }, 

    // longitude field 

    long:{
        type: Number,
        require: true
    }
  
},

// time stamp to automatically add date and time 
{timestamps: true}
);


// export it 
module.exports = mongoose.model("Pin", PinSchema)
