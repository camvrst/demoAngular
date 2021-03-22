import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// Permet de l'exporter pour l'importer dans app.modules
export class AppComponent {
  title = 'DemoAngular';
}
