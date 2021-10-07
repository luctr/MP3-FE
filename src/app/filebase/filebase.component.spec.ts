import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilebaseComponent } from './filebase.component';

describe('FilebaseComponent', () => {
  let component: FilebaseComponent;
  let fixture: ComponentFixture<FilebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
