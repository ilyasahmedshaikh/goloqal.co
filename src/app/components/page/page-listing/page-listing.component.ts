import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-listing',
  templateUrl: './page-listing.component.html',
  styleUrls: ['./page-listing.component.scss']
})
export class PageListingComponent implements OnInit {

  placesCommunities: any = [
    {
      id: 1,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/1517/9680/original/thumbnail.jpg',
      name: 'Memphis 2021 Exhibition | Dixon',
      start_date: 'May 15, 2021',
      start_time: '7:00pm',
      created_by: 'Memphis',
      price: ''
    },
    {
      id: 2,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/5038/0249/original/thumbnail.jpg',
      name: 'Great American River Run 2021',
      start_date: 'May 15, 2021',
      start_time: '7:00pm',
      created_by: 'Memphis',
      price: '$40.46'
    },
    {
      id: 3,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/8348/6743/original/thumbnail.jpg',
      name: 'Food Truck Garden Party',
      start_date: 'May 17, 2021',
      start_time: '7:10pm',
      created_by: 'Memphis',
      price: '$5.00'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
