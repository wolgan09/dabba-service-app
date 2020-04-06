import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {
user = {name:'vivek',permissions:[1,2,1]}
  constructor() { }

  ngOnInit(): void {
  }

}
