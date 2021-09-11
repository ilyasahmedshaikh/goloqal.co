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

  contentPages: any = [
    {name: "About Page", path: "/admin/add-edit-about", icon: "fas fa-pager"},
    {name: "Privacy Policy", path: "/admin/add-edit-privacy-policy", icon: "fas fa-pager"},
    {name: "Term & Conditions", path: "/admin/add-edit-terms-conditions", icon: "fas fa-pager"},
    {name: "FAQ", path: "/admin/add-edit-faq", icon: "fas fa-pager"},
    {name: "Partner with us", path: "/admin/add-edit-partner-with-us", icon: "fas fa-pager"},
    {name: "Subscribe for news", path: "/admin/add-edit-subscribe-for-news", icon: "fas pager"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
