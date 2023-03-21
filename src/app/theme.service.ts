import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  lighttheme: boolean = true;
  toggletheme() {
    this.lighttheme = !this.lighttheme;
    if (this.lighttheme) {
      document.body.style.backgroundColor = '#F2F2F2';
      console.log(document.body);
    } else {
      document.body.style.backgroundColor = '#141D2F';
    }
  }
  constructor() {}
}
