import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTop6Component } from './song-top6.component';

describe('SongTop6Component', () => {
  let component: SongTop6Component;
  let fixture: ComponentFixture<SongTop6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongTop6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTop6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
