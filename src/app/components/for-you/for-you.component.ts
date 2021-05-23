import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent implements OnInit {

  events: any = [
    {
      id: 1,
      image: 'https://prod-cdn.unation.com/orbweaver-prod/event-themes/40152/theme-1609057989.jpeg',
      name: 'Musiq Soulchild With Special Guest Avery Sunshine',
      start_date: 'May 15, 2021',
      start_time: '7:00pm',
      created_by: 'Ticketmaster',
      price: '$45.00'
    },
    {
      id: 2,
      image: 'https://prod-cdn.unation.com/orbweaver-prod/event-themes/380490/theme-1613888143.jpeg',
      name: 'ATLANTA-BARAK SHEKINAH LIVE 2021',
      start_date: 'May 15, 2021',
      start_time: '7:00pm',
      created_by: 'Eventbrite',
      price: '$33.46'
    },
    {
      id: 3,
      image: 'https://prod-cdn.unation.com/orbweaver-prod/event-themes/3202615/theme-1614407228.jpeg',
      name: 'Atlanta Braves vs. New York Mets',
      start_date: 'May 17, 2021',
      start_time: '7:10pm',
      created_by: 'Ticketmaster',
      price: '$7.00'
    }
  ]
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
  popularServices: any = [
    {
      id: 1,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/9836/5822/original/thumbnail.jpg',
      name: 'Virtual Memorial Day Celebration',
      start_date: 'May 15, 2021',
      start_time: '7:00pm',
      created_by: 'Expertiso',
      price: '$45.00'
    },
    {
      id: 2,
      image: 'https://prod-cdn.unation.com/orbweaver-prod/event-themes/2522446/theme-1617741916.jpeg',
      name: 'The Airborne Toxic Event Tickets',
      start_date: 'May 15, 2021',
      start_time: '7:00pm',
      created_by: 'StubHub',
      price: '$55.00'
    },
    {
      id: 3,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/8019/8190/original/thumbnail.jpg',
      name: 'Atlanta Braves New York Mets',
      start_date: 'May 17, 2021',
      start_time: '7:10pm',
      created_by: 'Expertiso',
      price: '$7.00'
    }
  ]
  thingsActivities: any = [
    {
      id: 1,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/9501/6027/original/thumbnail.jpg',
      name: 'Chicago Cubs at Pittsburgh Pirates',
      start_date: 'May 15, 2021',
      start_time: '7:00pm',
      created_by: 'SutHub',
      price: '$22.00'
    },
    {
      id: 2,
      image: 'https://un-prod-s3-bucket.s3.amazonaws.com/event_uvite_own_themes/image_thumbs/1296/2011/original/thumbnail.jpg',
      name: 'Gallery Crawl in the Cultural District Virtual Edition',
      start_date: 'May 15, 2021',
      start_time: '7:00pm',
      created_by: 'Pittsburgh',
      price: ''
    },
    {
      id: 3,
      image: 'https://prod-cdn.unation.com/orbweaver-prod/event-themes/2327682/theme-1608706055.jpeg',
      name: 'Allegheny Commons Public Art',
      start_date: 'May 17, 2021',
      start_time: '7:10pm',
      created_by: 'Pittsburgh',
      price: '$68.00'
    }
  ]
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
