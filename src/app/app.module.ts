import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';

/*** Components ***/
import { AppComponent } from './app.component';
import { AppPostsMenuComponent } from './app-posts-menu/app-posts-menu.component';

/*** Services ***/
import { PostService } from './services/post.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AboutComponent } from './about/about.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppPostsMenuComponent,
    PostDetailsComponent,
    AddPostComponent,
    AboutComponent,
    SafePipe,
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
