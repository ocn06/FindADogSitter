import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { usersReducer } from './../users.reducer';
import { Dog } from '../entities/dog';
import { Sitter } from '../entities/sitter';

export class UsersState {
 isDog: boolean;
 dogs: Dog[];
 sitters?: Sitter[];
}
export class IAppState {
 users?: UsersState;
}
export const rootReducer = combineReducers<IAppState>({
 users: usersReducer,

 router: routerReducer
});