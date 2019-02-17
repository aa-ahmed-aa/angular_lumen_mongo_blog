import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';

/*** Components ***/
import { AppComponent } from './app.component';
import { AppPostsMenuComponent } from './components/blog/app-posts-menu/app-posts-menu.component';

/*** Services ***/
import { PostService } from './services/post/post.service';
import { PostDetailsComponent } from './components/blog/post-details/post-details.component';
import { AddPostComponent } from './components/admin/add-post/add-post.component';
import { AboutComponent } from './components/blog/about/about.component';
import { SafePipe } from './pipes/safe.pipe';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminListPostsComponent } from './components/admin/admin-list-posts/admin-list-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPostsMenuComponent,
    PostDetailsComponent,
    AddPostComponent,
    AboutComponent,
    SafePipe,
    AdminComponent,
    AdminListPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
