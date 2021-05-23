import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsProductsComponent } from './shops-products.component';

describe('ShopsProductsComponent', () => {
  let component: ShopsProductsComponent;
  let fixture: ComponentFixture<ShopsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
