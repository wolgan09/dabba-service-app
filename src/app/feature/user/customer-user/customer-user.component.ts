import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
const imagesArray = ['male.jpg','female.jpg','female2.jpg'];
@Component({
  selector: 'app-customer-user',
  templateUrl: './customer-user.component.html',
  styleUrls: ['./customer-user.component.scss']
})
export class CustomerUserComponent implements OnInit {
  user = {name:'flash',permissions:[1,2,1]};
  userList$:Observable<any> ;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList$ = this.userService.getUsersList().pipe(
      map( (menu:Array<any>) => 
       menu.filter( item => item.image = '/assets/images/' + _.sample(imagesArray)) 
       ))
      
  }

}
