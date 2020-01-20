const User = require('../models/users');
const usersController = {};

usersController.getUsers = async (req, res) => {
    try{
        const users = await User.find();
    res.json(users);
    }catch(error){
        res.json({status: 'Get users failed'});
    } 
};

usersController.createUser = async (req, res) =>{
    try{
        const user = new User(req.body);
        await user.save();
        res.json({
            status: 'User save'
        });
    } catch(error){
        res.json({status: 'Create user failed'});
    }
       
};

usersController.getUser = async (req, res) =>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(error){
        res.json({status: 'Get user failed'});
    }    
};

usersController.editUser = async (req, res) =>{
    try{
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
            admin : req.body.admin,
    
        }
    
        await User.findByIdAndUpdate(id,{$set:user},{new:true});
        res.json({status:'User update'});
    } catch(error){
        res.json({status: 'Update user failed'});
    }

};

usersController.deleteUser = async (req, res) =>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({status:'User delete'});
    }catch(error){
        res.json({status: 'Delete user failed'});
    }    
};
    

module.exports = usersController;