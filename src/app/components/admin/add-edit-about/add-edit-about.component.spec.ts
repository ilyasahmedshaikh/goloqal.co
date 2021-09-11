import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAboutComponent } from './add-edit-about.component';

describe('AddEditAboutComponent', () => {
  let component: AddEditAboutComponent;
  let fixture: ComponentFixture<AddEditAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
