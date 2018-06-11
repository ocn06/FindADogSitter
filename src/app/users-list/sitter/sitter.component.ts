import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store/lib/src/components/ng-redux';
import { IAppState } from 'src/app/store/store';
import { UsersService } from '../../users.service';
import { UsersActions } from 'src/app/users.actions';
import { Sitter } from '../../entities/sitter';

@Component({
  selector: 'app-sitter',
  templateUrl: './sitter.component.html',
  styleUrls: ['./sitter.component.css']
})
export class SitterComponent implements OnInit {
  private sitters: Sitter[];

  constructor(private ngRedux: NgRedux<IAppState>, private usersService: UsersService,
    private usersAction: UsersActions) { }

  ngOnInit() {
    let resultFromWs = this.usersService.getSitters();

    this.usersAction.getSitters();
    //this.usersService.getSitters().subscribe( (resultFromWs: any[]) => {
      //   this.babies = resultFromWs.filter(baby => baby.customerId === '3');
  
      //   console.log(resultFromWs);
      //});

    this.ngRedux.select(state => state.users).subscribe(users => {
      this.sitters = users.sitters;

      /* this.sitters.forEach(sitter => ) */
    })
  }

}
