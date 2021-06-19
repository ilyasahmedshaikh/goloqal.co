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
  topicPreview: string = "";
  topicImageUploaded: boolean = false;

  categoryPreview: string = "";
  categoryImageUploaded: boolean = false;

  programForm: any = FormGroup;
  topicForm: any = FormGroup;

  editObj: any = {};
  isEdit: boolean = false;

  editTopicObj: any = {};
  isEditTopic: boolean = false;

  topics: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
  ) {
    this.editObj = this.router.getCurrentNavigation().extras.state?.category;
    this.editTopicObj = this.router.getCurrentNavigation().extras.state?.topic;
  }

  ngOnInit(): void {
    this.formInit();
    this.getTopics();

    if(this.editObj) {
      this.programForm.patchValue({
        categoryName: this.editObj.name
      });

      this.isEdit = true;
    }

    if(this.editTopicObj) {
      this.topicForm.patchValue({
        name: this.editTopicObj.name
      });

      this.isEditTopic = true;
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      categoryName: ['', Validators.required],
      topicId: ['', Validators.required],
    });

    this.topicForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  getTopics() {
    this.api.getAll(this.config.collections.topics_table).subscribe(res =>{
      this.topics = res;
    });
  }

  createCategory() {
    let data = {
      name: this.programForm.value.categoryName,
      image: this.categoryPreview,
      topicId: this.programForm.value.topicId,
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

  createTopic() {
    let data = {
      ...this.topicForm.value,
      image: this.topicPreview
    }

    let request = this.api.post(this.config.collections.topics_table, data);

    request.then(() => {
      this.topicForm.reset();
      this.router.navigateByUrl("/categories/category-listing");
    })
    .catch((error) => {
      alert(error);
    });
  }

  updateCategory() {
    let data = {
      name: this.programForm.value.categoryName,
      image: this.categoryPreview,
      topicId: this.programForm.value.topicId,
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

  updateTopic() {
    let data = {
      ...this.topicForm.value,
      image: this.topicPreview
    }

    let request = this.api.put(this.config.collections.topics_table, this.editTopicObj.id, data);

    request.then(() => {
      this.topicForm.reset();
      this.router.navigateByUrl("/categories/category-listing");
    })
    .catch((error) => {
      alert(error);
    });
  }

  onTopicImagePreview(event) {
    this.topicPreview = event.preview;
    this.topicImageUploaded = event.imageUploaded;
  }

  onCategoryImagePreview(event) {
    this.categoryPreview = event.preview;
    this.categoryImageUploaded = event.imageUploaded;
  }

}
