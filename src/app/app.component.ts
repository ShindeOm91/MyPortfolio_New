import { Component } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showProjects = false;
  btnText = 'View My Work';
  showContact = false;
  showAbout = false;
  isDarkMode = false;

  constructor() {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    }
  }

  toggleProjects() {
    this.showProjects = !this.showProjects;
    this.btnText = this.showProjects ? 'Hide My Work' : 'View My Work';
    if (this.showContact) {
      this.showContact = false;
    }
    if (this.showAbout) {
      this.showAbout = false;
    }
  }
  toggleContact() {
    this.showContact = !this.showContact;
    if (this.showProjects) {
      this.showProjects = false;
      this.btnText = 'View My Work';
    }
    if (this.showAbout) {
      this.showAbout = false;
    }
  }
  toggleAbout() {
    this.showAbout = !this.showAbout;
    if (this.showProjects) {
      this.showProjects = false;
      this.btnText = 'View My Work';
    }
    if (this.showContact) {
      this.showContact = false;
    }
  }

  toggleDarkMode(event: any) {
    this.isDarkMode = event.target.checked;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  enableDarkMode() {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.isDarkMode = true;
  }

  disableDarkMode() {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.isDarkMode = false;
  }
}
