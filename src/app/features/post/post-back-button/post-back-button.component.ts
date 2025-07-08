import {Component} from '@angular/core';
import {PostService} from "../../../api/post.service";
import {PostEnumAction} from "../../../shared/enums/post.enum";

@Component({
  selector: 'app-post-back-button',
  template: `
    <button
      (click)="backToPostList()"
      class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide lucide-arrow-left w-4 h-4">
        <path d="m12 19-7-7 7-7"></path>
        <path d="M19 12H5"></path>
      </svg>
    </button>`
})
export class PostBackButtonComponent {
  constructor(private postService: PostService) {
  }

  backToPostList() {
    this.postService.setAPostAction(PostEnumAction.ListPost);
  }
}
