import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'ne-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: [
    './sidemenu.component.scss',
    './_sidemenu.theme.scss'
    ],
  encapsulation: ViewEncapsulation.None
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
