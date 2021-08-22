import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onSelectedCountry = new EventEmitter<any>();

  showOptions: boolean = false;
  selectedOption: any = '';

  countries: any = [
    {id: 1, name: 'Thailand'},
    {id: 2, name: 'China'},
    {id: 3, name: 'Unites States'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectedOption = this.countries[0];
    this.onSelectedCountry.emit(this.selectedOption);
  }

  showOptionsToggle(country?) {
    this.showOptions = !this.showOptions;

    if(country) {
      let selected = country;
      this.selectedOption = selected;
      this.onSelectedCountry.emit(this.selectedOption);
    }
  }

}
