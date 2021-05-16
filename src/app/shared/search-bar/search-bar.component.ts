import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  showOptions: boolean = false;
  selectedOption: any = 'Austin, TX';

  constructor() { }

  ngOnInit(): void {
  }

  showOptionsToggle(event?) {
    this.showOptions = !this.showOptions;

    if(event) {
      let selected = event.target.outerText;
      this.selectedOption = selected;
    }
  }

}
