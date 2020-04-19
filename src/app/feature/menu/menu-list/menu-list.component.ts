import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menuList$: Observable<any>
  constructor( private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuList$ = this.menuService.getMenuList()
  }

}
