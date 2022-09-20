/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectFormService } from './projectForm.service';

describe('Service: ProjectForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectFormService]
    });
  });

  it('should ...', inject([ProjectFormService], (service: ProjectFormService) => {
    expect(service).toBeTruthy();
  }));
});
