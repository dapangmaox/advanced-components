import { Component } from '@angular/core';

@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.scss'],
})
export class Module3Component {
  constructor() {}

  sayHello(firstName: HTMLInputElement, lastName: HTMLInputElement) {
    alert('Hello ' + firstName.value + ' ' + lastName.value);
  }
}
