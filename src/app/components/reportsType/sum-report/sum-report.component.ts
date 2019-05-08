import { Component, OnInit, Input } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sum-report',
  templateUrl: './sum-report.component.html',
  styleUrls: ['./sum-report.component.css']
})
export class SumReportComponent implements OnInit {
  @Input() data: any;
  sumReportData: any;
  constructor(private reportsService: ReportsService, private router: Router) {

  }

  ngOnInit() {
    console.log(this.data);
    this.sumReportData = this.getSumAndAmount();
    console.log(this.sumReportData);
  }

  getSumAndAmount() {
    debugger;
    let currentAmount = 0;
    const mapper = single => {
      let dTemp = single.EndTimeString.split(" ")[0];
      let d = dTemp.split('/');
      let p = Number(single.OrderSum);
      return { year: d[2], month: d[1], price: p };
    }

    const reducer = (group, current) => {
      let i = group.findIndex(single => (single.year == current.year && single.month == current.month));
      currentAmount++;
      if (i == -1) {
        return [...group, current];
      }

      group[i].price += current.price;
      group[i].amount = currentAmount;
      return group;
    };

    const sumPrices = this.data.map(mapper).reduce(reducer, []);
    return sumPrices;
  }

}
