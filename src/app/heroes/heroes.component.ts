import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.type';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  group = {
    members: {
      avgAge: 3,
    }
  }

  constructor() { }

  makeOlder(heroName: string) {
    console.log('make older', heroName);
    const hero = this.heroes.find((hero) => hero.name === heroName);
    if (!hero) return;

    console.log('hero make older', hero)
    hero.age += 1;
    this.calcAvgAge();
  }

  calcAvgAge() {

    this.group.members.avgAge = this.heroes.reduce((acc, { age }) => acc + age, 0);
  }

  ngOnInit(): void {
    this.heroes = [
      {
        name: 'foo',
        age: 12,
      },
      {
        name: 'bar',
        age: 21,
      },
      {
        name: 'baz',
        age: 42,
      },
    ]
  }

}