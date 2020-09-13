import { TestBed } from '@angular/core/testing';

import { Task7Service } from './task7.service';

describe('Task7Service', () => {
  let service: Task7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
