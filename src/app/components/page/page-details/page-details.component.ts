import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { LoginService } from '../../../core/services/login/login.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  id: any = '';
  data: any = {};
  newPage: boolean = false;
  days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // agm-maps 
  location: any = {
    lat: 7.878978,
    lng: 98.398392
  }

  user: any = {};
  isShowEdit: boolean = false;

  pageUrl: any = '';

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ){
    this.data = this.router.getCurrentNavigation().extras.state?.page;
    this.newPage = this.router.getCurrentNavigation().extras.state?.newPage;
  }

  ngOnInit(): void {
    // getting current page URL 
    // this.pageUrl = this.filterUrl(window.location.href);
    this.pageUrl = window.location.href;
    console.log(this.pageUrl);

    // getting id from route
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('title')) {
        this.id = params.get('title').split(' ').join('-');
        console.log(this.id);
        
      }
    });
    
    if(this.data) this.location = this.data?.location;
    else this.router.navigateByUrl('/homepage');

    this.user = this.loginService.getUserData();

    if(this.data?.created_by?.email == this.user?.email) this.isShowEdit = true;
    else this.isShowEdit = false;

    window.scroll(0, 0);
  }

  edit(data) {
    this.router.navigate(['/page/create-page'], { state: {page: data} })
  }

  getDayFromDate(date) {
    return this.days[new Date(date).getDay()];
  }

  createPage() {
    let request = this.api.post(this.config.collections.pages_table, this.data);

    request.then(() => {
      this.router.navigateByUrl("/homepage");
    })
    .catch((error) => {
      alert(error);
    });
  }

  updatePage() {
    let request = this.api.put(this.config.collections.pages_table, this.id, this.data);

    request.then(() => {
      this.router.navigateByUrl("/homepage");
    })
    .catch((error) => {
      alert(error);
    });
  }

  filterUrl(url) {
    return url.replaceAll('#', '%23');
  }

}
