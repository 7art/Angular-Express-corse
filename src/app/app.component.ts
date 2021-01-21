import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список пользователей';
  veryPowerfulDevelopers: string[] = ['Брендан Эйх', 'Адам Абронс', 'Джордан Валке', 'Эван Ю'];
}
