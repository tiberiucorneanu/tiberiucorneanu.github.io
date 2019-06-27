import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { VirtualMachine } from '../classObject/virtualMachine'; 
import { camelCaseToDashCase } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {
  environmentNeededToStop = new VirtualMachine();
  environmentNeededToStart = new VirtualMachine();
  environmentNeededToDelete = new VirtualMachine();
  environments: VirtualMachine[];
  constructor(private _environmentService: EnvironmentService, private router: Router) { }
  //override
  ngOnInit() {
    this.getEnvironments();
  }

  getEnvironments(): void{
    //subscribe will give as the list of users and show them in console
    //if we have errors disply them in the console
    this._environmentService.getAllEnvironments()
      .subscribe((environmentsData) => {
        this.environments = environmentsData, 
        console.log(environmentsData)
      }, (error) => {
        console.log(error);
      });
  }

  deleteEnvironment(){
    //print the response in the console and refresh the table
    return this._environmentService.deleteEnvironment(this.environmentNeededToDelete)
      .subscribe(
        (respons) => { 
          console.log(respons); 
          this.getEnvironments();  
        }, (error) => {console.log(error)}
      );
  }
  
  startEnvironment(){
    return this._environmentService.startEnvironment(this.environmentNeededToStart)
      .subscribe(
        (respons) => { 
          console.log(respons); 
          this.getEnvironments();  
        }, (error) => {console.log(error)}
      );
  }

  stopEnvironment(){
    return this._environmentService.stopEnvironment(this.environmentNeededToStop)
      .subscribe(
        (respons) => { 
          console.log(respons); 
          this.getEnvironments();  
        }, (error) => {console.log(error)}
      );
  }

  evironmentToStart(environment: VirtualMachine){
    this.environmentNeededToStart = environment;
    this.startEnvironment();
  }

  evironmentToStop(environment: VirtualMachine){
    this.environmentNeededToStop = environment;
    this.stopEnvironment();
  }

  evironmentToDelete(environment: VirtualMachine){
    this.environmentNeededToDelete = environment;
  }

  evironmentToScallUP(environment: VirtualMachine){
    environment.id = "";
    environment.name = environment.name + "_copie";
    console.log(environment.name);
    this._environmentService.addEnvironment(environment)
      .subscribe(
        (response) => {
          console.log(response);
          //this._userComponent.getUsers()
        }, (error) =>{console.log(error)}
      );
  }

  onSelectEnvironment(environment){
    console.log(environment.id);
    this.router.navigate(['/environment', environment.id]);
  }
}
