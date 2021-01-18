import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Приложение';
  veryPowerfulDevelopers: string[] = ['Брендан Эйх', 'Адам Абронс', 'Джордан Валке', 'Эван Ю'];
}
