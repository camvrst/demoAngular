import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {

  // lien pr afficher le nom du produit dans la confirm box
  @Input() productName : string;

  //toDelete : boolean = false;

  constructor(private _dialogRef : NbDialogRef<ConfirmBoxComponent>) {
  }

  ngOnInit(): void {
  }

  // 2 méthodes à placer yes et no

  confirm() {
    this._dialogRef.close(true);
  }

  dismiss() {
    this._dialogRef.close(false)
  }
}
