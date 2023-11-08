import { Component, OnInit } from '@angular/core';
import { Arraynavbar } from '../../conts/navlink';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  Arraynavbar : Array<string> = Arraynavbar;

  constructor() { }

  ngOnInit(): void {
  }

}
