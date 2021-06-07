import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss']
})
export class BlogListingComponent implements OnInit {

  data: any = [];

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.data =[
      {
        id: 1,
        image: 'assets/img/blog1.jpg',
        title: 'Social Media Marketing For Your Restaurant',
        text: 'Social media provides a multitude of outlets for you to reach new audiences. From pictures to podcasts, you can perfectly curate how you want to represent your restaurant, and start drawing ...',
        user: {
          name: 'Kelsey Campbell',
          date: '21 Jul 20 9:31 pm',
          image1: 'assets/img/man.jpg',
        }
      },
      {
        id: 2,
        image: 'assets/img/blog2.png',
        title: 'What Makes Farmers Markets So Special',
        text: 'By shopping at your local market, you’re treating yourself to fresh, seasonal, produce. In fact, one study in Washington DC states that 80% of the food sold at your local ...',
        user: {
          name: 'Kayla Gil',
          date: '16 Jul 20 4:38 pm',
          image1: 'assets/img/girl1.jpg',
        }
      },
      {
        id: 3,
        image: 'assets/img/blog3.jpg',
        title: 'UNATION’s Stuff to Do City Guide 2.0',
        text: 'We’ve got some exciting news! UNATION’s Stuff to Do City Guide has some upgrades and a fresh new look. With new search and navigation features plus a new mobile-friendly experience, ...',
        user: {
          name: "Aimee Pacchiarotti",
          date: "13 Jul 20 2:00 pm",
          image1: "assets/img/girl2.jpg",
        }
      },
      {
        id: 4,
        image: 'assets/img/blog4.png',
        title: 'How to Make Your Restaurant Instagrammable',
        text: 'You have seven seconds. Seven seconds to impress the bachelorette group that walked in with iPhones ready to document their experience at your restaurant..',
        user: {
          name: "Leah Kingsbury",
          date: "2 Jul 20 8:59 am",
          image1: "assets/img/man1.png",
        }
      },
      {
        id: 5,
        image: 'assets/img/blog5.jpg',
        title: 'Tips for Hosting a Great Influencer Event',
        text: 'Businesses have thought up all sorts of creative ways to spread the word.  One of the more recent methods that has gained a ton of popularity in the last couple ...',
        user: {
          name: "Kelsey Campbell",
          date: "26 Jun 20 9:27 am",
          image1: "assets/img/girl3.jpg",
        },
      },
      {
        id: 6,
        image: 'assets/img/blog6.jpg',
        title: 'New Updates for UNATION Ticketing',
        text: 'Event creators, rejoice! UNATION‘s ticketing admin has some exciting updates.',
        user: {
          name: "John Pacchiarotti",
          date: "25 Jun 20 4:00 pm",
          image1: "assets/img/man2.png",
        },
      },
      {
        id: 7,
        image: 'assets/img/blog7.jpg',
        title: '4 Reasons to Check Out Your City’s Independent Music Venues',
        text: 'As tours continue to be canceled, music venues need their fans more than ever. Consider showing support for the local artistry that lives in your city.',
        user: {
          name: "Laurel Ordonez",
          date: "3 Jun 20 3:49 pm",
          image1: "assets/img/girl4.jpg",
        },
      },
      {
        id: 8,
        image: 'assets/img/blog8.jpg',
        title: 'Why We Should Shop Small',
        text: 'We love the quirky shops, corner cafes, and artisan boutiques that make our communities unique!  Small businesses are the backbone of commerce in America, and we believe that whenever possible.',
        user: {
          name: "Semth Campbell",
          date: "26 Jun 20 9:27 am",
          image1: "assets/img/man2.png",
        },
      },
      {
        id: 9,
        image: 'assets/img/blog9.jpg',
        title: 'Restaurants We Can’t Wait to Visit Again',
        text: 'Businesses have thought up all sorts of creative ways to spread the word.  One of the more recent methods that has gained a ton of popularity in the last couple...',
        user: {
          name: "Kelci Wallace",
          date: "18 May 20 10:06 pm",
          image1: "assets/img/girl4.jpg",
        },
      },
      {
        id: 10,
        image: 'assets/img/blog10.jpg',
        title: 'How to Host Virtual Events',
        text: 'Interested in learning how to host virtual events? UNATION has several tips for you to consider to ensure your new venture is a success.',
        user: {
          name: "Adom Campbell",
          date: "5 May 20 5:38 pm",
          image1: "assets/img/man3.png",
        },
      },
    ]
  }

}
