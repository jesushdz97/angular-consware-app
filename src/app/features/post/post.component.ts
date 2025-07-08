import {Component, OnInit} from '@angular/core';
import {PostService} from "../../api/post.service";
import {PostEnumAction} from "../../shared/enums/post.enum";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public postAction: Observable<PostEnumAction> = this.postService.postAction$;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe();
  }

  openCreatePostView(): void {
    this.postService.setAPostAction(PostEnumAction.CreatePost);
  }

  protected readonly PostEnumAction = PostEnumAction;
}
