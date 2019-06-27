import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  //pas1
  private _url: string = "/assets/data/employees.json";

  //local variabila http ce face referire la o instanta de HttpClient
  constructor(private http: HttpClient) { }

  //pas2
  getEmployees() : Observable<IEmployee[]>{
    //url= ca argument de la un web server
    //va returna observable si dorim sa il cast it (creiem in app/employee.ts) in IEmployee array
    return this.http.get<IEmployee[]>(this._url);
    
  }
}
