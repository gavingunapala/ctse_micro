//Use express router, request
const router = require("express").Router();
const { request } = require("express");
//use delivery model
let Delivery = require("../model/deliverymodel");

//add data to Delivery table
//./Delivery/add
//Post request
router.route("/add").post((req,res)=>{
    const userId = req.body.userId;
    const userName = req.body.userName;
    const orderItems = req.body.orderItems;
    const price = req.body.price;
    const address = req.body.address;
    const orderDate = req.body.orderDate;

    const newDelivery = new Delivery({
        userId,
        userName,
        orderItems,
        price,
        address,
        orderDate
    })

    newDelivery.save().then(()=>{
        res.json("Delivery Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//Get all Deliveries
//Get Request
router.route("/").get((req,res)=>{
    Delivery.find().then((deliveries)=>{
        res.json(deliveries)
    }).catch((err)=>{
        console.log(err)
    })
})

//update a Delivery by id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let deliveryId = req.params.id;
    const {userId,userName,orderItems,price,address,orderDate} = req.body;
    const updateDelivery = {
        userId,
        userName,
        orderItems,
        price,
        address,
        orderDate
    }

    const update = await Delivery.findByIdAndUpdate(deliveryId,updateDelivery).then(()=>{
        res.status(200).send({status: "Delivery Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete Delivery by id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let deliveryId = req.params.id;

    await Delivery.findByIdAndDelete(deliveryId).then(()=>{
        res.status(200).send({status: "Delivery deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the orders by id
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Delivery.findById(id).then((delivery)=>{
        res.json(delivery)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;