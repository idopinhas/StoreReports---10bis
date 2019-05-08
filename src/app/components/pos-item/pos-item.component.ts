import { Component, OnInit, Input } from '@angular/core';
import { Pos } from '../../shared/interfaces/pos';

@Component({
  selector: 'app-pos-item',
  templateUrl: './pos-item.component.html',
  styleUrls: ['./pos-item.component.css']
})
export class PosItemComponent implements OnInit {
  @Input() pos: Pos;
  constructor() { }

  ngOnInit() {
  }

}
