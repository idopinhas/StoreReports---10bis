import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './routes/app-routing.module';
import { StoreComponent } from './components/store/store.component';
import { PosDatesComponent } from './components/pos/pos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { PosItemComponent } from './components/pos-item/pos-item.component';
import { DatesComponent } from './components/dates/dates.component';
import { SingleReportComponent } from './components/single-report/single-report.component';
import { ReportSelectionComponent } from './components/report-selection/report-selection.component';
import { BackBtnComponent } from './components/buttons/back-btn/back-btn.component';
import { BasicTemplateComponent } from './components/reportsType/basic-template/basic-template.component';
import { ShuffleTemplateComponent } from './components/reportsType/shuffle-template/shuffle-template.component';
import { BreadcrumbComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SumReportComponent } from './components/reportsType/sum-report/sum-report.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    PosDatesComponent,
    NavbarComponent,
    StoreItemComponent,
    PosItemComponent,
    DatesComponent,
    SingleReportComponent,
    ReportSelectionComponent,
    BackBtnComponent,
    BasicTemplateComponent,
    ShuffleTemplateComponent,
    BreadcrumbComponent,
    SumReportComponent
  ],
  entryComponents: [BasicTemplateComponent, ShuffleTemplateComponent , SumReportComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
