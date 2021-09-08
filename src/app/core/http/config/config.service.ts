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
    sliders_table: "sliders",
  }

  topics: any = [
    {
      id: "W5LhETk0EIkNN8xuPw8J",
      name: "Local Services"
    },
    {
      id: "TaqWu5ZOFT90NEvUuR1G",
      name: "Things to do"
    },
    {
      id: "k1MZpTKlPFn2SDaoMidV",
      name: "My Events"
    },
    {
      id: "HVkgQssasz84n8g3cfeU",
      name: "My Shops"
    },
    {
      id: "bcDkmcOoIx3ehue4XdGl",
      name: "My Places"
    }
  ]

  myShopsTopicId: any = 'HVkgQssasz84n8g3cfeU';

  constructor() { }
}
