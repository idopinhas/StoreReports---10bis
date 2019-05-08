import { Component, OnInit , ViewChild , ViewContainerRef , ComponentFactoryResolver} from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { ReportsService } from '../../services/reports.service';
import { Location } from '@angular/common';

//components views
import { BasicTemplateComponent } from '../reportsType/basic-template/basic-template.component';
import { ShuffleTemplateComponent } from '../reportsType/shuffle-template/shuffle-template.component';
import { SumReportComponent } from '../reportsType/sum-report/sum-report.component';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  posId: string;
  storeId: string;
  startDate: string;
  endDate: string;

  @ViewChild("reportContainer", { read: ViewContainerRef }) container;
  componentRef;

  constructor(private reportsService: ReportsService, private route: ActivatedRoute, private router: Router, private _location: Location , private resolver : ComponentFactoryResolver) { }
  basicReport: any[];
  shuffleReport: any[];
  reportData: any[];


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.posId = params.posId;
    })
  }

  dateStartSelect(e) {
    this.startDate = `${e.month}/${e.day}/${e.year} `;
    console.log(this.startDate);
  }

  dateEndSelect(e) {
    this.endDate = `${e.month}/${e.day}/${e.year} `;
    console.log(this.endDate);
  }

  datesSelected() {
    let reportState = this.reportsService.getReportState();
    switch (reportState) {
      case 'basic':
        this.reportsService.getReportByDate(this.posId, this.startDate, this.endDate).subscribe((response) => {
          this.reportData = response.Data;
          this.container.clear();
          const factory = this.resolver.resolveComponentFactory(BasicTemplateComponent);
          this.componentRef = this.container.createComponent(factory);
          this.componentRef.instance.data = this.reportData;
        })
        break;

      case 'shuffle':
        this.reportsService.getReportByDate(this.posId, this.startDate, this.endDate).subscribe((response) => {
          this.reportData = response.Data;
          this.container.clear();
          const factory = this.resolver.resolveComponentFactory(ShuffleTemplateComponent);
          this.componentRef = this.container.createComponent(factory);
          this.componentRef.instance.data = this.reportData;
        })
        break;

      case 'sumReport':
        this.reportsService.getReportByDate(this.posId, this.startDate, this.endDate).subscribe((response) => {
          this.reportData = response.Data;
          this.container.clear();
          const factory = this.resolver.resolveComponentFactory(SumReportComponent);
          this.componentRef = this.container.createComponent(factory);
          this.componentRef.instance.data = this.reportData;
        })
        break;
    }
  }

  backBtnClick() {
    this.reportsService.posName = '';
    console.log(this.reportsService.posName + "pos name is");
  }
}
