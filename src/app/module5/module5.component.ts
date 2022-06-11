import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-module5',
  templateUrl: './module5.component.html',
  styleUrls: ['./module5.component.scss'],
})
export class Module5Component implements AfterViewInit {
  @ViewChild('sayHelloTemplate', { read: TemplateRef })
  sayHelloTemplate!: TemplateRef<any>;
  selected = false;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    this.viewContainerRef.createEmbeddedView(this.sayHelloTemplate);
  }
}
