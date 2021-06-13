import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  data: any = {};
  categories: any = [];
  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) {
    this.data = this.router.getCurrentNavigation().extras.state?.blog;
  }

  ngOnInit(): void {
    this.formInit();
    if(this.data) {
      console.log('blog-details', this.data);
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
      blog_id: this.data.id
    }

    let request = this.api.post(this.config.collections.comments_table, data);

    request.then(() => {
      this.programForm.reset();
    })
    .catch((error) => {
      alert(error);
    });
  }

}
