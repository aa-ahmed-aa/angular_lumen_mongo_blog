import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service';
import {ActivatedRoute} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-admin-list-posts',
  templateUrl: './admin-list-posts.component.html',
  styleUrls: ['./admin-list-posts.component.css']
})
export class AdminListPostsComponent implements OnInit {

  public posts = [];

  constructor(
      private adminService: AdminService,
      private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.adminService.get_all_posts()
        .subscribe(data => this.posts = data['response']);
  }

  deletePost(postId) {
    this.posts = this.posts.filter(post => post._id !== postId);
    this.adminService.deletePost( postId );
  }

}
