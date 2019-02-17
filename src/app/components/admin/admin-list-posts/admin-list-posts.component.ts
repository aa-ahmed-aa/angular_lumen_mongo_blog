import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-list-posts',
  templateUrl: './admin-list-posts.component.html',
  styleUrls: ['./admin-list-posts.component.css']
})
export class AdminListPostsComponent implements OnInit {

  public posts = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.get_all_posts()
        .subscribe(data => this.posts = data['response']);
  }

}
