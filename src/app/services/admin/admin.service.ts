import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../../objects/post';
import {Observable} from 'rxjs';
import {PostMenu} from '../../objects/post-menu';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  baseURL = 'http://68.183.161.14:5050';
  private header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'api-token': 'build car using a spone 123'
    });

  get_all_posts(): Observable<PostMenu[]> {
      return this.httpClient.get<PostMenu[]>(this.baseURL + '/admin/posts', {headers: this.header});
  }
  add_post(postBody) {
    this.httpClient.post<Post>(this.baseURL + '/admin/posts/addPost', JSON.stringify(postBody), {headers: this.header} )
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
  deletePost(postId) {
      if ( confirm('i will delete this post' + postId) ) {
          return this.httpClient.delete<Post>(this.baseURL + '/admin/posts/deletePost/' + postId, {headers: this.header})
              .subscribe((data) => {

                  console.log(data);
              });
          // return postId;
      }
  }
}
