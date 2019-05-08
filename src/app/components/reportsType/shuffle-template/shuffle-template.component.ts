import { Component, OnInit , Input} from '@angular/core';
import { ReportsService } from '../../../services/reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shuffle-template',
  templateUrl: './shuffle-template.component.html',
  styleUrls: ['./shuffle-template.component.css']
})
export class ShuffleTemplateComponent implements OnInit {
  @Input() data: any;
  constructor(private reportsService : ReportsService , private router : Router) { }

  ngOnInit() {
  }

  itemClick(currentItem) {
    this.reportsService.setCurrentReportItem(currentItem);
    this.router.navigate(["singleReport"]);
  }

}
