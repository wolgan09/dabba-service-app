import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, catchError, mergeMap, map, concatMap } from 'rxjs/operators';
import * as _ from 'lodash';
const imagesArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
const randomImage = _.sample(imagesArray);
@Injectable()
export class MenuService {
 
  

  constructor(private httpClient: HttpClient) { }

  getMenuList(): Observable<any> {
    return this.httpClient.get('/menu').pipe(
      map( (menu:Array<any>) => 
       menu.filter( item => item.image = '/assets/images/' + _.sample(imagesArray)) 
       ))
  }

  /**
   * @description Get menu details
   * @param id: If of category
   */
  getMenu(id): Observable<any> {
    return this.httpClient.get('/menu?item=' + id);
  }
}

// this.service.getUserData(id).pipe(
//   switchMap(user => this.service.getCommuneByCode(user.code)).pipe(
//     map(commune => ({ ...user, libAdress: `${commune.postalCode} - ${commune.departement}`}))
//   )
// )

// switchMap(pokemons => result$ = this.httpClient.get(pokemons['results']).pipe(
//   map(pokemon =>{ return console.log(pokemon) })
// )