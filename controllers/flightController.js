const { exampleModel } = require("../models/Flight");
const {v4: uuid} = require('uuid');

// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }

// adding or booking a flight
exports.bookFlight = async (req,res)=>{
    try{
        const {title, time, price, date} = await req.body;
        const newFlight ={
            id: uuid(),
            title,
            time,
            price,
            date
        };

        exampleModel.push(newFlight);

        res.status(201).json({
            message: "Flight Booked",
            newFlight
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }         
};

// getting all flights
exports.getFlight = async (req,res)=>{
    try{
        const flight = exampleModel;
        res.status(200).json({
            message: "All Flights",
            flight
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// getting a single flight
exports.updateFlight =  async (req, res)=>{
    try{
        let id = req.param.id;
        const flight = exampleModel.find((flight)=> flight.id === id);
        const {title,time,price,date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "Flight Found",
            flight
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

// deleting flight
exports.deleteFlight = async(res,req)=>{
    try{
        let id = req.params.id
        const flight = exampleModel.find((flight)=>flight.id ==id);
        flight.splice(exampleModel.indexOf(flight),1);
        res.status(200).json({
            message: "Flight Deleted",
            flight
        })
    }catch(err){
        res.status(500).json({message: err.message});
    }
};