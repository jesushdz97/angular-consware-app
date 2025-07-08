import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './features/post/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './features/post/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
