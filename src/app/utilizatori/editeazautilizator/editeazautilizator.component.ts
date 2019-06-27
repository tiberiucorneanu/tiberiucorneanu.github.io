import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../utilizatori/utilizatori.services';
import { User } from '../../classObject/user';

@Component({
  selector: 'app-editeazautilizator',
  templateUrl: './editeazautilizator.component.html',
  styleUrls: ['./editeazautilizator.component.css']
})
export class EditeazautilizatorComponent implements OnInit {
  
  userId = new User();
  booleanCheckBox: boolean = false;

  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = (this.route.snapshot.paramMap.get('id'));
    this.getUserById(id);
  }

  getUserById(ids: string){
    this._userService.getUserById(ids)
    .subscribe(
      (userData) => {this.userId = userData;},
      (error) => {console.log(error);}
    );
    
  }

  updateUser(updateUser: User){
    this._userService.updateUser(updateUser)
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
    this.userId.id = null;
    this.userId.firstName = null;
    this.userId.lastName = null;
    this.userId.email = null;
    this.userId.description = null;
    this.userId.password = null;
  }

  checkBox(){
    this.booleanCheckBox = true;
  }

}
