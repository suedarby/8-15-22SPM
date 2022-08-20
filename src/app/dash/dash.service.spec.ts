/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashService } from './dash.service';

describe('Service: Dash', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashService]
    });
  });

  it('should ...', inject([DashService], (service: DashService) => {
    expect(service).toBeTruthy();
  }));
});
