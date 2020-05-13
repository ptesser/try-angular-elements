import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AddCartButtonComponent } from './add-cart-button/add-cart-button.component';

@NgModule({
  declarations: [
    AddCartButtonComponent,
  ],
  imports: [
  ],
  exports: [
    AddCartButtonComponent,
  ],
})
export class LtsCartModule {
  constructor(
    private readonly injector: Injector,
  ) {

    const addCartButtonElement = createCustomElement(AddCartButtonComponent, {
      injector: this.injector,
    });
    customElements.define('lts-add-cart-button', addCartButtonElement);

  }
}
