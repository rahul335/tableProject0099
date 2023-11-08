import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { INewUser, IRecentOrder, IRoot, ITopCard } from '../../model/card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private _httpServices = inject(HttpService);
  top_order !: Array<ITopCard>;
  user_R !: Array<INewUser>;
  table_order !: Array<IRecentOrder>


;
  constructor() { }

  ngOnInit(): void {
    this._httpServices.getData().subscribe((ele : IRoot) =>{
        this.top_order = ele.top_cards,
        this.user_R = ele.new_users,
        this.table_order = ele.recent_orders
    })
  }

}
