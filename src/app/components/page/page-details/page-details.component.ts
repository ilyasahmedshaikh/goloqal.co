import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  data: any = {};
  newPage: boolean = false;
  days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // agm-maps 
  location: any = {
    lat: 7.878978,
    lng: 98.398392
  }

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
  ){
    this.data = this.router.getCurrentNavigation().extras.state?.page;
    this.newPage = this.router.getCurrentNavigation().extras.state?.newPage
  }

  ngOnInit(): void {
    if(this.data) {
      this.location = this.data?.location;
      console.log('page-details', this.data);
    } else {
      this.router.navigateByUrl('/homepage');
    }
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

}
