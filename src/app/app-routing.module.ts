import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DemoComponent } from './demo/demo.component';
import { Demo01Component } from './demo/demo01/demo01.component';
import { Demo02Component } from './demo/demo02/demo02.component';
import { Demo03Component } from './demo/demo03/demo03.component';
import { Demo04Component } from './demo/demo04/demo04.component';
import { Demo05Component } from './demo/demo05/demo05.component';
import { Demo06Component } from './demo/demo06/demo06.component';
import { Demo07Component } from './demo/demo07/demo07.component';
import { AuthguardService } from './demo/demo07/services/authguard.service';
import { Demo08Component } from './demo/demo08/demo08.component';
import { NewUserComponent } from './demo/demo08/new-user/new-user.component';
import { Demo09Component } from './demo/demo09/demo09.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { Exo02Component } from './exercices/exo02/exo02.component';
import { HomeComponent } from './home/home.component';

// Classe d'Angular. 
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  // ici on peut ajouter des enfants à la route 
  {path: 'demo', component: DemoComponent, children: [
    {path : 'demo01', component: Demo01Component},
    {path : 'demo02', component: Demo02Component},
    {path : 'demo03', component: Demo03Component},
    {path : 'demo04', component: Demo04Component},
    {path : 'demo05', component: Demo05Component},
    {path : 'demo06', component: Demo06Component},
    {path : 'demo07', canActivate:[AuthguardService], component: Demo07Component},
    {path : 'demo08', component: Demo08Component},
    {path : 'demo08/new-user', component: NewUserComponent},
    {path : 'demo09', component: Demo09Component}
  ]},
  {path: 'exercices', component: ExercicesComponent, children : [
    {path: 'exo01', component: Exo01Component},
    {path: 'exo02', component: Exo02Component}
  ]}
  // PAS DE VIRGULE A LA FIN
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
