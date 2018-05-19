import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitter',
  templateUrl: './sitter.component.html',
  styleUrls: ['./sitter.component.css']
})
export class SitterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
