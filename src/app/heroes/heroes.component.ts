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

  private changeAge(heroName: string, change: number) {
    const hero = this.heroes.find((hero) => hero.name === heroName);
    if (!hero) return;

    console.log('hero make older', hero)
    hero.age += change;
    this.calcAvgAge();
  }

  makeOlder(heroName: string) {
    this.changeAge(heroName, 1);
  }

  makeYounger(heroName: string) {
    this.changeAge(heroName, -1);
  }

  calcAvgAge() {

    this.group.members.avgAge = this.heroes.reduce((acc, { age }) => acc + age, 0) / this.heroes.length;
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
