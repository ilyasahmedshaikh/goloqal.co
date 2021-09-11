import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  preview: any = "";
  imageUploaded: boolean = false;

  programForm: any = FormGroup;

  user: any = {};

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private loginSrv: LoginService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getUserData();
  }

  formInit() {
    this.programForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  onImagePreview(event) {
    this.preview = event.preview;
    this.imageUploaded = event.imageUploaded;
  }

  getUserData() {
    this.user = this.loginSrv.getUserData();
    console.log(this.user);

    this.preview = this.user?.avatar;

    this.programForm.patchValue({
      fullName: this.user.fullName,
      email: this.user.email,
      mobile: this.user.mobile,
    })
  }

  update() {
    let data = {
      id: this.user.id,
      ...this.programForm.value,
      avatar: this.preview
    };

    let request = this.api.put(this.config.collections.users_table, this.user.id, data);

    request.then(() => {
      alert('User Info Updated');
      
      this.loginSrv.setLoginData(data);
      this.getUserData();
    })
    .catch((error) => {
      alert(error);
    });
  }

}
