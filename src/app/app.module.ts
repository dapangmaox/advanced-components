import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BtnComponent } from './components/btn.component';
import { CardComponent } from './components/card.component';
import { FancyBtnComponent } from './components/fancy-btn.component';

@NgModule({
  declarations: [AppComponent, BtnComponent, FancyBtnComponent, CardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
