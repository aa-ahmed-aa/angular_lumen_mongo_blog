import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public username = 'ahmedkhaled';
  public password = 'a7med55aled';

  constructor() { }

  ngOnInit() {
  }

}
