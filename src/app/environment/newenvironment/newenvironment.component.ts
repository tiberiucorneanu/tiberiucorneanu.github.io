import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../environment.service';
import { VirtualMachine } from '../../classObject/virtualMachine';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newenvironment',
  templateUrl: './newenvironment.component.html',
  styleUrls: ['./newenvironment.component.css']
})
export class NewenvironmentComponent implements OnInit {
  form = new FormGroup({
    nameVM: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*$')]),
    vm_box: new FormControl('', [Validators.required]),
    memori: new FormControl('', [Validators.required, Validators.pattern('[0-9]*$')]),
    cpu: new FormControl('', [Validators.required, Validators.pattern('[0-9]*$'), Validators.max(8)]),
    descriere: new FormControl('', [Validators.required, Validators.maxLength(256)])
  }) 
  environments: VirtualMachine[];
  environment = new VirtualMachine();
  booleanCheckBox: boolean = false;
  constructor(private _environmentService: EnvironmentService) { }

  ngOnInit() {
  }


  //will pass the user object. import in app.modules.ts FormsModule
  addEnvironment(): void{
    this._environmentService.addEnvironment(this.environment)
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
    this.environment = null;
  }

  checkBox(){
    this.booleanCheckBox = true;
  }

}
