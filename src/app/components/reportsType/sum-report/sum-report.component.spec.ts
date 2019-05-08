import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumReportComponent } from './sum-report.component';

describe('SumReportComponent', () => {
  let component: SumReportComponent;
  let fixture: ComponentFixture<SumReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
