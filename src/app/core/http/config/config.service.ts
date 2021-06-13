import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  collections: any = {
    categories_table: "categories",
    users_table: "users",
    topics_table: "topics",
    pages_table: "pages",
    blogs_table: "blogs",
    comments_table: "comments",
  }

  constructor() { }
}
