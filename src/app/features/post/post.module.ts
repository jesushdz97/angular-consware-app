import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from "./post.component";
import {PostListComponent} from "./post-list/post-list.component";
import {PostCardComponent} from "./post-card/post-card.component";
import {PostCreateComponent} from "./post-create/post-create.component";

@NgModule({
  declarations: [PostComponent, PostListComponent, PostCardComponent, PostCreateComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule {
}
