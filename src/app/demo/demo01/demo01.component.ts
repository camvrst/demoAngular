import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component implements OnInit {

  maVariable : string = 'Web09';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.maVariable = "Camille"
    }, 5000);
  }

}
