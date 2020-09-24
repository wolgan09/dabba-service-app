import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent implements OnInit {
  menuItems = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/getrecipies').subscribe(
      // tslint:disable-next-line: no-string-literal
      (res) => { this.menuItems = res['food']; }
    );
  }

}
