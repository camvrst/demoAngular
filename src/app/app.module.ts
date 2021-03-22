import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbCardModule, NbListModule, NbMenuItem, NbInputModule, NbIconModule, NbDatepicker, NbDatepickerModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { Demo01Component } from './demo/demo01/demo01.component';
import { Demo02Component } from './demo/demo02/demo02.component';
import { Demo03Component } from './demo/demo03/demo03.component';
import { TotimePipe } from './pipes/totime.pipe';
import { Demo04Component } from './demo/demo04/demo04.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { Demo05Component } from './demo/demo05/demo05.component';
import { Demo06Component } from './demo/demo06/demo06.component';
import { AuthService } from './demo/demo06/services/auth.service';
import { Demo07Component } from './demo/demo07/demo07.component';
import { AuthguardService } from './demo/demo07/services/authguard.service';
import { Demo08Component } from './demo/demo08/demo08.component';
import { UserService } from './demo/demo08/services/user.service';
import { NewUserComponent } from './demo/demo08/new-user/new-user.component';
import { Demo09Component } from './demo/demo09/demo09.component';
import { Exo02Component } from './exercices/exo02/exo02.component';
import { CourseItemService } from './exercices/exo02/services/course-item.service';
import { ConfirmBoxComponent } from './exercices/exo02/confirm-box/confirm-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    DemoComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    TotimePipe,
    Demo04Component,
    ExercicesComponent,
    Exo01Component,
    Demo05Component,
    Demo06Component,
    Demo07Component,
    Demo08Component,
    NewUserComponent,
    Demo09Component,
    Exo02Component,
    ConfirmBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbListModule,
    FormsModule,
    NbInputModule,
    ReactiveFormsModule,
    NbIconModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthguardService,
    UserService,
    CourseItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
