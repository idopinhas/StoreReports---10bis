import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { SumReportService } from '../../services/sum-report.service';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router'
import { Store } from '../../shared/interfaces/store';
import { BreadCrumb } from '../../shared/interfaces/bread-crumb';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  storeList: Store[];
  loaderActive: boolean = true;
  breadcrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd, distinctUntilChanged())
  ).pipe(map(event => this.buildBreadCrumb(this.routeActive.root)));
    //Build your breadcrumb starting with the root route of your current activated route

  constructor(private reportService: ReportsService, private router: Router, private routeActive: ActivatedRoute, private SumReportService: SumReportService) {

  }

  ngOnInit() {
    this.setReportView();
    // this.reportService.appStore.subscribe((result) => {
    // console.log(result);
    // }) 
  }

  // Resautrant choosed 
  restaurantsClick(el) {
    this.reportService.storeName = el.Name;
    this.SumReportService.setReportStoreName(el.Name);
    this.router.navigate(['/pos', el.ID]);
  }

  setReportView() {
    let reportState = this.reportService.getReportState();

    switch (reportState) {

      case 'basic':
        console.log('basic mode');
        this.reportService.getStores().subscribe((result) => {
          this.loaderActive = false;
          this.storeList = result;
        })
        break;

      case 'sumReport':
        console.log("Sum Mode");
        this.reportService.getStores().subscribe((result) => {
          this.loaderActive = false;
          this.storeList = result;
        })
        break;

      case 'shuffle':
        console.log("shuffle mode");
        this.reportService.getStores().subscribe((result) => {
          this.loaderActive = false;
          this.storeList = this.shuffleStoreList(result);
          console.log(this.storeList);
          console.log(this.shuffleStoreList(this.storeList));
        })
        break;
    }
  }

  shuffleStoreList(storeListArray) {
    var j, x, i;
    for (i = storeListArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = storeListArray[i];
      storeListArray[i] = storeListArray[j];
      storeListArray[j] = x;
    }
    return storeListArray;
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    //If no routeConfig is avalailable we are on the root path
    const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Home';
    const path = route.routeConfig ? route.routeConfig.path : '';
    //In the routeConfig the complete path is not available, 
    //so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      //If we are not on our current path yet, 
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    //return newBreadcrumbs;
    return [{ label: 'home', url: '/' }, { label: 'path', url: '/' }];
  }

  backBtnClick() {
    this.reportService.storeName = "";
    console.log("store name is restore !!!!")
  }
}
