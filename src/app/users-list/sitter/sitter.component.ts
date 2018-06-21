import { Component, OnInit, Input } from '@angular/core';
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
  @Input()
  public search: string;
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
    });
  }
  onDelete(sitter: Sitter) {
    // call the service that calls the ws.
    this.usersService.deleteSitter(sitter).subscribe(deletedSitter => {
     // this.usersAction.deleteSitter(sitter);    VIRKER IKKE
      console.log(deletedSitter);
    });
  }
}
