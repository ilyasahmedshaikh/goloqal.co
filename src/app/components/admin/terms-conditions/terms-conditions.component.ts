import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  content: string = "";
  data: any = {};
  isEdit: boolean = false;

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {
    this.api.getAll(this.config.collections.contentPages.termsConditions).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  addContent() {
    let data = {
      content: this.content
    }
    
    let request = this.api.post(this.config.collections.contentPages.termsConditions, data);

    request.then(() => {
      alert('Content Added.');
      this.router.navigateByUrl("/auth/terms-conditions");
    })
    .catch((error) => {
      alert(error);
    });
  }

  updateContent() {
    let data = {
      content: this.content
    }
    
    let request = this.api.put(this.config.collections.contentPages.termsConditions, this.data[0]?.id, data);

    request.then(() => {
      alert('Content Updated.');
      this.router.navigateByUrl("/auth/terms-conditions");
    })
    .catch((error) => {
      alert(error);
    });
  }

  onEdit() {
    this.isEdit = !this.isEdit;
    this.content = this.data[0].content;
  }

  onCancel() {
    this.isEdit = !this.isEdit;
  }

}
