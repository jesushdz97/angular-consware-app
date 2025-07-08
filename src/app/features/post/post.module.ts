import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from "./post.component";
import {PostListComponent} from "./post-list/post-list.component";
import {PostCardComponent} from "./post-card/post-card.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {PostBackButtonComponent} from "./post-back-button/post-back-button.component";
import {PostViewComponent} from './post-view/post-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostCardComponent,
    PostCreateComponent,
    PostBackButtonComponent,
    PostViewComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostModule {
}
