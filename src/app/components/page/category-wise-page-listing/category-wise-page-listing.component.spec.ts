import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWisePageListingComponent } from './category-wise-page-listing.component';

describe('CategoryWisePageListingComponent', () => {
  let component: CategoryWisePageListingComponent;
  let fixture: ComponentFixture<CategoryWisePageListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWisePageListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWisePageListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
