import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  categories: any = [];
  topics: any = [];

  // loading: any = "assets/img/loading.gif";
  preview: any = "assets/img/img-upload-icon.png";
  productPreview: any = "assets/img/img-upload-icon.png";

  imageUploaded: boolean = false;
  productImageUploaded: boolean = false;

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getCategories();
    this.getTopics();
  }

  formInit() {
    this.programForm = this.fb.group({
      topic_id:  ['', Validators.required],
      category_id: ['', Validators.required],
      title: ['', Validators.required],
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
      everyDay: [false, Validators.required],
      extraAvailability: ['', Validators.required],
      description: ['', Validators.required],
      descriptionUrl: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      button1WebsiteName: ['', Validators.required],
      button1WebsiteUrl: ['', Validators.required],
      button2Call: ['', Validators.required],
      button2TelephoneNumber: ['', Validators.required],
      button3FacebookInstagram: ['', Validators.required],
      button3FacebookInstagramUrl: ['', Validators.required],
      button4Line: ['', Validators.required],
      button4LineUrl: ['', Validators.required],
      button5Chat: ['', Validators.required],
      button5ChatUrl: ['', Validators.required],
      button6Ticket: ['', Validators.required],
      button6TicketUrl: ['', Validators.required],
    });
  }

  getCategories() {
    this.categories = this.api.getAll(this.config.collections.categories_table);
  }

  getTopics() {
    this.topics = this.api.getAll(this.config.collections.topics_table);
  }

  createPage() {
    let data = this.programForm.value;

    let request = this.api.post(this.config.collections.pages_table, data);

    request.then(() => {
      this.programForm.reset();
      this.router.navigateByUrl("/homepage");

      // console.log(this.createPage)
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

  productReadURL(event: any): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];

      const reader = new FileReader();
      reader.onload = e => this.productPreview = reader.result;

      reader.readAsDataURL(file);
    }
  }

}
