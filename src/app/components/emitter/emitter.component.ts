import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber() {
    //console.log('deu certo');  // descomente o console.log() para ver a função sendo chamada
    this.myNumber = Math.floor(Math.random() * 100);
  }

}
