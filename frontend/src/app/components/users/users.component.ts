import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Users } from '../../models/users';

declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser(form: NgForm) {

    if(form.value._id){
      this.userService.editUser(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({html: 'User update succesfully'});
          this.getUsers();
        });
    } else {
      this.userService.createUser(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html: 'User save succesfully'});
        this.getUsers();
      });
    }
  }

  resetForm(form: NgForm) {
    if(form){
      form.reset();
      this.userService.selectedUser = new Users();
    }
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as Users[];
        console.log(res);
      });
  }

  editTeacher(user: Users){
    this.userService.selectedUser = user;
  }

  deleteTeacher(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.userService.deleteUser(_id)
        .subscribe( res => {
          this.getUsers();
          M.toast({html: 'User delete succesfully'});
        });
    }
  }

}

