import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserService } from './user-service.service';

import { User } from './user';

@Injectable()
export class ApiService {
  private apiUrl: string = "/test-api/api/user/login/";
  private header: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private userSvc: UserService,
              private http: Http) { }

  doLogin(username: string, password: string){
    var params = new User();
    params.Username = username;
    params.Password = password;

    return this.http
              .post(this.apiUrl, JSON.stringify(params), {headers: this.header})
              .map(res => {
                let tmpToken: string = res.json().res;
                if (tmpToken && tmpToken.length > 0){
                  params.Token = tmpToken;
                  this.userSvc.userLoggedIn(params);

                  return true;
                }
                return false;
              })
              .catch(this.catchError);
  }

  private catchError(err: any){
    return Observable.throw(err || 'Server problem');
  }
}
