export class Booking {
    _id : String;
    id_user : String;
    id_company : String;
    user: String;
    company: String;
    date: String;
    time: String;
    price: String;

    constructor(_id='', id_user='', id_company='', user='', company='', date='', time='', price=''){
        this._id = _id;
        this.id_user = id_user;
        this.id_company = id_company;
        this.user = user;
        this.company = company;
        this.date = date;
        this.time = time;
        this.price = price;
    }
}
