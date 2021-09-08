import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  adminControls: any = [
    {name: "Category Listing", path: "/categories/category-listing", icon: "fas fa-th-list"},
    {name: "Sliders", path: "/admin/add-edit-slider", icon: "fas fa-images"},
    {name: "Users", path: "/admin/users", icon: "fas fa-users"},
    {name: "Socials", path: "/admin/social-links", icon: "fas fa-share-alt"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
