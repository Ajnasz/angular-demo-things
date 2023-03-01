import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from './hero.type';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Output() onMakeOlder = new EventEmitter<string>();
  @Output() onMakeYounger = new EventEmitter<string>();
  @Input() hero!: Hero;
  @Input() props!: { avgAge: number };
  @Input() sumAge!: number;

  constructor() { }

  makeOlder() {
    this.onMakeOlder.next(this.hero.name);
  }

  makeYounger() {
    this.onMakeYounger.next(this.hero.name);
  }

  ngOnInit(): void {
  }

}
