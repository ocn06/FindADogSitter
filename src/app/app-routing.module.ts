import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { RegisterDogComponent } from 'src/app/register/register-dog/register-dog.component';
import { RegisterSitterComponent } from 'src/app/register/register-sitter/register-sitter.component';
import { AuthGuard } from './auth-guard';
import { DogComponent } from './users-list/dog/dog.component';
import { SitterComponent } from './users-list/sitter/sitter.component';

//HOW TO NAVIGATE
//PASS TO RouterModule.forRoot method to configure the router
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard],
      children: [ 
        { path: 'dogs', component: DogComponent }, 
        { path: 'sitters', component: SitterComponent } 
      ]
  },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard],
      children: [
          { path: 'dog', component: RegisterDogComponent },
          { path: 'sitter', component: RegisterSitterComponent }
      ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
