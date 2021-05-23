import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalServicesComponent } from './local-services.component';

describe('LocalServicesComponent', () => {
  let component: LocalServicesComponent;
  let fixture: ComponentFixture<LocalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
