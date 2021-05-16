import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  preview: any = "../../../../assets/img/img-upload-icon.png";
  // loading: any = "../../../../assets/img/loading.gif";
  imageUploaded: boolean = false;

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
