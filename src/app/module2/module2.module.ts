import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    Module2Component,
    CustomerDetailComponent,
  ],
  imports: [CommonModule, Module2RoutingModule, FormsModule],
})
export class Module2Module {}
