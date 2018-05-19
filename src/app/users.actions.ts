import { Injectable } from '@angular/core';

import { IAppState } from './store/store';
import { Dog } from './entities/dog';
import { NgRedux } from '@angular-redux/store';



@Injectable()
export class UsersActions {
 
  constructor (
   private ngRedux: NgRedux<IAppState>) {}
   
   static SET_TYPE: string = 'SET_TYPE';
   static ADD_DOG: string = 'ADD_DOG';
   static ADD_SITTER: string = 'ADD_SITTER';
   static ADD_RATING: string = 'ADD_RATING';
   static GET_USERS: string = 'GET_USERS';
   static GET_USERS_SUCCESS: string = 'GET_USERS_SUCCESS';
   static GET_USERS_FAILURE: string = 'GET_USERS_FAILURE';

   getUsers() {
     this.ngRedux.dispatch({
       type: UsersActions.GET_USERS
     });
   }
   
    /* addRating(id: string, rating: number) {
      this.ngRedux.dispatch({
        type: UsersActions.ADD_RATING,
        payload: { rating, id }
      });
    } */

   setType(isDog: boolean): void {
    this.ngRedux.dispatch({
       type: UsersActions.SET_TYPE,
       payload: isDog
      //  payload: { isDog, something: 1, } // passing multiple parameters
     });
   }

   addDog(dog: Dog) : void {
     this.ngRedux.dispatch({
       type: UsersActions.ADD_DOG,
       payload: dog
       //Example of passing multiple parameters to reducer by passing an object
       //payload: {dog, sitterName}
     })
   }
}
