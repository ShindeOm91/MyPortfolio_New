import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent {

  projects = [
  {
    title: 'UniLearn Platform',
    description: 'An EdTech learning platform built with Angular and Spring Boot.',
    image: 'https://placehold.co/600x400?text=UniLearn',
    demoLink: 'https://unilearn-demo.vercel.app',
    codeLink: 'https://github.com/omkarshinde/unilearn'
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for product and order management using Angular & Firebase.',
    image: 'https://placehold.co/600x400?text=E-Commerce+Dashboard',
    demoLink: 'https://ecom-dashboard.vercel.app',
    codeLink: 'https://github.com/omkarshinde/ecom-dashboard'
  },
  {
    title: 'Security Management System',
    description: 'Microservice-based app for managing guards, attendance, and reports.',
    image: 'https://placehold.co/600x400?text=Security+System',
    demoLink: '',
    codeLink: 'https://github.com/omkarshinde/security-system'
  },
  // Add more projects...
];
  constructor() { }

  getProjectImage(project: any): string {
    return project.image || 'assets/images/default-project.png';
  }
}
