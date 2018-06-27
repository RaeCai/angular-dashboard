import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  public navList: Array<string> = [];
  public options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false
    });
  }

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
