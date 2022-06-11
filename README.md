https://www.tektutorialshub.com/angular-tutorial/#advanced-components

### ng-container

一般用来和结构型指令一起使用，比如 ngIf、ngFor、ngSwitch

#### 用途

假如我们有如下数组：

```typescript
items = [
  { name: 'Angular', active: true },
  { name: 'React', active: true },
  { name: 'Typescript', active: true },
  { name: 'FoxPro', active: false },
  { name: 'Javascript', active: true },
  { name: 'ASP.NET Core', active: true },
  { name: 'DBase', active: false },
];
```

我们只想把 active 的 item 展示在 UI 上，我们一般会通过如下方式来添加一个 span 元素。

```html
<ul>
  <span *ngFor="let item of items">
    <li *ngIf="item.active">{{ item.name }}</li>
  </span>
</ul>
```

但其实，span 元素是不必要的，这时候就可以通过 ng-container 来避免不必要的 DOM 元素。

```html
<ul>
  <ng-container *ngFor="let item of items">
    <li *ngIf="item.active">{{ item.name }}</li>
  </ng-container>
</ul>
```

ng-container 也可以作为使用`ngTemplateOutlet`注入动态模板的占位符。

```html
<ng-container *ngTemplateOutlet="loading"></ng-container>
```

### ng-template & TemplateRef in angular

`ng-template` 是一个 Angular 元素，包含了一些 HTML 模板片段，`ng-template` 只是定义了模板，本身并不会渲染，一般有两种方式来显示模板。

- 使用 `ngTemplateOutlet` 指令
- 使用 `TemplateRef` 和 `ViewContainerRef`

#### 显示模板

##### ngTemplateOutlet

`ngTemplateOutlet` 是一个结构指令，用来渲染模板，使用方式如下：

```typescript
@ViewChild('sayHelloTemplate', { read: TemplateRef })
sayHelloTemplate!: TemplateRef<any>;
constructor(private viewContainerRef: ViewContainerRef) {}
ngAfterViewInit(): void {
  this.viewContainerRef.createEmbeddedView(this.sayHelloTemplate);
}
```

### ngTemplateOutlet

`ngTemplateOutlet` 是一个结构型指令，能够将一个提前准备好的 `templateRef` 插入到指定位置。
