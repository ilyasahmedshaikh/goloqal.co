import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';

@Component({
  selector: 'app-add-edit-slider',
  templateUrl: './add-edit-slider.component.html',
  styleUrls: ['./add-edit-slider.component.scss']
})
export class AddEditSliderComponent implements OnInit {

  preview: any = "";
  imageUploaded: boolean = false;
  isReset: boolean = false;

  sliders: any = [];
  sliderName: string = "";
  slider: any = {};

  constructor(
    private config: ConfigService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getSliders();
  }

  onImagePreview(event) {
    this.preview = event.preview;
    this.imageUploaded = event.imageUploaded;
  }

  addSlider() {
    this.slider = {
      name: this.sliderName,
      image: this.preview
    }

    this.uploadSlider();
  }

  uploadSlider() {
    let request = this.api.post(this.config.collections.sliders_table, this.slider);

    request.then(() => {
      this.getSliders();
      
      // reseting the image add form
      this.sliderName = "";
      this.isReset = true;
    })
    .catch((error) => {
      alert(error);
    });
  }

  getSliders() {
    this.api.getAll(this.config.collections.sliders_table).subscribe(res =>{
      this.sliders = res;
    });
  }

}
