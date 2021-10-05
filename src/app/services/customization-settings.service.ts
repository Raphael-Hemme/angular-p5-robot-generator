import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomizationSettingsService {

  constructor() { }

  public circleSizeSubject = new BehaviorSubject(0);
  



  public setCustomSize (value: number): void {
    console.log('setting');
    this.circleSizeSubject.next(value);
  }

}
