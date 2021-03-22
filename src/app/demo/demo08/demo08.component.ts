import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.scss']
})
export class Demo08Component implements OnInit {

  users : User[];
  userSubscription : Subscription;

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.userSubscription = this._userService.userSubject.subscribe(
      // lambda qui va récupérer le tableau de user se trouvant dans service
      (usersFromService : User[]) => {
        this.users = usersFromService;
      }
    );
  // je demande au service de me renvoyer le tableau d'user
  this._userService.emitUser();
  }

  // a la fermeture de la fenêtre
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
