import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/api/post.service';
import { IPost } from 'src/app/shared/models/IPost';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
})
export class PostViewComponent {
    post$: Observable<IPost | null>;

    constructor(private postService: PostService) {
      this.post$ = this.postService.selectedPost$;
    }
}
