import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

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
export class AppModule {
  constructor(
    private readonly injector: Injector,
  ) {
  }

  ngDoBoostrap() {
    const addCartButtonElement = createCustomElement(AddCartButtonComponent, {
      injector: this.injector,
    });
    customElements.define('lts-add-cart-button', addCartButtonElement);
  }
}
