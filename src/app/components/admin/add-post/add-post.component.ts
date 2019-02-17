import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import { PostService } from '../../../services/post/post.service';
import { AdminService } from '../../../services/admin/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {

  private username = 'ahmedkhaled';
  private password = 'a7med55aled';

  form = new FormGroup({
    title: new FormControl(),
    sub_url: new FormControl(),
    html: new FormControl(),
    category: new FormControl(),
    auther: new FormControl(),
    cover_image: new FormControl(),
    active: new FormControl()
  });

  constructor(
      private adminService: AdminService,
      private router: Router
      ) { }

  ngOnInit() {

  }

  addPost() {
    this.adminService.add_post(this.form.value);
    this.router.navigate(['/post/' + this.form.value.sub_url]);
  }

}
