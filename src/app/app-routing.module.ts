import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () =>
      import('./module1/module1.module').then(m => m.Module1Module),
  },
  {
    path: 'module2',
    loadChildren: () =>
      import('./module2/module2.module').then(m => m.Module2Module),
  },
  {
    path: 'module3',
    loadChildren: () =>
      import('./module3/module3.module').then(m => m.Module3Module),
  },
  {
    path: 'module4',
    loadChildren: () =>
      import('./module4/module4.module').then(m => m.Module4Module),
  },
  {
    path: 'module5',
    loadChildren: () =>
      import('./module5/module5.module').then(m => m.Module5Module),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
