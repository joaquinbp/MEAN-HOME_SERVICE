const Booking = require('../models/booking');
const bookingController = {};

bookingController.getBookings = async (req, res) => {
    const booking = await Booking.find();
    res.json(booking);
};

bookingController.createBooking = async (req, res) =>{
    const booking = new Booking(req.body);
    await booking.save();
    res.json({
        status: 'Booking save'
    });    
};

bookingController.getBooking = async (req, res) =>{
    const booking = await Booking.findById(req.params.id);
    res.json(booking);
};

bookingController.editBooking = async (req, res) =>{
    const {id} = req.params;
    const booking = {
        user: req.body.user,
        company: req.body.company,
        date : req.body.date,
        time : req.body.time,
        price : req.body.price

    }

    await Booking.findByIdAndUpdate(id,{$set:booking},{new:true});
    res.json({status:'Booking update'});
};

bookingController.deleteBooking = async (req, res) =>{
    await Booking.findByIdAndDelete(req.params.id);
    res.json({status:'Booking delete'});
    
}

module.exports = bookingController;