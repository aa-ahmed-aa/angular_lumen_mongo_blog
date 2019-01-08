import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';
import { PostMenu } from '../objects/post-menu';

@Component({
  selector: 'app-posts-menu',
  templateUrl: './app-posts-menu.component.html',
  styleUrls: []
})
export class AppPostsMenuComponent implements OnInit {

  public posts_menu = [];

  constructor(private postService: PostService) {
    this.postService.get_posts_menu()
        .subscribe(data => this.posts_menu = data['response']);
  }

  ngOnInit() {
  }

}