import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  
  @ViewChild('textInput', {static: true}) textInput: ElementRef;
  public valeur: string;

  constructor() { }

  ngOnInit() {
  }

  updateText(event: Event){
    this.valeur = (event.target as HTMLInputElement).value;
  }

}
