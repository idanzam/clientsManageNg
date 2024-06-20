import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-day-night',
  templateUrl: './day-night.component.html',
  styleUrl: './day-night.component.css'
})
export class DayNightComponent {

  checked: boolean = false;


  constructor(private themeService: ThemeService) {}

  toggleTheme(event: any) {
    if (event.checked) {
      this.changeTheme('saga-blue'); // Example theme change on toggle on
    } else {
      this.changeTheme('vela-blue'); // Example theme change on toggle off
    }
  }

  changeTheme (theme:string) {
    this.themeService.switchTheme(theme)

  }

}
