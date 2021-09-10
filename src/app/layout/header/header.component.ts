import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleButton: boolean = false;
  sidebar: boolean = false;
  fadeSection: boolean = false;

  user: any = {};

  constructor(
    private loginSrv: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  toggleMenu() {
    // animating icon
    this.toggleButton = !this.toggleButton;

    // animating sidebar
    this.sidebar = !this.sidebar;

    // enabling fade section
    this.fadeSection = !this.fadeSection;

    console.log(this.sidebar);
    
  }

  getUserData() {
    this.user = this.loginSrv.getUserData();
  }

  logout() {
    this.loginSrv.logout();
    this.router.navigateByUrl('/homepage');

    setTimeout(() => {
      location.reload();
    }, 1000);
  }

}
