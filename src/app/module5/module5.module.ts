import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module5Component } from './module5.component';
import { Module5RoutingModule } from './module5-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Module5Component],
  imports: [CommonModule, Module5RoutingModule, FormsModule],
})
export class Module5Module {}
