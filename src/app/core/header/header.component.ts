import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'The Dabba';
  loggedInUser = 'admin-user';

  constructor(private router: Router){ }

  toggleUser(){
    this.loggedInUser = 'customer-user'
  }

  loadModule(){
    this.router.navigate(['/' + this.loggedInUser]);
  }
  ngOnInit(): void {
  }

}
