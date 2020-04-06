import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-user',
  templateUrl: './customer-user.component.html',
  styleUrls: ['./customer-user.component.scss']
})
export class CustomerUserComponent implements OnInit {
  user = {name:'flash',permissions:[1,2,1]};
  constructor() { }

  ngOnInit(): void {
  }

}
