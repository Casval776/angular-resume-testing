import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ApiService } from './../api-service.service';

import { BlogPost } from './../blog-post';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  private blogPost: BlogPost;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiSvc: ApiService) { }

  ngOnInit() {
    var tmpPost = new BlogPost();

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        debugger;
        tmpPost.ID = parseInt(params.get('id'));
        return this.apiSvc.getBlogPosts(tmpPost);
      })
      .subscribe((posts: BlogPost[]) => {
        if (posts.length == 0){
          //Probably route to a 404 page at this point
          //In the meantime, do nothing
          this.blogPost = new BlogPost();
        } else {
          this.blogPost = posts[0];
        }
      });
  }

}
