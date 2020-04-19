import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobileScreen  = false;
  constructor(breakpointObserver:BreakpointObserver) {
    this.isMobileScreen = breakpointObserver.isMatched('(max-width: 599px)');
   }

  ngOnInit(): void {
  }

}
