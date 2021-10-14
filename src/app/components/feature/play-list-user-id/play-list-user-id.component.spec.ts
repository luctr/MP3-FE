import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListUserIdComponent } from './play-list-user-id.component';

describe('PlayListUserIdComponent', () => {
  let component: PlayListUserIdComponent;
  let fixture: ComponentFixture<PlayListUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayListUserIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
