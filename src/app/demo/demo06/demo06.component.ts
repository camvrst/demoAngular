import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.scss']
})
export class Demo06Component implements OnInit {

  authStatus : boolean;

  // injection de dépendance dans le constructor (ici, le service auth)
  // variable privée : underscore!
  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
    this.authStatus = this._authService.isAuth;
  }

  // ces 2 méthodes font appel aux méthodes équivalentes du service

  signIn() : void {
    this._authService.signIn().then(
      () => {
        this.authStatus = this._authService.isAuth;
      }
    )
  }

  signOut() : void {
    this._authService.signOut();
    this.authStatus = this._authService.isAuth;
  }

}
