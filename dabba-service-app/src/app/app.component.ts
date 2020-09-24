import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dabba-service-app';

  navMenuList = [
    {
      title: 'Home',
      path: ''
    },
    {
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      title: 'Recipies',
      path: '/recipies'
    }
  ];
  constructor() { }
  ngOnInit(): void { }
}
