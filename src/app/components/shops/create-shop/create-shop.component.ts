import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {

    // loading: any = "../../../../assets/img/loading.gif";
    preview: any = "../../../../assets/img/img-upload-icon.png";
    productPreview: any = "../../../../assets/img/img-upload-icon.png";
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
