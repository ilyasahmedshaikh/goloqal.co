import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data: any = [
    { id: 1,  name: "John", email: "john12@email.com", userType: "User"},
  ];

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.api.getAll(this.config.collections.users_table).subscribe(res => {
      this.data = res;
    })
  }

}
