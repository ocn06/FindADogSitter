import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private selected: string="dog";
  
  register(e: string): void {
    this.selected = e;
  }

  isSelected(name: string): boolean {
    if (!this.selected) {
      return false;
    }

    return (this.selected === name);
  }

constructor(private router: Router) { }

  ngOnInit() {
  }
  

}
