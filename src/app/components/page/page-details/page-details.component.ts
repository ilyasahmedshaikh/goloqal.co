import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  data: any = {};
  days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  constructor(
    private router: Router
  ){
    this.data = this.router.getCurrentNavigation().extras.state?.page;
  }

  ngOnInit(): void {
    if(this.data) {
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

}
