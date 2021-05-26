import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSliderComponent } from './add-edit-slider.component';

describe('AddEditSliderComponent', () => {
  let component: AddEditSliderComponent;
  let fixture: ComponentFixture<AddEditSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
