import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotGeneratorUiComponent } from './robot-generator-ui.component';

describe('RobotGeneratorUiContainerComponent', () => {
  let component: RobotGeneratorUiComponent;
  let fixture: ComponentFixture<RobotGeneratorUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotGeneratorUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotGeneratorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
