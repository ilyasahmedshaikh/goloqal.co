import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsActivitesComponent } from './things-activites.component';

describe('ThingsActivitesComponent', () => {
  let component: ThingsActivitesComponent;
  let fixture: ComponentFixture<ThingsActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsActivitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
