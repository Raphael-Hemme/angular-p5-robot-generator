import { Component, OnChanges, OnInit } from '@angular/core';
import p5 from 'p5';
import { CustomizationSettingsService } from 'src/app/services/customization-settings.service';
;

@Component({
  selector: 'app-robot-sketch',
  templateUrl: './robot-sketch.component.html',
  styleUrls: ['./robot-sketch.component.scss']
})
export class RobotSketchComponent implements OnInit {

  canvas: any;
  // public circleSize:number = 0; 

  constructor(
    public customizationSettingsService: CustomizationSettingsService
  ) {}

  // This is not working. Including a call to the service's getCustomSize() method results in 60 calls per minute however.
  // Use RxJS observable with a unique operator and a debounceTime instead.
  /*   ngOnChanges (): void {
    this.circleSize = this.customizationSettingsService.getCustomSize()
  } */
       

  ngOnInit() {
    const sketch = (s: any) => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);
        canvas2.parent('sketch-wrapper');

        s.background(23, 18, 43, 255);
        
        // s.rect(0, 0, s.width, s.height);
      };

      s.draw = () => {
        if(s.frameCount % 2 === 0) {
        s.background(23, 18, 43, 255);
        s.noFill()
        s.stroke(123, 212, 15, 255);
        //s.circle(s.width /2, s.height / 2, this.circleSize);
        s.circle(s.width /2, s.height / 2, this.customizationSettingsService.getCustomSize());
        }
      };

      /* s.mouseReleased = () => {

      };

      s.keyPressed = () => {

      }; */
    };

    this.canvas = new p5(sketch);
  }

}
