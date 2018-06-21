import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store/lib/src/components/ng-redux';
import { IAppState } from 'src/app/store/store';

import { Dog } from '../../entities/dog';

import { UsersService } from '../../users.service';
import { UsersActions } from 'src/app/users.actions';


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  private dogs: Dog[];
  @Input()
  public search: string;
  constructor(private ngRedux: NgRedux<IAppState>, private usersService: UsersService,
  private usersAction: UsersActions) { }

  ngOnInit() {
    this.usersAction.getDogs(); 
    this.usersService.getDogs().subscribe((dogs: any[]) => {
      console.log('DOGS', dogs)
    });

    this.ngRedux.select(state => state.users).subscribe(users => {
      this.dogs = users.dogs;
    });
  }
  onDelete(dog: Dog) {
    // call the service that calls the ws.
    this.usersService.deleteDog(dog).subscribe(deletedDog => {
      console.log(deletedDog);
    });
  }
}
