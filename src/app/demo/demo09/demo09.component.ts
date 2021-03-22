import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-demo09',
  templateUrl: './demo09.component.html',
  styleUrls: ['./demo09.component.scss']
})
export class Demo09Component implements OnInit {

  fg : FormGroup;
  constructor(private _builder : FormBuilder) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      // ajout d'un controle de date pour lequel on fera appel à un validator
      // date par défaut a une valeur nulle
      date : [null, this.notBefore(new Date(2000,1,1))]
    })
  }

  notBefore(date : Date) : ValidatorFn {
    return(control : FormControl) => {
      if(control.value == null) {
        return null;
      }
      if(control.value.getTime() < date.getTime()) {
        return {notBeforeError : "La date doit être supérieure au 01/01/2000"}
      }
      return null;
    }
  }
}
