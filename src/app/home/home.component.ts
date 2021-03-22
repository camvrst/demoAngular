import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// OnInit = Interface mise en place par Angular
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
