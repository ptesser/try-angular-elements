import { Component, Input } from '@angular/core';

interface ItemCartabale {
  id: string;
}

@Component({
  selector: 'app-add-cart-button',
  styleUrls: ['./add-cart-button.component.scss'],
  templateUrl: './add-cart-button.component.html',
})
export class AddCartButtonComponent {

  @Input() item: ItemCartabale;

  constructor() { }

  addCartHandler() {
    console.log('Add to cart');
  }
}
