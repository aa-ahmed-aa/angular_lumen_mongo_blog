import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostMenu} from '../objects/post-menu';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  baseURL = 'http://localhost:8000';

  getPostsMenu() {
    return this.httpClient.get(this.baseURL + '/posts/menu')
        .subscribe(res => {
          return res['response'];
        });
  }

}
