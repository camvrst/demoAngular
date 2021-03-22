import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemCourse } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class CourseItemService {

  private _items: ItemCourse[] = [
    {
      nomItem: 'Cornichon',
      nombreItem: 1,
    },
  ];

  // Subject qui regarde une liste de produit
  itemCourseSubject = new Subject<ItemCourse[]>();

  // Méthode emit qui permet de dire que mon sujet regarde la liste créée ci dessus
  emitItemCourse() {
    this.itemCourseSubject.next(this._items.slice());
  }

  addItem(item: ItemCourse) {
    let index = this._items.findIndex(
      (produit) => produit.nomItem === item.nomItem
    );
    // si l'index n'a pas été trouvé dans la liste, il récuperera la valeur -1. En bref, si pas dans la liste, ajoute le
    if (index === -1) {
      this._items.push(item);
      this.emitItemCourse();
    } else {
      this.addQty(index);
    }
    // utiliser index produit
  }

  addQty(index : number) {
    this._items[index].nombreItem++;
    this.emitItemCourse();
  }

  /*

  deleteItem(item: ItemCourse) {
    this._items.pop();
    this.emitItemCourse();
  }*/

  //Aussi valable 
  //On peut aussi mettre les méthodes ds le service plutot que le componenet

  deleteItem(index : number) {
    this._items.splice(index, 1);
    this.emitItemCourse();
  }
  
  removeQtyItem (index : number) {
    this._items[index].nombreItem--;
    this.emitItemCourse;
  }



  //manque dans le addItem :

  constructor() {}
}
