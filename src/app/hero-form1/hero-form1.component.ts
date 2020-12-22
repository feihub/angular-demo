import { Component, OnInit } from '@angular/core';
import { Hero2 } from '../hero2';

@Component({
  selector: 'app-hero-form1',
  templateUrl: './hero-form1.component.html',
  styleUrls: ['./hero-form1.component.css']
})
export class HeroForm1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero2(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
