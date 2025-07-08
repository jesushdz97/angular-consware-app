import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostViewComponent } from './features/post/post-view/post-view.component';
import { PostCreateComponent } from './features/post/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostViewComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    PostCreateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
