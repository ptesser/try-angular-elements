import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AddCartButtonComponent } from './components/add-cart-button/add-cart-button.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCartButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(
    // private readonly injector: Injector,
  ) {
  }

  ngDoBootstrap() {
    // const addCartButtonElement = createCustomElement(AddCartButtonComponent, {
    //   injector: this.injector,
    // });
    // customElements.define('lts-add-cart-button', addCartButtonElement);
  }
}
