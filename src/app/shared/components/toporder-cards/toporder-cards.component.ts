import { Component, Input, OnInit } from '@angular/core';
import { ITopCard } from '../../model/card';

@Component({
  selector: 'app-toporder-cards',
  templateUrl: './toporder-cards.component.html',
  styleUrls: ['./toporder-cards.component.scss']
})
export class ToporderCardsComponent implements OnInit {

  @Input() top_order !: Array<ITopCard>;

  constructor() { }

  ngOnInit(): void {
  }

}
