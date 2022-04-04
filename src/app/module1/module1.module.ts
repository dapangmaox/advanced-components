import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnComponent } from './components/btn.component';
import { CardComponent } from './components/card.component';
import { FancyBtnComponent } from './components/fancy-btn.component';
import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';

@NgModule({
  declarations: [
    BtnComponent,
    FancyBtnComponent,
    CardComponent,
    Module1Component,
  ],
  imports: [CommonModule, Module1RoutingModule],
  exports: [Module1Component],
})
export class Module1Module {}
