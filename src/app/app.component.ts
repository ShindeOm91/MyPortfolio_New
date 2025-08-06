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

  constructor() {
    
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
}
