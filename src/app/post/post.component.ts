import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost(){
    this.postService.getPosts().subscribe(data=>{
      this.posts = data;
    })
  }
  onDelete(id: any){
    this.postService.deletePost(id).subscribe(data=>{
      this.getPost();
    })
  }
}
