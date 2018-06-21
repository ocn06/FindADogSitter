import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { Dog } from '../../entities/dog';
import { UsersService } from '../../users.service';
import { UsersActions } from '../../users.actions';
import { RegisterSitterComponent } from 'src/app/register/register-sitter/register-sitter.component';

let id = 2;

@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.component.html',
  styleUrls: ['./register-dog.component.css']
})

export class RegisterDogComponent implements OnInit {
  private registerDogForm;
  
  constructor(private fb: FormBuilder, 
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private usersActions: UsersActions,
    private usersService: UsersService) { }
  
  ngOnInit() {
    this.registerDogForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      postalcode: ['', Validators.required]
    });
  }

  onSubmit(registerDogForm) {
    let dog: Dog = registerDogForm.value;
    dog.id = id;
    this.usersService.createDog(dog).subscribe(newDog => {
      console.log('Created dog', newDog);
    });
      this.usersActions.addDog(dog);
      id++;
      this.router.navigate(['users-list/dogs']);
  }
}