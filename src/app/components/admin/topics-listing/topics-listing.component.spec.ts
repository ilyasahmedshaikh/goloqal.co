import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsListingComponent } from './topics-listing.component';

describe('TopicsListingComponent', () => {
  let component: TopicsListingComponent;
  let fixture: ComponentFixture<TopicsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
