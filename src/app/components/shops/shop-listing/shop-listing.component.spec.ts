import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListingComponent } from './shop-listing.component';

describe('ShopListingComponent', () => {
  let component: ShopListingComponent;
  let fixture: ComponentFixture<ShopListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
