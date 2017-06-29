import { Component, OnInit } from '@angular/core';
import { UserService } from './../user-service.service';
import { ApiService } from './../api-service.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private userSvc: UserService, private apiSvc: ApiService) { }

  ngOnInit() {
  }

  userLogout(): void{
    this.apiSvc.doLogout().subscribe(res =>{
      if (res && res === false){
        //Probably redirect to some kind of error page...
        console.log('Unsuccessful logout');
      } else {
        //Maybe refresh current page?
      }
    })
  }
}
