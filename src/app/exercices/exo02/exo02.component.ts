import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ItemCourse } from './model/item';
import { CourseItemService } from './services/course-item.service';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component'
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.scss']
})
export class Exo02Component implements OnInit {

  itemForm : FormGroup;
  items : ItemCourse[];
  itemSubscription : Subscription;
  //newItem : string;
  
  constructor(
    private _itemService : CourseItemService,
    private _formBuilder : FormBuilder,
    private _dialogService : NbDialogService
  ) { }

  ngOnInit(): void {
    // initialisation du form
    this.initForm();
    // s'abonner au service
    this.itemSubscription = this._itemService.itemCourseSubject.subscribe(
      // récupérer la liste créée
      (itemFromService : ItemCourse[]) => {
        // liste créée dans ce composant
        this.items = itemFromService;
      }
    );
    // emit de l'item
    this._itemService.emitItemCourse();
  }

  // initialisation du form
  initForm() {
    this.itemForm = this._formBuilder.group({
      nomItem : ['', Validators.required]
    });
  }

  onSubmit() {
    const formValue = this.itemForm.value;
    // déclaration d'un nouvel item
    const newItem = new ItemCourse(
      formValue['nomItem'],
      /*formValue['nombreItem'] = */1
    )
    this._itemService.addItem(newItem);
    console.log(this.items);
  }

  increaseOne(i : number) {
    this.items[i].nombreItem++;
    // this._itemService.addQty(i)
  }

  decreaseOne(i : number) {
    this.items[i].nombreItem--;
      // this._itemService.removeQty(i)
  }

  
  deleteItemCourse(i : number) {
    let dialogRef = this._dialogService.open(ConfirmBoxComponent, {
      // si click en dehors de la box
      closeOnBackdropClick: false,
      context: {
        productName : this.items[i].nomItem
      }
    });

    dialogRef.onClose.subscribe(data => {
      if(data) {
        this._itemService.deleteItem(i)
      }
    })
    
    /*
    if(i >= -1) this.items.splice(i, 1);
    this._itemService.deleteItem(this.items[i]);*/
    
    //boolean qui vient de la confirm box
    // supprimer ou pas en focntion du bool
    // créer un composant avec confirm box
  }
}
