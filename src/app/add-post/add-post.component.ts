import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {

  private username = 'ahmedkhaled';
  private password = 'a7med55aled';

  form = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    html: new FormControl(),
    category: new FormControl(),
    auther: new FormControl(),
    cover_image: new FormControl(),
    created_at: new FormControl()
  });

  constructor() { }

  ngOnInit() {

  }

}
