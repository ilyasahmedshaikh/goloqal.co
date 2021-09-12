import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../core/http/config/config.service';
import { ApiService } from '../../core/http/api/api.service';

@Component({
  selector: 'app-subscribe-for-news',
  templateUrl: './subscribe-for-news.component.html',
  styleUrls: ['./subscribe-for-news.component.scss']
})
export class SubscribeForNewsComponent implements OnInit {

  data: any = {};
  today: any = new Date();

  constructor(
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {
    this.api.getAll(this.config.collections.contentPages.subscribeForNews).subscribe(res => {
      this.data = res;
    });
  }

}
