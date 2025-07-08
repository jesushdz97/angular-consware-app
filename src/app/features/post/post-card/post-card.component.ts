import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/api/post.service';
import { PostEnumAction } from 'src/app/shared/enums/post.enum';
import { IPost } from 'src/app/shared/models/IPost';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post!: IPost;

  constructor(private postService: PostService) { }

  onViewClick(): void {
    this.postService.fetchPostById(this.post.id).subscribe({
      next: (post: IPost) => {
        this.postService.setPostToView(post);
        this.postService.setAPostAction(PostEnumAction.ViewPost);
      },
      error: () =>  alert('Error fetching post!')
    });
  }

  onPostClick(): void {
    alert(`Post clicked: ${this.post.title}`);
  }

  onEditClick(): void {
    alert(`[NO WORK] - Edit clicked for post: ${this.post.title}`);
  }

  onDeleteClick(): void {
    const response = confirm(`Delete clicked for post: ${this.post.title}`);
    if (!response) return;
    this.postService.deletePostById(this.post.id).subscribe();
  }
}
