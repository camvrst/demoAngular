import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  // création d'un objet de type FormGroup
  // qui va me permettre de récupérer des méthodes
  // ces méthodes cont me permettre de créer un groupe de propriétés dans Formgroup
  // réutilisable dans html

  userForm : FormGroup;

  // userService permet d'avoir accès aux méthodes venant de userService
  // router permet de rediriger vers / à partir d'une route
  // formBuilder = service fourni par Angular qui permet de créer des fromGroup

  constructor(
    private _userService : UserService,
    private _router : Router,
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // initialisation du formGroup
    // d'abord initialiser le userForm avec le service formBuilder pour qu'il crée un groupe
    this.userForm = this._formBuilder.group({
      // ici, placer les noms des différents formcontrol qu'il y aura dans le formgroup
      // on passe en deuxième élément un ou +ieurs validator
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      films: this._formBuilder.array([])
    });
  }

  onSubmit() {
    // Récupérer ce qu'il y a dans fromgroup
    const formValue = this.userForm.value;
    // Créer un new user qui prendra en paramètres les infos venants du formvalue
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      // la liste étant nullable : ternaire liste ou liste vide
      formValue['films'] ? formValue['films'] : [] 
    )
    // mtnt que l'user est créer, il faut appeler le service pour l'ajouter à la liste d'user
    this._userService.addUSer(newUser);
    // rerouter pour naviguer jusqu'à la liste
    this._router.navigate(['/demo/demo08']);

  }

  getFilms() {
    return this.userForm.get('films') as FormArray;
  }

  addFilms() {
    const newFilmControl = this._formBuilder.control('', Validators.required);
    this.getFilms().push(newFilmControl);
  }

}
