import { Component, OnInit } from '@angular/core';

import { User } from '../classObject/user';
import { UserService } from './utilizatori.services';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-utilizatori',
  templateUrl: './utilizatori.component.html',
  styleUrls: ['./utilizatori.component.css']
})
export class UtilizatoriComponent implements OnInit{
  //variable
  users: User[];
  //user Object
  user = new User();
  userNeededToDelete = new User();

  //override it and call getUsers method
  ngOnInit(): void{
    this.getUsers();
  }

  constructor(private _userService: UserService, private router: Router){}

  //all users method
  getUsers(): void{
    //subscribe will give as the list of users and show them in console
    //if we have errors disply them in the console
    this._userService.getAllUsers()
      .subscribe((userData) => {
        this.users = userData, 
        console.log(userData)
      }, (error) => {
        console.log(error);
      });
  }

  deleteUser(){
    //print the response in the console and refresh the table
    return this._userService.deleteUser(this.userNeededToDelete)
      .subscribe(
        (respons) => { 
          console.log(respons); 
          this.getUsers();  
        }, (error) => {console.log(error)}
      );
  }

  //  getUserById(userId: string){
  //    this._userService. getUserById(userId)
  //     .subscribe(
  //       (userData) => {
  //         this.user = userData; 
  //         this.getUsers();
  //       },(error) => {console.log(error);}
  //     );
  //  }

  onSelectUser(user){
    console.log(user.id);
    this.router.navigate(['/utilizator', user.id]);
  }

  userToDelete(user: User){
    this.userNeededToDelete = user;
  }
}
