import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name = "Leonardo";  // ou name: string: "Leonardo"
  age = 18;
  job: string = "Programdor";
  hobbies = ["Jogar", "Filmes", "Futebol"];
  car = {
    name: "Land Rover",
    year: 2014,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
