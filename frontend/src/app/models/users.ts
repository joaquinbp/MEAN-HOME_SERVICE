export class Users {
    
    _id : String;
    user: String;
    password: String;
    name: String;
    surname: String;
    email: String;
    birthday: String;
    address: String;
    photo: String;
    admin: Boolean;

    constructor(_id='', user='', password='', name='', surname='', email='', birthday='', address='', photo='', admin=false){
        this._id = _id;
        this.user = user;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthday = birthday;
        this.address = address;
        this.photo  = photo;
        this.admin = admin;
    }
}
