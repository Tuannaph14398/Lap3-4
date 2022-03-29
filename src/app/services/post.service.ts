import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiUrl = 'http://localhost:3000/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(apiUrl);
  }

  addPost(data:any){
    return this.http.post(apiUrl,data);
  }

  deletePost(id: number | string){
    return this.http.delete(`${apiUrl}/${id}`);
  }
}
