export class Companies {
    _id : String;
    user: String;
    password: String;
    name: String;
    CIF: String;
    email: String;
    logo: String;
    address: String;
    city: String;
    sector: String;
    score: Number;
    comments: Array<String>;
    

    constructor(_id='', user='', password='', name='', CIF='', email='', logo='', address='', city='', sector='', score=0, comments=['']){
        this._id = _id;
        this.user = user;
        this.password = password;
        this.name = name;
        this.CIF = CIF;
        this.email = email;
        this.logo = logo;
        this.address = address;
        this.city = city;
        this.sector = sector;
        this.score = score;
        this.comments = comments;
    }
}
