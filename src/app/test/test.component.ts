import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  public employees = [];

  //instanta de EmployeeService
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    //Trebuie sa facem subscribe la Observable din getEmployees pentru a primi datele
    //argument of function => body of function. Asignam employee data la employees property 
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }
} 