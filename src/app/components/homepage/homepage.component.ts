import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ConfigService } from '../../core/http/config/config.service'
import { ApiService } from '../../core/http/api/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data: any = [];
  topics: any = [];
  topicWiseData: any = [];
  selectedCountry: any = '';

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();

    this.data =[
      {
        id: 1,
        image: 'assets/img/explore1.jpg',
        name: 'Hua Hin',
        time: '2.5 hour drive'
      },
      {
        id: 2,
        image: 'assets/img/explore2.jpg',
        name: 'Bankok',
        time: '2 hour drive'
      },
      {
        id: 3,
        image: 'assets/img/explore3.jpg',
        name: 'Cha-am',
        time: '1.5 hour drive'
      },
      {
        id: 4,
        image: 'assets/img/explore4.jpg',
        name: 'Pak Chong',
        time: '3.5 hour drive'
      },
      {
        id: 5,
        image: 'assets/img/explore5.jpg',
        name: 'Klaeng',
        time: '2 hour drive'
      },
      {
        id: 6,
        image: 'assets/img/explore6.jpg',
        name: 'Pran Buri',
        time: '4 hour drive'
      },
      {
        id: 7,
        image: 'assets/img/explore7.jpg',
        name: 'Sattahip',
        time: '3.5 hour drive'
      },
      {
        id: 8,
        image: 'assets/img/explore9.jpg',
        name: 'Kanchanaburi',
        time: '1.5 hour drive'
      }
    ]
  }

  view(item) {
    this.router.navigate(['/page/page-details'], { state: {page: item} })
  }

  getData() {
    let topics = this.config.topics;

    topics.forEach(t => {
      this.api.getWithQuery(this.config.collections.pages_table, "topic_id", "==", t.id).subscribe(response => {
        this.topicWiseData.push({
          ...t,
          data: response
        });
      });
    });
  }
  
  getSelectedCountry(event) {
    this.selectedCountry = event;
    console.log(event);
    
  }
}
