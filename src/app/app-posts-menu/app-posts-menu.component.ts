import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { PostService } from '../services/post.service';
import { PostMenu } from '../objects/post-menu';

@Component({
  selector: 'app-posts-menu',
  templateUrl: './app-posts-menu.component.html',
  styleUrls: []
})
export class AppPostsMenuComponent implements OnInit {

  private posts_menu: PostMenu[] = [];
  baseURL = 'http://localhost:8000';
  constructor(private postService: PostService, httpClient: HttpClient) {
    httpClient.get(this.baseURL + '/posts/menu')
        .subscribe(res => {
          this.posts_menu = res['response'];
        });
  }

  ngOnInit() {
  }

}
