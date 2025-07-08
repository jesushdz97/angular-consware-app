import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/api/post.service';
import {IPost} from 'src/app/shared/models/IPost';
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  listOfPost$!: Observable<IPost[]>;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.listOfPost$ = this.postService.posts$;
  }
}
