import { Component, Input, OnInit } from '@angular/core';
import { INewUser } from '../../model/card';

@Component({
  selector: 'app-user-regitration',
  templateUrl: './user-regitration.component.html',
  styleUrls: ['./user-regitration.component.scss']
})
export class UserRegitrationComponent implements OnInit {

  @Input() user_R !: Array<INewUser>;

  constructor() { }

  ngOnInit(): void {
  }

}
