import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  list: any = [
    {
      id: 1,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/5048/4130/original/thumbnail.jpg',
      name: '4th Annual Taco & Tequila Crawl: ATL',
      start_date: 'May 15, 2021',
      start_time: '1:00pm',
      created_by: 'Eventbrite',
      price: '$5.00'
    },
    {
      id: 2,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/5048/4130/original/thumbnail.jpg',
      name: 'Chastain Park Spring Arts & Crafts Festival 2021',
      start_date: 'May 15, 2021',
      start_time: '1:00pm',
      created_by: 'Eventbrite',
      price: '$5.00'
    },
    {
      id: 3,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/5048/4130/original/thumbnail.jpg',
      name: 'Fernbank After Dark: Eye Spy',
      start_date: 'May 15, 2021',
      start_time: '1:00pm',
      created_by: 'Eventbrite',
      price: '$5.00'
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
