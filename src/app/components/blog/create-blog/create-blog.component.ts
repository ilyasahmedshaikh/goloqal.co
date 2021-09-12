import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  programForm: any = FormGroup;

  categories: any = [];
  editObj: any = {};
  isEdit: boolean = false;
  today: number = Date.now();
  user: any = {};

  preview: string = '';
  imageUploaded: boolean = false;



  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private router: Router,
    private loginSrv: LoginService
  ) {
    this.editObj = this.router.getCurrentNavigation().extras.state?.blog;
   }

  ngOnInit(): void {
    this.formInit();
    this.getCategories();

    this.user = this.loginSrv.getUserData();

    if(this.editObj) {
      this.programForm.patchValue({
        ...this.editObj
      });
      this.isEdit = true;
      this.preview = this.editObj.image;
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      blogTitle:  ['', Validators.required],
      category_id: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      createdAt: [this.today]
    });
  }

  getCategories() {
    this.api.getAll(this.config.collections.categories_table).subscribe(res =>{
      this.categories = res;
    });
  }

  createBlog() {
    let data = {
      ...this.programForm.value,
      image: this.preview,
      user: this.user 
    }

    let request = this.api.post(this.config.collections.blogs_table, data);

    request.then(() => {
      this.programForm.reset();
      this.router.navigateByUrl("/blogs");
    })
    .catch((error) => {
      alert(error);
    });
  }

  updateBlog() {
    let data = {
      ...this.programForm.value,
      image: this.preview,
      user: this.user
    }

    let request = this.api.put(this.config.collections.blogs_table, this.editObj.id, data);

    request.then(() => {
      this.programForm.reset();
      this.router.navigateByUrl("/blogs");
    })
    .catch((error) => {
      alert(error);
    });
  }

  deleteBlog() {
    let request = this.api.delete(this.config.collections.blogs_table, this.editObj.id);

    request.then(() => {
      this.router.navigateByUrl("/blogs");
    })
    .catch((error) => {
      alert(error);
    });
  }

  onImagePreview(event) {
    this.preview = event.preview;
    this.imageUploaded = event.imageUploaded;
  }

}
