import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

interface RecipeModel {
barcode?: string;
category?: string;
ethnicity?: string;
id?: number;
name?: string;
}

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  id: number;
  recipe: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => this.id = param['id']);
    const url = 'http://localhost:3000/getrecipies/';
    this.http.get(url + this.id).subscribe( val => this.recipe = val );
  }
}
