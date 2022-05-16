//Use mongoose dependency
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Define a new database schema for delivery
const Deliveryschema = new schema({
    userId : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    orderItems :{
        type : String,
        required: true
    },
    price : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    orderDate : {
        type : String,
        required : true
    }
})

// create mongoose model
const Delivery = mongoose.model("delivery",Deliveryschema);


//Export the order schema so that it can be accessed by other files
module.exports = Delivery;