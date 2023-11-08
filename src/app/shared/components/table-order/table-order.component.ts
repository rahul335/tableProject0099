import { Component, Input, OnInit } from '@angular/core';
import { IRecentOrder } from '../../model/card';

@Component({
  selector: 'app-table-order',
  templateUrl: './table-order.component.html',
  styleUrls: ['./table-order.component.scss']
})
export class TableOrderComponent implements OnInit {


  @Input() table_order !: Array<IRecentOrder>

  constructor() { }

  ngOnInit(): void {
  }

}
