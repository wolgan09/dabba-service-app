import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  @Input() title;

  constructor(private router: ActivatedRoute){
   }
   ngOnInit(){
    console.log(this.title)
  }

}
