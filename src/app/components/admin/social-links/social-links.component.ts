import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  @ViewChild('socialModalClose') modalClose;

  programForm: any = FormGroup;
  socials: any = [];

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getSocials();
  }

  formInit() {
    this.programForm = this.fb.group({
      facebook: ['', Validators.required],
      twitter: ['', Validators.required],
      instagram: ['', Validators.required],
      pinterest: ['', Validators.required],
      line: ['', Validators.required],
    });
  }

  getSocials() {
    this.api.getAll(this.config.collections.socials_table).subscribe(res => {
      this.socials = res;
    })
  }

  editSocials() {
    this.programForm.setValue({
      facebook: this.socials[0].facebook,
      twitter: this.socials[0].twitter,
      instagram: this.socials[0].instagram,
      pinterest: this.socials[0].pinterest,
      line: this.socials[0].line,
    })
  }

  saveSocials() {
    let request = this.api.post(this.config.collections.socials_table, this.programForm.value);
    request.then(() => {
      alert('Socials Saved.');
      this.getSocials();
    })
    .catch((error) => {
      alert(error);
    });
  }

  updateSocials() {
    let request = this.api.put(this.config.collections.socials_table, this.socials[0].id, this.programForm.value);
    request.then(() => {
      alert('Socials Updated.');
      this.modalClose.nativeElement.click();
      this.getSocials();
    })
    .catch((error) => {
      alert(error);
    });
  }

}
