import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.scss']
})
export class Demo03Component implements OnInit {

  maVar1 : string = "Bonjour !";
  maVar2 : number = 10;
  maVar3 : Date = new Date(); 
  maVar4 : number = 243;
  constructor() { }

  ngOnInit(): void {
  }

}
