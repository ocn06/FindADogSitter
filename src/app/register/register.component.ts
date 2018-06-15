import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { UsersActions } from '../users.actions';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private isDog;
  private isSitter;
  private selected: string="dog";

  constructor(private router: Router,
    private ngRedux: NgRedux<IAppState>, 
    private usersActions: UsersActions,
    private usersService: UsersService) { }

  ngOnInit() {
  }

  register(e: string): void {
    this.selected = e;
  }

  isSelected(name: string): boolean {
    if (!this.selected) {
      return false;
    }

    else if (name === "dog") {
      // Subscribe to the users part of the store.
      this.ngRedux.select(state => state.users).subscribe(res => {
        this.isDog = res.isDog;
        console.log("Dog " + this.isDog);
      });
    }

    else if (name === "sitter") {
      // Subscribe to the users part of the store.
      this.ngRedux.select(state => state.users).subscribe(res => {
        this.isSitter = res.isSitter;
        console.log("Sitter " + this.isSitter);
      });
    }

    return (this.selected === name);
  }
}
