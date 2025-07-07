import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IPost } from '../shared/models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts`);
  }
}
