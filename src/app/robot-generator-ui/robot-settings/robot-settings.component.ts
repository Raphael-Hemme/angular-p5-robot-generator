import { Component, OnInit } from '@angular/core';
import { CustomizationSettingsService } from 'src/app/services/customization-settings.service';

@Component({
  selector: 'app-robot-settings',
  templateUrl: './robot-settings.component.html',
  styleUrls: ['./robot-settings.component.scss']
})
export class RobotSettingsComponent implements OnInit {

  public sizeValue: number = 0;

  constructor(
    public customizationSettingsService: CustomizationSettingsService
  ) { }

  ngOnInit(): void {
  }

  changeSizeValue($event: any): void {
    console.log('changed', $event.target.value);
    // changes.prop contains the old and the new value...
    this.customizationSettingsService.setCustomSize($event.target.value);
  }

}
