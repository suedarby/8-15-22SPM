import { NgModule } from '@angular/core'; //original
import { BrowserModule } from '@angular/platform-browser'; //original

import { AppRoutingModule } from './app-routing.module'; //original
import { AppComponent } from './app.component'; //original
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './projects/projects.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';


@NgModule({ //original
  declarations: [		//original
    AppComponent, //original
    ProjectsComponent,
    DashComponent,
      LoginComponent
   ], //original

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // ProjectsComponent,
    // DashComponent
  ], //original
  providers: [], //original
  bootstrap: [AppComponent] //original
}) //original
export class AppModule { } //original

//file #1
