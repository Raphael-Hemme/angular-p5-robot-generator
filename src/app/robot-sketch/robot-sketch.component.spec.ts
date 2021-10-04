import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotSketchComponent } from './robot-sketch.component';

describe('SketchComponent', () => {
  let component: RobotSketchComponent;
  let fixture: ComponentFixture<RobotSketchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotSketchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
