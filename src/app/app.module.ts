import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

/*** Components ***/
import { AppComponent } from './app.component';
import { AppPostsMenuComponent } from './app-posts-menu/app-posts-menu.component';

/*** Services ***/
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    AppPostsMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
