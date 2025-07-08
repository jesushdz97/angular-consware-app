import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment.development';
import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';
import {IPost} from '../shared/models/IPost';
import {PostEnumAction} from "../shared/enums/post.enum";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public listOfPost: IPost[] = [];
  private readonly apiUrl = environment.apiURL;

  private readonly listOfPostSubject = new BehaviorSubject<IPost[]>([]);
  public readonly posts$: Observable<IPost[]> = this.listOfPostSubject.asObservable();

  private readonly selectedPostSubject = new BehaviorSubject<IPost | null>(null);
  public readonly selectedPost$: Observable<IPost | null> = this.selectedPostSubject.asObservable();

  private readonly postActionSubject = new Subject<PostEnumAction>();
  public readonly postAction$: Observable<PostEnumAction> = this.postActionSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  fetchPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts?_limit=10`)
      .pipe(
        tap(posts => {
          this.listOfPost = posts;
          this.listOfPostSubject.next(this.listOfPost);
          this.postActionSubject.next(PostEnumAction.ListPost);
        })
      );
  }

  fetchPostById(postId: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/posts/${postId}`);
  }

  createPost(payload: Partial<IPost>): Observable<IPost> {
    return this.http.post<IPost>(`${this.apiUrl}/posts`, payload).pipe(
      tap(post => {
        this.listOfPost.unshift(post);
        this.listOfPostSubject.next(this.listOfPost);
        this.postActionSubject.next(PostEnumAction.ListPost);
      })
    )
  }

  deletePostById(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/posts/${postId}`).pipe(tap(
      () => {
        this.listOfPost = this.listOfPost.filter(post => post.id !== postId);
        this.listOfPostSubject.next(this.listOfPost);
      }
    ));
  }

  clearSelectedPost(): void {
    this.selectedPostSubject.next(null);
  }

  setAPostAction(action: PostEnumAction) {
    this.postActionSubject.next(action);
  }

  setPostToView(post: IPost): void {
    this.selectedPostSubject.next(post);
  }

  deletePost(post: IPost): void {
    const newList = this.listOfPost.filter(p => p.id !== post.id);
    this.listOfPost = newList;
    this.listOfPostSubject.next(this.listOfPost);
  }
}
