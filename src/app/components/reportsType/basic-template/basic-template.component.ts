import { Component, OnInit, Input } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.css']
})
export class BasicTemplateComponent implements OnInit {
  @Input() data: any;
  constructor(private reportsService: ReportsService, private router: Router) { }

  ngOnInit() {
  }

  itemClick(currentItem) {
    this.reportsService.setCurrentReportItem(currentItem);
    this.router.navigate(["singleReport"]);
  }

}
