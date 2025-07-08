import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/shared/models/IPost';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post!: IPost;

  constructor() { }

  onViewClick(): void {

  }

  onPostClick(): void {
    alert(`Post clicked: ${this.post.title}`);
  }

  onEditClick(): void {
    alert(`Edit clicked for post: ${this.post.title}`);
  }

  onDeleteClick(): void {
    alert(`Delete clicked for post: ${this.post.title}`);
  }
}
