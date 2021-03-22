import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[] = [{
    firstName : 'Lucifer',
    lastName : 'Morningstar',
    email : 'hell.lux@heaven.god'
  }]

  userSubject = new Subject<User[]>();

  // récupérer le dernier user de la liste
  emitUser() {
    this.userSubject.next(this.users.slice())
  }

  addUSer(user : User) {
    this.users.push(user);
    this.emitUser();
  }
/*
  deleteUser( user : User ) {
    this.users.
  }
*/
  constructor() { }
}
