import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryPreview: any = "assets/img/img-upload-icon.png";
  categoryImageUploaded: boolean = false;
  topicPreview: any = "assets/img/img-upload-icon.png";
  topicImageUploaded: boolean = false;
  // loading: any = "assets/img/loading.gif";
  programForm: any = FormGroup;
  editObj: any = {};
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
  ) {
    this.editObj = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.formInit();

    if(this.editObj) {
      this.programForm.patchValue({
        categoryName: this.editObj.name
      });

      this.isEdit = true;
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      categoryName: ['', Validators.required],
    });
  }

  createCategory() {
    let data = {
      name: this.programForm.value.categoryName
    }

    let request = this.api.post(this.config.collections.categories_table, data);

    request.then(() => {
      this.programForm.reset();
      this.router.navigateByUrl("/categories/category-listing");
    })
    .catch((error) => {
      alert(error);
    });
  }

  updateCategory(id) {
    let data = {
      name: this.programForm.value.categoryName
    }

    let request = this.api.put(this.config.collections.categories_table, this.editObj.id, data);

    request.then(() => {
      this.programForm.reset();
      this.router.navigateByUrl("/categories/category-listing");
    })
    .catch((error) => {
      alert(error);
    });
  }

  categoryReadURL(event: any): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];

      const reader = new FileReader();
      reader.onload = e => this.categoryPreview = reader.result;

      reader.readAsDataURL(file);
    }
  }

  topicReadURL(event: any): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];

      const reader = new FileReader();
      reader.onload = e => this.topicPreview = reader.result;

      reader.readAsDataURL(file);
    }
  }

}
