import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnvironmentService } from '../../environment/environment.service';
import { VirtualMachine } from 'app/classObject/virtualMachine';

@Component({
  selector: 'app-editeazaenvironment',
  templateUrl: './editeazaenvironment.component.html',
  styleUrls: ['./editeazaenvironment.component.css']
})
export class EditeazaenvironmentComponent implements OnInit {

  environmentId = new VirtualMachine();
  booleanCheckBox: boolean = false;

  constructor(private _environmentService: EnvironmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = (this.route.snapshot.paramMap.get('id'));
    this.getEnvironmentById(id);
  }

  getEnvironmentById(ids: string){
    this._environmentService.getEnvironmentById(ids)
    .subscribe(
      (environentData) => {this.environmentId = environentData;},
      (error) => {console.log(error);}
    );
    
  }
  
  updateEnvironment(updateUser: VirtualMachine){
    this._environmentService.updateEnvironment(updateUser)
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
    this.environmentId.id = null;
    this.environmentId.name = null;
    this.environmentId.vm_box = null;
    this.environmentId.cpu = null;
    this.environmentId.description = null;
    this.environmentId.memori = null;
  }

  checkBox(){
    this.booleanCheckBox = true;
  }

}
