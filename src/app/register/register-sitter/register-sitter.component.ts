import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateStyleProperty } from '@angular/animations/browser/src/render/shared';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { Sitter } from '../../entities/sitter';
import { UsersService } from '../../users.service';
import { UsersActions } from '../../users.actions';

let id = 2;

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.css']
})
export class RegisterSitterComponent implements OnInit {
  private registerSitterForm;
  private isSitter;

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private ngRedux: NgRedux<IAppState>,
    private usersActions: UsersActions,
    private usersService: UsersService) { }

  ngOnInit() {
    /*  // Subscribe to the users part of the store.
     this.ngRedux.select(state => state.users).subscribe(res => {
      this.isSitter = res.isSitter;
      console.log(this.isSitter);
    }); */

    this.registerSitterForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      postalcode: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  
  onSubmit(registerSitterForm) {
    let sitter: Sitter = registerSitterForm.value;
    sitter.id = id;
    //Test: calling the ws.
    this.usersService.createSitter(sitter).subscribe(newSitter => {
      console.log(newSitter);
    });
    this.usersActions.addSitter(sitter);
    id++;
    this.router.navigate(['users-list/sitters']);
    console.log(registerSitterForm.value);
  }
}
