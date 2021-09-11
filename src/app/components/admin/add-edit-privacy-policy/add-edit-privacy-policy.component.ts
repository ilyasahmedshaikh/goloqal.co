import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-add-edit-privacy-policy',
  templateUrl: './add-edit-privacy-policy.component.html',
  styleUrls: ['./add-edit-privacy-policy.component.scss']
})
export class AddEditPrivacyPolicyComponent implements OnInit {

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
    this.api.getAll(this.config.collections.contentPages.privacyPolicy).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  addContent() {
    let data = {
      content: this.content
    }
    
    let request = this.api.post(this.config.collections.contentPages.privacyPolicy, data);

    request.then(() => {
      alert('Content Added.');
      this.router.navigateByUrl("/auth/privacy-policy");
    })
    .catch((error) => {
      alert(error);
    });
  }

  updateContent() {
    let data = {
      content: this.content
    }
    
    let request = this.api.put(this.config.collections.contentPages.privacyPolicy, this.data[0]?.id, data);

    request.then(() => {
      alert('Content Updated.');
      this.router.navigateByUrl("/auth/privacy-policy");
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
