import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../menu.service';
import { switchMap, map, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menuList$: Observable<any>;
  menuDetails$: Observable<Array<any>>
  constructor( public menuService: MenuService) { }

  ngOnInit(): void {
    this.menuList$ =  this.menuService.getMenuList()
    console.log(this.menuList$)
    // for (let index = 1; index < 5; index++) {
    //   this.menuService.getPokemonDetails(index).subscribe(
    //      menu => this.menuList$.push(menu)
    //   );
    // }
    
    
  }

}
