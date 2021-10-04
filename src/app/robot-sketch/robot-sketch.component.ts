import { Component, OnInit } from '@angular/core';
import p5 from 'p5';
;

@Component({
  selector: 'app-robot-sketch',
  templateUrl: './robot-sketch.component.html',
  styleUrls: ['./robot-sketch.component.scss']
})
export class RobotSketchComponent implements OnInit {

  canvas: any;


  constructor() {}

  ngOnInit() {
    // this sketch was modified from the original
    // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
    const sketch = (s: any) => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);
        canvas2.parent('sketch-wrapper');

        s.background(23, 18, 43, 255);

        // s.rect(0, 0, s.width, s.height);
      };

      s.draw = () => {
        s.noFill()
        s.stroke(123, 212, 15, 255);
        s.circle(s.width /2, s.height / 2, s.height / 4);
      };

      /* s.mouseReleased = () => {

      };

      s.keyPressed = () => {

      }; */
    };

    this.canvas = new p5(sketch);
  }

}
