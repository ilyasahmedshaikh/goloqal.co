import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearByShopsComponent } from './near-by-shops.component';

describe('NearByShopsComponent', () => {
  let component: NearByShopsComponent;
  let fixture: ComponentFixture<NearByShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearByShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearByShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
