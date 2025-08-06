import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldTemplateComponent } from './hello-world-template.component';
import { HelloWorldNgIfComponent } from './hello-world-ngif/hello-world-ngif.component';
import { HelloWorldDependencyInjectionComponent } from './hello-world-di/hello-world-di.component';
import { HelloWorldInterpolationComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldTemplateComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
    MyProjectsComponent,
    AboutMeComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
