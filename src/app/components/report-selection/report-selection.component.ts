import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { Router, ActivatedRoute } from '@angular/router'
import { SumReportService } from '../../services/sum-report.service';

@Component({
  selector: 'app-report-selection',
  templateUrl: './report-selection.component.html',
  styleUrls: ['./report-selection.component.css']
})
export class ReportSelectionComponent implements OnInit {
  @ViewChild('homeVideo') homeVideo: ElementRef;
  constructor(private reportService: ReportsService, private router: Router, private routeActive: ActivatedRoute, private sumReportService: SumReportService) { }

  ngOnInit() {
    this.homeVideo.nativeElement.playbackRate = 1;
  }

  routeToSelctedReport(action) {
    this.reportService.setReportState(action);
    this.router.navigate(['/store']);
  }
}
