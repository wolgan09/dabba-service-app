import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private menuService: MenuService) { }
  menu$:Observable<any>;
  ngOnInit(): void {
    this.menu$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.menuService.getMenu(params.get('id')))
    );
  }

}
