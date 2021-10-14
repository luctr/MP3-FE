import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongUserIdComponent } from './song-user-id.component';

describe('SongUserIdComponent', () => {
  let component: SongUserIdComponent;
  let fixture: ComponentFixture<SongUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongUserIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
