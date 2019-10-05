import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.font-size.px]="fontSize">
      Hello World!
    </p>
    <button class="btn btn-primary" (click)="fontSize = fontSize + 5">
      +
    </button>

    <button class="btn btn-primary" (click)="fontSize = fontSize - 5">
      -
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  fontSize = 36;

  constructor() { }

  ngOnInit() {
  }

}
