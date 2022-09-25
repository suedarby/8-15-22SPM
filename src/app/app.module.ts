import { NgModule } from '@angular/core'; //original
import { BrowserModule } from '@angular/platform-browser'; //original
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; //original
import { AppComponent } from './app.component'; //original


import { ProjectsComponent } from './projects/projects.component';
import { DashComponent } from './dash/dash.component';
// import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectformComponent } from './projects/projectform/projectform.component';
import { RegisterComponent } from './auth/register/register.component';
import { ShoppingComponent } from './shoppinglist/shopping/shopping.component';
import { StashformComponent } from './stash/stashform/stashform.component';
import { StashComponent } from './stash/stash.component';
import { HomeComponent } from './home/home.component';
import { BudgetComponent } from './budget/budget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { DashModule } from './dash/dash.module';

@NgModule({ //original
  declarations: [			//original
    AppComponent, //original
    ProjectsComponent,
    DashComponent,
      // LoginComponent,
      ProfileComponent,
      ProjectformComponent,
      RegisterComponent,
      ShoppingComponent,
      StashformComponent,
      StashComponent,
      HomeComponent,
      BudgetComponent,
      ShoppinglistComponent
   ], //original

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    DashModule,
    // provideFirebaseApp(() => initializeApp({ })),
    // provideFirestore(() => getFirestore()),
    // AngularFireModule.initializeApp(environment.firebase)

   ], //original
  providers: [], //original
  bootstrap: [AppComponent] //original
}) //original
export class AppModule { } //original

//file #1
