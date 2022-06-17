
//calls Router method
const router = require("express").Router();


//calls model
const Pin  = require("../models/Pin");

//create a pin 
// post method because we are creating something 
// req = request
// res = response
router.post("/", async(req,res) =>{

    // req.body because we are gonna send title, desc, title inside this body 
    const newPin = new Pin(req.body)

    // try saving this new pin 
     // if successfull json sends the saved pin
    try{

       
       
       const savedPin = await newPin.save();
       res.status(200).json(savedPin);

        // if there is an error, 
    }catch(err){
        res.status(500).json(err)

    }
})









//get all pins 

router.get("/", async(req, res) =>{


    try{
        const pins =  await Pin.find();

        res.status(200).json(pins);

    }catch(err){
        res.status(500).json(err)
    }
})








module.exports = router