import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailsComponent} from './post-details/post-details.component';
import {AddPostComponent} from './add-post/add-post.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path : '', component: AboutComponent },
  { path: 'post/:suburl', component: PostDetailsComponent },
  { path: 'post', component: PostDetailsComponent },
  { path: 'add_post/:username/:password', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
