import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-cart-button',
  styleUrls: ['./add-cart-button.component.scss'],
  templateUrl: './add-cart-button.component.html',
})
export class AddCartButtonComponent {
  @Input() storageKey = 'lts-cart';
  /** Id of the cart item to add */
  @Input() item?: string;

  addCartHandler() {
    const stringifyOldCartItems = localStorage.getItem(this.storageKey);
    const oldCartItems = stringifyOldCartItems ? JSON.parse(stringifyOldCartItems) : [];
    // TODO: Notify other components and trigger API call
    localStorage.setItem(this.storageKey, JSON.stringify([...oldCartItems, this.item]));

    console.log('Add item to cart in localStorage', this.item);
  }
}
