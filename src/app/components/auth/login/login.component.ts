import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';
import { LoginService } from '../../../core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  programForm: any = FormGroup;
  loginStatus: boolean = false;
  Users: any = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private checkLogin: LoginService,
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false, Validators.required],
    });
  }

  login() {
    const email = this.programForm.value.email;
    const password = this.programForm.value.password;

    this.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.api.getWithQuery(this.config.collections.users_table, 'email', '==', email).subscribe(user => {
        this.checkLogin.setLoginData(user[0]);
      })

      this.checkLogin.setLoginStatus(true);
      this.router.navigateByUrl('/homepage');

      setTimeout(() => {
        location.reload();
      }, 1000);
    })
    .catch(err => {
      alert(err.message);
      console.log('Something went wrong: ', err.message);
    });
  }

}
