import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  categories: any = [];
  editObj: any = {};
  isEdit: boolean = false;

  preview: any = "assets/img/img-upload-icon.png";
  loading: any = "assets/img/loading.gif";

  imageUploaded: boolean = false;
  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) {
    this.editObj = this.router.getCurrentNavigation().extras.state?.blog;
   }

  ngOnInit(): void {
    this.formInit();
    this.getCategories();

    if(this.editObj) {
      this.programForm.patchValue({
        ...this.editObj
      });
      this.isEdit = true;

      console.log('create blog', this.editObj);
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      blogTitle:  ['', Validators.required],
      category_id: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  getCategories() {
    this.categories = this.api.getAll(this.config.collections.categories_table);
  }

  createBlog() {
    let data = this.programForm.value;

    let request = this.api.post(this.config.collections.blogs_table, data);

    request.then(() => {
      this.programForm.reset();
      this.router.navigateByUrl("/blogs");

      console.log(data)
    })
    .catch((error) => {
      alert(error);
    });
  }

  updateBlog() {
    let data = {
      ...this.programForm.value
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
      console.log('deleted successfully');
      this.router.navigateByUrl("/blogs");
    })
    .catch((error) => {
      alert(error);
    });
  }

  readURL(event: any): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];

      const reader = new FileReader();
      reader.onload = e => this.preview = reader.result;

      reader.readAsDataURL(file);
    }
  }

}
