import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild('userModalClose') modalClose;

  programForm: any = FormGroup;

  data: any = [
    { id: 1,  name: "John", email: "john12@email.com", userType: "User"},
  ];

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getUsers();
  }

  formInit() {
    this.programForm = this.fb.group({
      id:  ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      user_type: ['', Validators.required],
    });
  }

  getUsers() {
    this.api.getAll(this.config.collections.users_table).subscribe(res => {
      this.data = res;
    })
  }

  editUser(user) {
    this.programForm.setValue({
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      user_type: user.user_type,
    })
  }

  updateUser() {
    let request = this.api.put(this.config.collections.users_table, this.programForm.value.id, this.programForm.value);
    request.then(() => {
      alert('User Info Updated');
      this.modalClose.nativeElement.click();
      this.getUsers();
    })
    .catch((error) => {
      alert(error);
    });
  }

  deleteUser(user) {
    let request = this.api.delete(this.config.collections.users_table, user.id);
    request.then(() => {
      alert('User Info Deleted');
      this.getUsers();
    })
    .catch((error) => {
      alert(error);
    });
  }

}
