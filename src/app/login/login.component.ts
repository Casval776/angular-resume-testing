import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private signIn: boolean = true;
  private loading: boolean = false;
  private errorMsg: string;

  constructor(private apiSvc: ApiService,
              private router: Router) { }

  ngOnInit() {  }

  processLogin(username: string, password:string, rememberMe:any): void{
    this.loading = true;

    this.apiSvc.doLogin(username, password)
        .subscribe(res => {
          if (res){
            this.router.navigate(['./home']);
            this.loading = false;
            this.errorMsg = undefined;
          } else {
            this.loading = false;
            this.errorMsg = 'There were problems processing your credentials.';
          }
        },
        err => {
          this.loading = false;
          console.log(err.status);
          this.errorMsg = 'A server error has occurred. Please wait a few minutes and try again.';
        });
  }

}
