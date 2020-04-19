
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartList$ :Observable<any> ;

  constructor(private cartService: CartService) { 
   
  }

  ngOnInit(): void {
    this.cartList$ = this.cartService.getCartList()
  }

}
