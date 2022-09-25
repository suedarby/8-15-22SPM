import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StashComponent } from './stash/stash.component';
// import { StashformComponent } from './stashform/stashform.component';
// import { ShoppingComponent } from './shopping/shopping.component';
import { ProjectsComponent } from './projects/projects.component';
// import { ProjectformComponent } from './projectform/projectform.component';
// import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
// import { BudgetComponent } from './budget/budget.component';
// import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashComponent },
  // { path: 'profile', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'projectform', component: ProjectformComponent },
  // { path: 'shopping', component: ShoppingComponent },
  // { path: 'stashform', component: StashformComponent },
  { path: 'stash', component: StashComponent},
  { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent},
  // { path: 'budget', component: BudgetComponent},
  // { path: 'shoppinglist', component: ShoppinglistComponent},
  // { path: 'shoppinglistform', component: Shoppinglist},
  // { path: 'loginForm', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
