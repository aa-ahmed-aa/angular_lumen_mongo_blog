import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

import { PostService } from '../../../services/post/post.service';

import { Post } from '../../../objects/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public post;
  public showAboutPage = true;
  public urlParam;

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private router: Router,
      private postService: PostService
  ) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.urlParam = this.getUrlParam();

      if (this.urlParam) {
        console.log(this.urlParam);
        this.postService.get_post( this.urlParam )
            .subscribe( data => {
              this.post = data['response'][0];
            } );
      } else {
        console.log('you should be redirecteed to the about page');
        this.router.navigate(['']);
      }
    });
  }

  getUrlParam() {
    return this.route.snapshot.params['suburl'];
  }

}
