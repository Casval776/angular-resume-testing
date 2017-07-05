import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api-service.service';

import { BlogPost } from './../blog-post';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  private blogPosts: BlogPost[];
  private preprocessLoading: boolean = true;

  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
    this.apiSvc.getBlogPosts(null).subscribe(res => {
      this.blogPosts = res;
      this.preprocessLoading = false;
      //Debug
      debugger;
    });
  }

}
