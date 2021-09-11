import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

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
    this.api.getAll(this.config.collections.contentPages.about).subscribe(res => {
      this.data = res;
    });
  }

}
