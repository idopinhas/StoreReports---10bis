import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumbs.component.html'
})

export class BreadcrumbComponent implements OnInit {


  public breadcrumbs: Breadcrumb[];

  /**
  /*.filter(event => event instanceof NavigationEnd)
 .distinctUntilChanged()
 .map(event =>  this.buildBreadCrumb(this.activatedRoute.root)); */

  constructor(private router: Router, private route: ActivatedRoute, private reportsService: ReportsService) {
    let breadcrumb: Breadcrumb = {
      label: 'Home',
      url: ''
    };
  }

  ngOnInit() {
    let storeName = this.reportsService.storeName;
    let posName = this.reportsService.posName;
    let reportState = this.reportsService.getReportState();
    switch (reportState) {
      case 'sumReport':
        reportState = 'sum Report';
        break;
    }
    this.breadcrumbs = [
      { label: 'Home', url: '' },
      { label: storeName == '' ? 'Choose Resturant' : storeName, url: '/store' },
      { label: posName == '' ? 'Choose Pos' : posName, url: '/pos' },
      { label: reportState , url: ''},
    ];
  }

}

export interface Breadcrumb {
  label: string;
  url: string;
}

