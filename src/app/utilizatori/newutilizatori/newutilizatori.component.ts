import { Component, OnInit } from '@angular/core';

import { User } from '../../classObject/user';
import { UserService } from '../utilizatori.services';
import { UtilizatoriComponent } from '../utilizatori.component'; 
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newutilizatori',
  templateUrl: './newutilizatori.component.html',
  styleUrls: ['./newutilizatori.component.css']
})
export class NewutilizatoriComponent implements OnInit {
  form = new FormGroup({
    nameUser: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*$')]),
    prenumeUser: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*$')]),
    grupaSerie: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Z0-9]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*$")]),
    confpassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*$")])  
  }) 
  users: User[];
  user = new User();
  booleanCheckBox: boolean = false;
  constructor(private _userService: UserService){}

  ngOnInit() {
  }

  //will pass the user object. import in app.modules.ts FormsModule
  addUser(): void{
    this._userService.addUser(this.user)
      .subscribe(
        (response) => {
          console.log(response);
          this.reset(); 
          this.booleanCheckBox = false;
          //this._userComponent.getUsers()
        }, (error) =>{console.log(error)}
      );
  }

  //cleen the text box
  private reset(){
    this.user.id = null;
    this.user.firstName = null;
    this.user.lastName = null;
    this.user.email = null;
    this.user.description = null;
    this.user.password = null;
  }

  checkBox(){
    this.booleanCheckBox = true;
  }
}
