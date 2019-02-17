import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { PostMenu } from '../../objects/post-menu';
import { Post } from '../../objects/post';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  baseURL = 'http://68.183.161.14:5050';

  get_posts_menu(): Observable<PostMenu[]> {
      return this.httpClient.get<PostMenu[]>(this.baseURL + '/posts/menu');
  }

  get_post(sub_url): Observable<Post> {
    return this.httpClient.get<Post>(this.baseURL + '/posts/' + sub_url);
  }

}
