import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCommunityComponent } from './place-community.component';

describe('PlaceCommunityComponent', () => {
  let component: PlaceCommunityComponent;
  let fixture: ComponentFixture<PlaceCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
