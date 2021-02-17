import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Something about Tuesday',
      thought: 'Today seems long',
    },
    {
      title: 'Carole Baskin',
      thought: 'Hates Joe Exotic',
    },
    {
      title: 'Joe Exotic',
      thought: 'Hates Carole Baskin',
    },
  ];

  newThought: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number): void => {
    this.posts.splice(index, 1);
  };

  onAdd = (post: Post): void => {
    if (post.thought !== '') {
      this.posts.push(post);
    }
    this.newThought = false;
  };

  newThoughtAdd = () => {
    this.newThought = true;
  };

  closeForm = () => {
    this.newThought = false;
  };
}
