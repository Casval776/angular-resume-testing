import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  private linkedInUrl: string = 'http://linkedin.com';
  private githubUrl: string = 'http://github.com';

  constructor() { }

  ngOnInit() {
  }

}
