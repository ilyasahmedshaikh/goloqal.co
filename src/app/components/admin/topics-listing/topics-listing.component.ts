import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics-listing',
  templateUrl: './topics-listing.component.html',
  styleUrls: ['./topics-listing.component.scss']
})
export class TopicsListingComponent implements OnInit {

  data: any = [
    { id: 1,  name: "Pepsi", price: "$12.23", createdBy: "Pepsico"},
    { id: 2,  name: "Burger", price: "$15.14", createdBy: "KFC"},
    { id: 3,  name: "Lays", price: "$16.36", createdBy: "Lays"},
    { id: 4,  name: "Pepsi", price: "$12.23", createdBy: "Pepsico"},
    { id: 5,  name: "Burger", price: "$15.14", createdBy: "KFC"},
    { id: 6,  name: "Lays", price: "$16.36", createdBy: "Lays"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
