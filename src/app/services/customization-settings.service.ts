import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomizationSettingsService {

  constructor() { }

  private customSize: number;

  public setCustomSize (value: number): void {
    console.log(this.customSize)
    this.customSize = value;
  }

  public getCustomSize (): number {
    console.log(this.customSize)
    return this.customSize;
  }
}
