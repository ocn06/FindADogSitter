import { UsersService } from './users.service';
import { UsersActions } from "./users.actions";
import { ActionsObservable } from "redux-observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';

@Injectable()
export class UsersEpic {

    constructor(private usersService: UsersService) {}

    // This is an epic function!!! Must be registered in app.module.
    getDogs = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.GET_DOGS) // Listen for this action
        .mergeMap(({payload}) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
            return this.usersService.getDogs()
                .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
                type: UsersActions.GET_DOGS_SUCCESS,
                payload: result.filter(dog => dog.id)
                }))
                .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                type: UsersActions.GET_DOGS_FAILURE,
                payload: error
            }));
        });
    }

        // This is an epic function!!! Must be registered in app.module.
        getSitters = (action$: ActionsObservable<any>) => {
            return action$.ofType(UsersActions.GET_SITTERS) // Listen for this action
            .mergeMap(({payload}) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
                return this.usersService.getSitters()
                    .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
                    type: UsersActions.GET_SITTERS_SUCCESS,
                    payload: result.filter(sitter => sitter.id)
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                    type: UsersActions.GET_SITTERS_FAILURE,
                    payload: error
                }));
            });
      }

}