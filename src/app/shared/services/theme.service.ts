import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor() {}

  updateThemeUrl(theme: string) {
  console.log('theme :', theme);
    let green_theme = 'green-theme'
    document.getElementsByTagName("body")[0].className = green_theme;

    localStorage.setItem("theme", JSON.stringify(green_theme));
  }
}
