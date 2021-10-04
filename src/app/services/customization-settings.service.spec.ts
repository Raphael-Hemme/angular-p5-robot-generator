import { TestBed } from '@angular/core/testing';

import { CustomizationSettingsService } from './customization-settings.service';

describe('CustomizationSettingsService', () => {
  let service: CustomizationSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomizationSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
