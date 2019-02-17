import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailsComponent} from './components/blog/post-details/post-details.component';
import {AddPostComponent} from './components/admin/add-post/add-post.component';
import {AboutComponent} from './components/blog/about/about.component';
import {AdminComponent} from './components/admin/admin/admin.component';
import {AdminListPostsComponent} from './components/admin/admin-list-posts/admin-list-posts.component';

const routes: Routes = [
  { path : '', component: AboutComponent },
  { path: 'post/:suburl', component: PostDetailsComponent },
  { path: 'post', component: PostDetailsComponent },
  {
    path: 'admin/:username/:password', component: AdminComponent,
    children: [
      { path: 'add_post', component: AddPostComponent },
      { path: 'list_posts', component: AdminListPostsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
