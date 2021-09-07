import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  location: any = new Subject<any>();
  lat: number = 0;
  lng: number = 0;
  address: any = {};

  constructor(
    private http: HttpClient
  ) { }

  getLocation() {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        
        // reverse geocoding
        let URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=${environment.google_maps_api}`;
        
        this.http.get(URL).subscribe((loc: any) => {
          let city_country = loc.plus_code.compound_code.split(',');

          console.log(loc.plus_code.compound_code);

          this.location.next({
            lat: this.lat,
            lng: this.lng,
            city: city_country[1],
            country: city_country[2]
          });
        })
      });
    } else {
      this.location.next('geolocation is not available');
    }
    
  }
}
