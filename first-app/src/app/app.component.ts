import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Primera aplicación con Angular';
  curso: string = 'Curso de Sring & Angular';
  estudiante: string = 'Adolfo León';
}
