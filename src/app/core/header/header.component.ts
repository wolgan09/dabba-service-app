import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  headerTitle = 'The Dabba';
  loggedInUser = 'admin-user';
  isMobileScreen  = false;

  fillerNav = [
    {title: 'Home', path : '/home'},
    {title: 'Menu', path : '/menu'},
    {title: 'Cart', path : '/cart'}
  ];

 
  constructor(breakpointObserver:BreakpointObserver, private router: Router) {
    this.isMobileScreen = breakpointObserver.isMatched('(max-width: 599px)');
   }
 

  toggleUser(){
    this.loggedInUser = 'customer-user'
  }

  loadModule(){
    this.router.navigate(['/' + this.loggedInUser]);
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

}
