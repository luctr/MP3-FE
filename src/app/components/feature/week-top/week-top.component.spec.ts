import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTopComponent } from './week-top.component';

describe('WeekTopComponent', () => {
  let component: WeekTopComponent;
  let fixture: ComponentFixture<WeekTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
