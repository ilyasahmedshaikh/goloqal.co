import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../core/http/config/config.service';
import { ApiService } from '../../core/http/api/api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  data: any = {};
  selected: number = 0;

  constructor(
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {
    this.api.getAll(this.config.collections.contentPages.faq).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  onAccordian(i) {
    this.selected = i;
  }

}
