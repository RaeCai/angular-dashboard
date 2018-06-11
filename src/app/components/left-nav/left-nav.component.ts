import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  public navList: Array<string> = [];
  constructor() { }

  ngOnInit() {
    this.navList = [
      'Home',
      'Mango',
      'Durian',
      'Apple',
      'Pear'
    ];
  }

}
