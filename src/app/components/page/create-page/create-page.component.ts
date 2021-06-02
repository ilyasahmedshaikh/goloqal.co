import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  // loading: any = "assets/img/loading.gif";
  preview: any = "assets/img/img-upload-icon.png";
  productPreview: any = "assets/img/img-upload-icon.png";

  imageUploaded: boolean = false;
  productImageUploaded: boolean = false;

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      selectTopic: ['', Validators.required],
      selectCategory: ['', Validators.required],
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
