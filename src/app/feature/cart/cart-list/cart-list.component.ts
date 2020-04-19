
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartList = ['Vivek' , 'Vivek' , 'Vivek' + 3 , 'Vivek' + 4, 'Vivek' + 5];

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
