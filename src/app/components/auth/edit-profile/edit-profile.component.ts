import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  preview: any = "../../../../assets/img/img-upload-icon.png";
  // loading: any = "../../../../assets/img/loading.gif";
  imageUploaded: boolean = false;
  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
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
