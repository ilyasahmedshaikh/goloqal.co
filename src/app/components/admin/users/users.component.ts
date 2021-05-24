import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data: any = [
    { id: 1,  name: "John", email: "john12@email.com", userType: "User"},
    { id: 2,  name: "Michael", email: "michael02@email.com", userType: "User"},
    { id: 3,  name: "Daniel", email: "daniel96@email.com", userType: "User"},
    { id: 4,  name: "Kevin", email: "kevin52@email.com", userType: "User"},
    { id: 5,  name: "Anthony", email: "anthony@email.com", userType: "User"},
    { id: 6,  name: "Jason", email: "jason963@email.com", userType: "User"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
