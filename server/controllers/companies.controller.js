const Company = require('../models/companies');
const companiesController = {};

companiesController.getCompanies = async (req, res) => {
    const companies = await Company.find();
    res.json(companies);
};

companiesController.createCompany = async (req, res) =>{
    const company = new Company(req.body);
    await company.save();
    res.json({
        status: 'Company save'
    });    
};

companiesController.getCompany = async (req, res) =>{
    const company = await Company.findById(req.params.id);
    res.json(company);
};

companiesController.editCompany = async (req, res) =>{
    const {id} = req.params;
    const company = {
        user: req.body.user,
        password: req.body.password,
        name : req.body.name,
        CIF : req.body.CIF,
        email : req.body.email,
        logo : req.body.logo,
        address : req.body.address,
        sector : req.body.sector,
        address : req.body.address,
        sector : req.body.sector,
        score: req.body.score,
        comments : req.body.comments

    }

    await Company.findByIdAndUpdate(id,{$set:company},{new:true});
    res.json({status:'Company update'});
};

companiesController.deleteCompany = async (req, res) =>{
    await Company.findByIdAndDelete(req.params.id);
    res.json({status:'Company delete'});
    
}

module.exports = companiesController;