import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraReadingComponent } from './camera-reading.component';

describe('CameraReadingComponent', () => {
  let component: CameraReadingComponent;
  let fixture: ComponentFixture<CameraReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
