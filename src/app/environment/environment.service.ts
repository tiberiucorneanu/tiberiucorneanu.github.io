import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { VirtualMachine } from '../classObject/virtualMachine';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

//in angular se numesc decoratori nu annotari
@Injectable()
export class EnvironmentService{
    //dependency injection
    constructor(private _httpService: Http){}

    //we need to register the user services inside app.module.ts. Tell angular the provider is EnvironmentService si sa importam HttpModule
    getAllEnvironments(): Observable<VirtualMachine []>{
        return this._httpService.get("https://localhost:8443/api/environment")
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    //se coupa de erori
    private handleError(error: Response) {
        return Observable.throw(error);
    }

    deleteEnvironment(environment: VirtualMachine){
        console.log(environment.id);
        return this._httpService.delete("https://localhost:8443/api/environment/delete/"+ environment.id);
    }

    startEnvironment(environment: VirtualMachine){
        return this._httpService.get("https://localhost:8443/api/environment/start/"+ environment.id);
    }

    stopEnvironment(environment: VirtualMachine){
        console.log(environment.id);
        return this._httpService.get("https://localhost:8443/api/environment/suspend/"+ environment.id);
    }

    addEnvironment(environment: VirtualMachine){
        let body = JSON.stringify(environment);
        //pass the content type which is aoolication/JSON cintent
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        //pass body and options
        return this._httpService.post("https://localhost:8443/api/environment", body, options);
    }

    getEnvironmentById(environmentId: string): Observable<VirtualMachine>{
        return this._httpService.get('https://localhost:8443/api/environment/' + environmentId)
            .map((respons: Response) => respons.json())
            .catch(this.handleError);
    }

    updateEnvironment(environment: VirtualMachine){
        let body = JSON.stringify(environment);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._httpService.put('https://localhost:8443/api/environment/update/'+environment.id, body, options);
    }
}