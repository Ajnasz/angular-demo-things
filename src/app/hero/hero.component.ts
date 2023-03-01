import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from './hero.type';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Output() onMakeOlder = new EventEmitter<string>();
  @Input() hero!: Hero;
  @Input() avgAge!: number;

  constructor() { }

  makeOlder() {
    console.log('click', this.hero.name);
    this.onMakeOlder.next(this.hero.name);
  }

  ngOnInit(): void {
  }

}
