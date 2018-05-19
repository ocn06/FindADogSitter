import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dog } from '../../entities/dog';


@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.component.html',
  styleUrls: ['./register-dog.component.css']
})
export class RegisterDogComponent implements OnInit {
  private registerDogForm;
  
  constructor(private fb: FormBuilder, private router: Router) { }
  
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
    // if (form is valid) {
      let dog: Dog = registerDogForm.value;
      //this.data.addDog(dog);
      this.router.navigate(['users-list/dogs']);
      
    // }
    console.log(registerDogForm.value);
  }

}
  
