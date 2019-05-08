import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ReportsService } from '../../services/reports.service';
import { SumReportService } from '../../services/sum-report.service';
import { Location } from '@angular/common';
import { Pos } from '../../shared/interfaces/pos';
import { Store } from '../../shared/interfaces/store';


@Component({
  selector: 'app-pos-dates',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})

export class PosDatesComponent implements OnInit {
  loaderActive: boolean = true;
  posList: Pos;
  store: Store;

  constructor(private reportsService: ReportsService, private route: ActivatedRoute, private router: Router, private _location: Location, private sumReportService: SumReportService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.reportsService.getPosesById(id).subscribe((result) => {
      this.loaderActive = false;
      this.posList = result;
    })
  }

  posClicked(posEl) {
    this.reportsService.posName = posEl.Name;
    this.sumReportService.setReportPosName(posEl.name);
    this.router.navigate(['/date'], { queryParams: { posId : posEl.ID} });
  }

  backBtnClick() {
    this.reportsService.storeName = "";
    this.reportsService.posName = "";
  }
}
