import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrivacyPolicyComponent } from './add-edit-privacy-policy.component';

describe('AddEditPrivacyPolicyComponent', () => {
  let component: AddEditPrivacyPolicyComponent;
  let fixture: ComponentFixture<AddEditPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPrivacyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
