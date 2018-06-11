import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControlName } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  // DI - Dependency Injection
  constructor(private fb: FormBuilder, private router: Router, 
    private authService: AuthService) { }

  onSubmitLogin(loginForm) {
    console.log(loginForm);
    // Send a request to the server
    // Try to login
    if (loginForm.controls.username.value === "olivia" && loginForm.controls.password.value === "p") {
          // Send an http request

        console.log("valid");

        let x = this.authService.login();

        this.authService.login().subscribe(() => {
        console.log("Now I am logged in!");

        // How to navigate in typescript code.
        this.router.navigate(['users-list']);
        })
    }
    else {
    // Show errors and not send a request.
      alert("Fill out the fields, please!");
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required], 
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
