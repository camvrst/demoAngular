import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items : NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {link: '/home', title : "Home", icon : "home"},
      {link: '/about', title : "About", icon : "moon"},
      {title : 'Demo', icon : "book", children : [
        { link : '/demo/demo01', title: "Demo 01 - property bindings"},
        { link : '/demo/demo02', title: "Demo 02 - events bindings"},
        { link : '/demo/demo03', title: "Demo 03 - Pipes"},
        { link : '/demo/demo04', title: "Demo 04 - Binding two ways"},
        { link : '/demo/demo05', title: "Demo 05 - Directives"},
        { link : '/demo/demo06', title: "Demo 06 - Services"},
        { link : '/demo/demo07', title: "Demo 07 - Guards"},
        { link : '/demo/demo08', title: "Demo 08 - Formulaire"},
        { link : '/demo/demo09', title: "Demo 09 - Custom Validators"}
      ]},
      {title : "Exercices", icon : "sun", children: [
        {link: "/exercices/exo01", title : "Exo 01 - Chrono"},
        {link: "/exercices/exo02", title : "Exo 02 - Panier de courses"}
      ]},
    ];
  }
}
