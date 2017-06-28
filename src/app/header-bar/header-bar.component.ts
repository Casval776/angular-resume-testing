import { Component, OnInit } from '@angular/core';
import { UserService } from './../user-service.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private userSvc: UserService) { }

  ngOnInit() {
  }

}
