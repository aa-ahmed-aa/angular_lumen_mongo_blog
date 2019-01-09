import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { PostMenu } from '../objects/post-menu';
import { Post } from '../objects/post';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  baseURL = 'http://localhost:8000';

  get_posts_menu(): Observable<PostMenu[]> {
      return this.httpClient.get<PostMenu[]>(this.baseURL + '/posts/menu');
  }

  get_post(sub_url): Observable<Post> {
    return this.httpClient.get<Post>(this.baseURL + '/posts/' + sub_url);
  }

  add_post(postBody) {
    console.log(postBody);

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });

    this.httpClient.post<Post>(this.baseURL + '/posts/addPost', JSON.stringify(postBody), {headers: header} )
        .subscribe(
            (val) => {
              console.log('POST call successful value returned in body', val);
              },
            response => {
              console.log('POST call in error', response);
            },
            () => {
              console.log('The POST observable is now completed.');
            }
          );
  }
}
