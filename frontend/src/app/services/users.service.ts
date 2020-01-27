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
}
