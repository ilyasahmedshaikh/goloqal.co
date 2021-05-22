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

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.formInit();
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

}
