import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-near-by-page',
  templateUrl: './near-by-page.component.html',
  styleUrls: ['./near-by-page.component.scss']
})
export class NearByPageComponent implements OnInit {

  shops: any = [
    {
      id: 1,
      image: 'https://prod-cdn.unation.com/orbweaver-prod/event-themes/3558223/theme-1616738086.jpeg',
      name: 'Ready Set Grow Plant Exchange',
      start_date: 'May 15, 2021',
      start_time: '2:00pm',
      created_by: 'Eventbrite',
      price: ''
    },
    {
      id: 2,
      image: 'https://prod-cdn.unation.com/orbweaver-prod/event-themes/3569976/theme-1616825106.jpeg',
      name: 'Exotic Car Show',
      start_date: 'May 15, 2021',
      start_time: '9:00am',
      created_by: 'Eventbrite',
      price: '$10.00'
    },
    {
      id: 3,
      image: 'https://prod-cdn.unation.com/orbweaver-prod/event-themes/1115185/theme-1609055086.jpeg',
      name: 'Team Battle Als Walk',
      start_date: 'May 15, 2021',
      start_time: '8:00am',
      created_by: 'Eventbrite',
      price: '$25.00'
    }
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  view(item) {
    let replaceSpaceToDash = item.title.split(' ').join('-');
    this.router.navigate(['/page/page-details/', replaceSpaceToDash], { state: {page: item} })
  }

}
