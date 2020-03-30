import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddCartButtonComponent } from './components/add-cart-button/add-cart-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCartButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
