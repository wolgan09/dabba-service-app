
import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { CartService } from '../cart.service';
import { map, finalize, switchMap, mergeMap } from 'rxjs/operators';
import * as _ from 'lodash';
import { CacheService } from 'src/app/shared/services/cache.service';

const imagesArray = ['male.jpg','female.jpg','female2.jpg'];

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})

export class CartListComponent implements OnInit {
  cartList$ :Observable<any> ;
  displayedColumns = [ 'select', 'thumbnail_info', 'original_asset_info', 'file_details' , 'remarks',  'turnaround_time'];
  tiles= [
    {text: 'Thumbnail', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'File-info and Turnaround', cols: 4, rows: 1, color: 'lightgreen'},
    {text: 'Notes | Description | Tags', cols: 5, rows: 1, color: 'lightgreen'}
  ];

  constructor(private cartService: CartService, private cacheservice: CacheService) { 
   
  }

  ngOnInit(): void {
    this.cartList$ = this.cartService.getCartList().pipe(
      map( (menu : Array<any>) => 
        menu.filter((item) => {
        item.image = '/assets/images/' + _.sample(imagesArray)
      }
      )), 
    )

    this.cartService.getCartList().subscribe( (menu) =>
    this.cacheservice.set('cart', menu)
  )
    console.log(this.cacheservice._store);
       
      
  }

}
