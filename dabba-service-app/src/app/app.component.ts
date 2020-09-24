import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dabba-service-app';
  menuItems = [];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/getrecipies').subscribe(
      // tslint:disable-next-line: no-string-literal
      (res) => { this.menuItems = res['food']; }
    )
  }
}
