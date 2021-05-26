import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-slider',
  templateUrl: './add-edit-slider.component.html',
  styleUrls: ['./add-edit-slider.component.scss']
})
export class AddEditSliderComponent implements OnInit {

  preview: any = "../../../../assets/img/img-upload-icon.png";
  imageUploaded: boolean = false;
  // loading: any = "../../../../assets/img/loading.gif";

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

}
