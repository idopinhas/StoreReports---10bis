import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from '../components/store/store.component';
import { PosDatesComponent } from '../components/pos/pos.component';
import { DatesComponent } from '../components/dates/dates.component';
import { SingleReportComponent } from '../components/single-report/single-report.component';
import { ReportSelectionComponent } from '../components/report-selection/report-selection.component';

const appRoutes: Routes = [
  { path: '', component: ReportSelectionComponent, data: { breadcrumb: '' } },
  { path: 'store', component: StoreComponent, data: { breadcrumb: 'Store' } },
  { path: 'pos/:id', component: PosDatesComponent, data: { breadcrumb: 'Store / POS' } },
  { path: 'date', component: DatesComponent, data: { breadcrumb: 'Store / POS / Dates' } },
  { path: 'singleReport', component: SingleReportComponent, data: { breadcrumb: 'Store / POS / Dates / Single' } },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})

export class AppRoutingModule { }
