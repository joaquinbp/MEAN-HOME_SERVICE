import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly URL_API = 'http://localhost:4000/api/users';
  selectedUser: Users;
  users: Users[];

  constructor(private http: HttpClient) {
    this.selectedUser = new Users();
   }

   getUsers() {
    return this.http.get(this.URL_API);
  }

  createUser(user: Users){
    return this.http.post(this.URL_API, user);
  }

  editUser(user: Users) {
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id : String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

