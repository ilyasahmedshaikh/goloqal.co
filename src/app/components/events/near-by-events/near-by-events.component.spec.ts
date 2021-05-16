import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByEventsComponent } from './near-by-events.component';

describe('NearByEventsComponent', () => {
  let component: NearByEventsComponent;
  let fixture: ComponentFixture<NearByEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearByEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearByEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
