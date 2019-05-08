import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-single-report',
  templateUrl: './single-report.component.html',
  styleUrls: ['./single-report.component.css']
})
export class SingleReportComponent implements OnInit {
  userDetalis: any[];
  constructor(private reportsService: ReportsService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.userDetalis = this.reportsService.getCurrentReportItem();
  }
}
