import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumReportService {
  sumStoreName: string;
  sumPosName: string;

  constructor() { }

  setReportStoreName(storeName) {
    this.sumStoreName = storeName;
  }

  getReportStoreName() {
    return this.sumStoreName;
  }

  setReportPosName(posName) {
    this.sumPosName = posName;
  }

  getReportPosName() {
    return this.sumPosName;
  }
}
