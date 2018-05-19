import { Component, OnInit } from '@angular/core';
import { Dog } from '../../entities/dog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  /* @input() dogInput:  */

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
