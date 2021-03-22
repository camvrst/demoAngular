import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrls: ['./exo01.component.scss']
})
export class Exo01Component implements OnInit {

  chrono : number = 0;
  interval;

  disabledStart : boolean = false;
  disabledStop : boolean = true;
  disabledReset : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  startChrono() {
    this.disabledStart = true;
    this.disabledStop = false;
    this.disabledReset = false;
    this.interval = setInterval(() => {
      this.chrono++
    }, 1000);
  }

  stopChrono() {
    this.disabledStart = false;
    this.disabledStop = false;
    this.disabledReset = false;
    clearInterval(this.interval);
  }

  resetChrono() {
    this.stopChrono();
    this.chrono = 0;
    this.disabledReset = true;
  }
}
