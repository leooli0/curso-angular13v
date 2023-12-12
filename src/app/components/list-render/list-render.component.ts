import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: 'Turca', type: 'Dog', age: 4},
    {name: 'Tom', type: 'Cat', age: 10},
    {name: 'Frida', type: 'Dog', age: 5},
    {name: 'Bob', type: 'Horse', age: 1},
  ];

  animal: Animal = {
    name: 'teste',
    type: 'Alguma coisa',
    age: 2
  };

  animalDetails = ''

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    console.log('click')
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

}
