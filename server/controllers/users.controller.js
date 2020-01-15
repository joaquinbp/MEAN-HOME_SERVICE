const User = require('../models/users');
const usersController = {};

usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

usersController.createUser = async (req, res) =>{
    const user = new User(req.body);
    await user.save();
    res.json({
        status: 'User save'
    });    
};

usersController.getUser = async (req, res) =>{
    const user = await User.findById(req.params.id);
    res.json(user);
};

usersController.editUser = async (req, res) =>{
    const {id} = req.params;
    const user = {
        user: req.body.user,
        password: req.body.password,
        name : req.body.name,
        surname : req.body.surname,
        email : req.body.email,
        birthday : req.body.birthday,
        address : req.body.address,
        photo : req.body.photo,

    }

    await User.findByIdAndUpdate(id,{$set:user},{new:true});
    res.json({status:'User update'});
};

usersController.deleteUser = async (req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.json({status:'User delete'});
    
}

module.exports = usersController;