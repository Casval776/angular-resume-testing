import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private signIn: boolean = true;
  private loading: boolean = false;

  constructor() { }

  ngOnInit() {  }

  processLogin(username: string, password:string, rememberMe:any): void{
    debugger;
    this.loading = true;
    console.log('Login not implemented');
  }

}
