import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';

/*** Components ***/
import { AppComponent } from './app.component';
import { AppPostsMenuComponent } from './components/blog/app-posts-menu/app-posts-menu.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminListPostsComponent } from './components/admin/admin-list-posts/admin-list-posts.component';
import { PostDetailsComponent } from './components/blog/post-details/post-details.component';
import { AddPostComponent } from './components/admin/add-post/add-post.component';
import { AboutComponent } from './components/blog/about/about.component';

/*** Services ***/
import { PostService } from './services/post/post.service';

/*** Pipes ***/
import { SafePipe } from './pipes/safe.pipe';



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
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
