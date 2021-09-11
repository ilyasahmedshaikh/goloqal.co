import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeForNewsComponent } from './subscribe-for-news.component';

describe('SubscribeForNewsComponent', () => {
  let component: SubscribeForNewsComponent;
  let fixture: ComponentFixture<SubscribeForNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeForNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeForNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
