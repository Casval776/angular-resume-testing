import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserService } from './user-service.service';

import { User } from './user';
import { BlogPost } from './blog-post';

@Injectable()
export class ApiService {
  private apiUrlLogin: string = '/api/user/login/';
  private apiUrlLogout: string = '/api/user/logout/';
  private apiUrlBlog: string = '/api/blog/';
  private header: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private userSvc: UserService,
              private http: Http) { }

  doLogin(username: string, password: string){
    var params = new User();
    params.Username = username;
    params.Password = password;

    return this.http
              .post(this.apiUrlLogin, JSON.stringify(params), {headers: this.header})
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

  doLogout(){
    return this.http
              .post(this.apiUrlLogout, JSON.stringify(this.userSvc.getUser()), {headers: this.header})
              .map(res => {
                let success: boolean = res.json().res;
                if (success && success === true){
                  this.userSvc.userLoggedOut();
                }
                return success;
              })
              .catch(this.catchError);
  }

  getBlogPosts(post: BlogPost){
    if (post){
      //If a post was specified, do a post
      return this.http
                .post(this.apiUrlBlog, JSON.stringify(post), {headers: this.header})
                .map(res => {
                  let debug = res.json().res;
                  //Debug
                  debugger;
                })
                .catch(this.catchError);
    } else {
      //Else, do a get
      return this.http
                .get(this.apiUrlBlog, {headers: this.header})
                .map(res => {
                  let debug = res.json().res;
                  //Debug
                  debugger;
                })
                .catch(this.catchError);
    }
  }

  private catchError(err: any){
    return Observable.throw(err || 'Server problem');
  }
}
