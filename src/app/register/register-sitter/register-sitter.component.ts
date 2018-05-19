import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateStyleProperty } from '@angular/animations/browser/src/render/shared';
import { Sitter } from '../../entities/sitter';


@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.css']
})
export class RegisterSitterComponent implements OnInit {
  private registerSitterForm

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerSitterForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      postalcode: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }
  
  onSubmit(registerSitterForm) {
    // if (form is valid) {
      let sitter: Sitter = registerSitterForm.value;
      //this.data.addSitter(sitter);
      this.router.navigate(['users-list/sitters']);
    // }
    console.log(registerSitterForm.value);


}
