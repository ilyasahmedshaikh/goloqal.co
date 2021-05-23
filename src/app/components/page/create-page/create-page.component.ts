import { Component, OnInit } from '@angular/core';

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

    constructor() { }

    ngOnInit(): void {
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
