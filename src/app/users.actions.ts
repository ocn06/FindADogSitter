import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';

import { Dog } from './entities/dog';
import { Sitter } from './entities/sitter';

@Injectable()
export class UsersActions {
 
  constructor (
   private ngRedux: NgRedux<IAppState>) {}
   
   static SET_DOG_TYPE: string = 'SET_DOG_TYPE';
   static SET_SITTER_TYPE: string ='SET_SITTER_TYPE';
   static ADD_DOG: string = 'ADD_DOG';
   static ADD_SITTER: string = 'ADD_SITTER';
   static ADD_RATING: string = 'ADD_RATING';
   static GET_DOGS: string = 'ADD_DOGS';
   static GET_SITTERS: string = 'ADD_SITTERS';
   static GET_SITTERS_SUCCESS: string = 'GET_SITTERS_SUCCESS';
   static GET_DOGS_SUCCESS: string = 'GET_DOGS_SUCCESS';
   static GET_DOGS_FAILURE: string = 'GET_DOGS_FAILURE'; 
   static GET_SITTERS_FAILURE: string = 'GET_SITTERS_FAILURE'; 
   static DELETE_DOG: string = 'DELETE_DOG';
   static DELETE_SITTER: string = 'DELETE_SITTER';

   getDogs() {
     this.ngRedux.dispatch({
       type: UsersActions.GET_DOGS
     });
   }
   
    /* addRating(id: string, rating: number) {
      this.ngRedux.dispatch({
        type: UsersActions.ADD_RATING,
        payload: { rating, id }
      });
    } */

   setDogType(isDog: boolean): void {
    this.ngRedux.dispatch({
       type: UsersActions.SET_DOG_TYPE,
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
     });
   }


   //SITTER
   getSitters() {
    this.ngRedux.dispatch({
      type: UsersActions.GET_SITTERS
    });
  }

  setSitterType(isSitter: boolean): void {
    this.ngRedux.dispatch({
       type: UsersActions.SET_SITTER_TYPE,
       payload: isSitter
      //  payload: { isSitter, something: 1, } // passing multiple parameters
     });
   }

   addSitter (sitter: Sitter) : void {
      this.ngRedux.dispatch({
        type: UsersActions.ADD_SITTER,
        payload: sitter
      });
   }

   deleteSitter (sitter: Sitter) : void {
     this.ngRedux.dispatch({
       type: UsersActions.DELETE_SITTER,
         payload: sitter
     });
   }
}
