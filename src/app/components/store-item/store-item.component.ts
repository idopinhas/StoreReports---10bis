import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  @Input() store:any;
  constructor() { }

  ngOnInit() {
  }

}
