import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuService } from '../menu.service';
import { switchMap, map, concatMap } from 'rxjs/operators';
import { CacheService } from 'src/app/shared/services/cache.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menuList$: Observable<any>;
  menuDetails$: Observable<Array<any>>
  constructor( public menuService: MenuService,private cacheservice:CacheService) { }

  ngOnInit(): void {
    const cached:Array<any> = this.cacheservice.get('menu');
    if(!cached.length){
    this.menuList$ = this.menuService.getMenuList().pipe(
      map((menu) => {
        this.cacheservice.set('menu', menu);
        this.menuList$ = of(menu)
      }))
    } else {
      this.menuList$ =  of(...cached)
      console.log(cached)
    }
  }

}
