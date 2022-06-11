import { Component } from '@angular/core';

@Component({
  selector: 'app-module4',
  templateUrl: './module4.component.html',
  styleUrls: ['./module4.component.scss'],
})
export class Module4Component {
  items = [
    { name: 'Angular', active: true },
    { name: 'React', active: true },
    { name: 'Typescript', active: true },
    { name: 'FoxPro', active: false },
    { name: 'Javascript', active: true },
    { name: 'ASP.NET Core', active: true },
    { name: 'DBase', active: false },
  ];
  constructor() {}
}
