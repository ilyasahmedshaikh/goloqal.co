import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  programForm: any = FormGroup;
  data: any = {};
  categories: any = [];
  comments: any = [];

  currentUser: any = {};

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private router: Router,
    private loginSrv: LoginService
  ) {
    this.data = this.router.getCurrentNavigation().extras.state?.blog;
  }

  ngOnInit(): void {
    this.currentUser = this.loginSrv.getUserData();
    
    this.formInit();
    this.getComments();
    
    if(this.data) {
      console.log('blog-details', this.data);
    } else {
      this.router.navigateByUrl('/blogs')
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      comment: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  edit(data) {
    this.router.navigate(['/blogs/create-blog'], { state: {blog: data} })
  }

  createComment() {
    let data = {
      ...this.programForm.value,
      blog_id: this.data.id,
      created_at: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      created_by: this.loginSrv.getUserData()
    }

    let request = this.api.post(this.config.collections.comments_table, data);

    request.then(() => {
      this.programForm.reset();
      this.getComments();
    })
    .catch((error) => {
      alert(error);
    });
  }

  getComments() {
    this.api.getWithQuery(this.config.collections.comments_table, 'blog_id', '==', this.data.id).subscribe(res => {
      this.comments = res;
    })
  }

  onDelete(item) {
    let request = this.api.delete(this.config.collections.comments_table, item.id);

    request.then(() => {
      alert('Comment Deleted');
      this.getComments();
    })
    .catch((error) => {
      alert(error);
    });
  }

}
