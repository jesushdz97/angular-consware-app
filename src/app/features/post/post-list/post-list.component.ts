import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/api/post.service';
import {IPost} from 'src/app/shared/models/IPost';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data: IPost[]) => this.posts = data
    })
  }

  createPost(): void {
    alert('Create Post functionality is not implemented yet.');
  }
}
