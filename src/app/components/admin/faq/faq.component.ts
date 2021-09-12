import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqCount: number = 4;
  content: any = [];

  data: any = {};
  isEdit: boolean = false;

  constructor(
    private config: ConfigService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getContent();

    for (let i = 0; i < this.faqCount; i++) {
      this.content.push({
        question: '',
        answer: ''
      })
    }
  }

  getContent() {
    this.api.getAll(this.config.collections.contentPages.faq).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  addContent() {
    let data = {
      content: this.content
    }
    
    let request = this.api.post(this.config.collections.contentPages.faq, data);

    request.then(() => {
      alert('Content Added.');
      this.router.navigateByUrl("/faq");
    })
    .catch((error) => {
      alert(error);
    });
  }

  updateContent() {
    let data = {
      content: this.content
    }
    
    let request = this.api.put(this.config.collections.contentPages.faq, this.data[0]?.id, data);

    request.then(() => {
      alert('Content Updated.');
      this.router.navigateByUrl("/faq");
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
