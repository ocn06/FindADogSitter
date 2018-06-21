import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { createLogger } from "redux-logger";
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

import { IAppState, rootReducer } from './store/store';

import { RegisterComponent } from './register/register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from 'src/app/app.component';
import { RegisterDogComponent } from './register/register-dog/register-dog.component';
import { RegisterSitterComponent } from './register/register-sitter/register-sitter.component';
import { HomeComponent } from './home/home.component';
import { DogComponent } from './users-list/dog/dog.component';
import { SitterComponent } from './users-list/sitter/sitter.component';

import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';
import { UsersActions } from '../app/users.actions';
import { UsersService } from './users.service';
import { FilterDogs } from 'src/app/dogs.filter';
import { FilterSitter } from 'src/app/sitter.filter';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UsersListComponent,
    LoginComponent,
    DogComponent,
    RegisterDogComponent,
    RegisterSitterComponent,
    HomeComponent,
    SitterComponent,
    FilterDogs,
    FilterSitter
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    NgReduxModule, 
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  
  providers: [AuthService, AuthGuard, UsersActions, UsersService],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(
    private ngRedux: NgRedux<IAppState>, 
    private devTool: DevToolsExtension, 
    private ngReduxRouter: NgReduxRouter) {

    const middleware = [
      createLogger({ level: 'info', collapsed: true })
    ];

    this.ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      [devTool.isEnabled() ? devTool.enhancer() : f => f]);
  }
}
