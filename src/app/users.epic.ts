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