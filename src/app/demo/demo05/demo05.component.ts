import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05',
  templateUrl: './demo05.component.html',
  styleUrls: ['./demo05.component.scss']
})
export class Demo05Component implements OnInit {

  maVar : string;
  isToggled : boolean;
  list : string[];
  constructor() { }

  ngOnInit(): void {
    this.isToggled = false;
    this.list = ['pommes', 'fraises', 'mangues'];
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

}
