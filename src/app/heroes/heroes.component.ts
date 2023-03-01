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
      avgAge: 0,
      sumAge: 0,
    }
  }

  constructor() { }

  private changeAge(heroName: string, change: number) {
    const hero = this.heroes.find((hero) => hero.name === heroName);
    if (!hero) return;

    console.log('hero make older', hero)
    hero.age += change;
    this.calcStats();
  }

  makeOlder(heroName: string) {
    this.changeAge(heroName, 1);
  }

  makeYounger(heroName: string) {
    this.changeAge(heroName, -1);
  }

  calcStats() {
    const sumAge = this.heroes.reduce((acc, { age }) => acc + age, 0);
    this.group.members.sumAge = sumAge;
    this.group.members.avgAge = sumAge / this.heroes.length;
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
    ];

    this.calcStats();
  }

}
