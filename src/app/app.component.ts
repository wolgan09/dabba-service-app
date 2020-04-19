import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  
  isHandsetUI: boolean;

  constructor(breakpointObserver: BreakpointObserver,private router: Router){
    const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      }
    });
   }

   activateHandsetLayout(){
     this.isHandsetUI = true
   }
}
