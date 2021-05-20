import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByPageComponent } from './near-by-page.component';

describe('NearByPageComponent', () => {
  let component: NearByPageComponent;
  let fixture: ComponentFixture<NearByPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearByPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearByPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
