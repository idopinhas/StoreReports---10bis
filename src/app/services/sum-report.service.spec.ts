import { TestBed } from '@angular/core/testing';

import { SumReportService } from './sum-report.service';

describe('SumReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumReportService = TestBed.get(SumReportService);
    expect(service).toBeTruthy();
  });
});
