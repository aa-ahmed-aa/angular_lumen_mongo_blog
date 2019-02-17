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

  get_all_posts(): Observable<PostMenu[]> {
      const header = new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          'api-token': 'build car using a spone 123'
      });

      return this.httpClient.get<PostMenu[]>(this.baseURL + '/admin/posts', {headers: header});
  }
  add_post(postBody) {

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      'api-token': 'build car using a spone 123'
    });

    this.httpClient.post<Post>(this.baseURL + '/admin/posts/addPost', JSON.stringify(postBody), {headers: header} )
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
