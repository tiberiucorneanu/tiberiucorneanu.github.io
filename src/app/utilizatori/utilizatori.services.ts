import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../classObject/user';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

//in angular se numesc decoratori nu annotari
@Injectable()
export class UserService{

    constructor(private _httpService: Http){}

    //we need to register the user services inside app.module.ts. Tell angular the provider is UserServices si sa importam HttpModule
    getAllUsers(): Observable<User[]>{
        //in get method = we provide our service endpoint; 
        //map = return list of records i will call the respons and get them colling json method on this response obj
        //response.json() = return body as parsed JSON object or exception
        //catch if something went wrong
        return this._httpService.get("https://localhost:8443/api/user")
            .map((response: Response) => response.json())
            .catch(this.handleError);
        
    }

    //se coupa de erori
    private handleError(error: Response) {

        return Observable.throw(error);
    }

    addUser(user: User){
        let body = JSON.stringify(user);
        //pass the content type which is aoolication/JSON cintent
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        //pass body and options
        return this._httpService.post("https://localhost:8443/api/user", body, options);
    }

    updateUser(user: User){
        let body = JSON.stringify(user);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._httpService.put('https://localhost:8443/api/user/update/'+user.id, body, options);
    }

    deleteUser(user: User){
        console.log(user.id);
        return this._httpService.delete("https://localhost:8443/api/user/delete/"+ user.id);
    }

    getUserById(userId: string): Observable<User>{
        return this._httpService.get('https://localhost:8443/api/user/' + userId)
            .map((respons: Response) => respons.json())
            .catch(this.handleError);
    }
}