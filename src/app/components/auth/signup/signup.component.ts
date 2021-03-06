import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth,
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  signup() {
    // making authentic account for detailer in Database
    this.auth.createUserWithEmailAndPassword(this.programForm.value.email, this.programForm.value.password)
      .then(value => {
        // adding detailer to firestore for user_type and other profile biodata
        let data = {
          avatar: "https://i.ibb.co/2MH630J/user.png",
          mobile: "0",
          ...this.programForm.value,
          user_type: 'user'
        };
        delete data.password;
        delete data.confirmPassword;

        let request = this.api.post(this.config.collections.users_table, data);
        request.then(() => {
          alert('Signup Success.');
          this.router.navigateByUrl('/auth/login');
        })
        .catch((error) => {
          alert(error);
        });
      })
      .catch(err => {
        alert(err.message);
        console.log('Something went wrong: ', err.message);
      });
  }

}
