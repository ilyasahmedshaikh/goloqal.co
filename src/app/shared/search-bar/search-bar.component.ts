import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GoogleMapsService } from 'src/app/core/services/google-maps/google-maps.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onSelectedCountry = new EventEmitter<any>();

  showOptions: boolean = false;
  selectedOption: any = '';

  cities: any = [
    { name: 'Live Location' },
  ];

  constructor(
    private googleMaps: GoogleMapsService
  ) { }

  ngOnInit(): void {
    this.selectedOption = this.cities[0];
    this.onSelectedCountry.emit(this.selectedOption);

    this.googleMaps.getLocation();
    this.getLocation();
  }

  showOptionsToggle(country?) {
    this.showOptions = !this.showOptions;

    if(country) {
      let selected = country;
      this.selectedOption = selected;
      this.onSelectedCountry.emit(this.selectedOption);
    }
  }

  getLocation() {
    this.googleMaps.location.subscribe(res => {
      let city = res.city;
      this.cities.push({ name: city });
      this.selectedOption = this.cities[0];

      // sending data to parent
      this.onSelectedCountry.emit(this.selectedOption);
    })
  }

}
