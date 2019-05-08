import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Store } from '../shared/interfaces/store';
import { Observable } from 'rxjs';

//Subject example
// import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  currentReportItem;
  storeName: string;
  posName: string;
  reportState = 'basic';
  appStore;

  constructor(private _http: HttpClient) {
   // this.appStore = new BehaviorSubject<string>('');
   // var i = 0;
   // setInterval(() => {
   //   this.appStore.next(i)
   //   i++;
   // },2000)
  }

  getStores(): Observable<Store[]> {
    return this._http.get<any>(`${environment.apiBaseUrl}/API/GetStores?token=c30633f5-7bea-8af6-e49c-12e1e42ed0fe`);
  }

  getPosesById(id) {
    return this._http.get<any>(`${environment.apiBaseUrl}/API/GetPoses?token=c30633f5-7bea-8af6-e49c-12e1e42ed0fe&storeId=${id}`);
  }

  getReportByDate(posId, startDate, endDate) {
    return this._http.get<any>(`${environment.apiBaseUrl}/API/GetOrders?token=c30633f5-7bea-8af6-e49c-12e1e42ed0fe&posId=${posId}&startDate=${startDate}&endDate=${endDate}`);
  }

  setCurrentReportItem(currentItem) {
    this.currentReportItem = currentItem;
  }

  getCurrentReportItem() {
    return this.currentReportItem;
  }

  setReportState(action) {
    this.reportState = action;
  }

  getReportState() {
    return this.reportState;
  }
}
