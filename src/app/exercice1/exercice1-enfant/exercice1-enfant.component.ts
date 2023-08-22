import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() counter: number;
  @Output() updateCounter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  incrementCounter(){
    this.counter += 1;
    this.updateCounter.emit(this.counter);
  }

  decrementCounter(){
    this.counter -= 1;
    this.updateCounter.emit(this.counter);
  }

}
