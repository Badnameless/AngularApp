import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">Incrementar</button>
    <button (click)="resetCounter()">Reiniciar</button>
    <button (click)="increaseBy(-1)">Decrementar</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(amount: number): void {
    this.counter += amount;
  }

  resetCounter():void {
    this.counter = 10
  }
}
