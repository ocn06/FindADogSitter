import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private selected: string="dogs";
  
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
