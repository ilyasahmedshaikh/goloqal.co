import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {

  @Input('url') url: string;
  @Input('position') position: string;

  openSocials: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      // clicked inside - do nothing
    }
    else {
      this.onToggleSocials();
    }
  }

  constructor(
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  onShare(socialShare: any) {
    switch (socialShare) {
      case 'fb':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.url}`);
        break;
      case 'tw':
        window.open(`https://twitter.com/home?status=${this.url}`);
        break;
      case 'in':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`);
        break;
      case 'pn':
        window.open(`https://www.pinterest.com/pin/find/?url=${this.url}`);
        break;
      default:
        break;
    }

    this.onToggleSocials();
  }

  onToggleSocials() {
    this.openSocials = !this.openSocials;
  }

}
