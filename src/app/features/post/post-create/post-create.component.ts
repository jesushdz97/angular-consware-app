import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/api/post.service';
import { IPost } from 'src/app/shared/models/IPost';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

  postForm = this.fb.group({
    userId: ['', Validators.required],
    title: ['', [Validators.required, Validators.minLength(3)]],
    body: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private fb: FormBuilder, private postService: PostService) { }

  onSubmit(): void {
    const payload = this.postForm.value as Partial<IPost>;
    this.postService.createPost(payload).subscribe();
  }

  get title() { return this.postForm.get('title'); }
  get userId() { return this.postForm.get('userId'); }
  get body() { return this.postForm.get('body'); }

  get disabledSubmit(): boolean {
    return !this.postForm.valid;
  }
}
