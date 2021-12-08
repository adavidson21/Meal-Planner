import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.scss'],
})
export class ViewRecipesComponent implements OnInit {
  recipeData: any;
  panelOpenState = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<any>('assets/recipes.json')
      .subscribe((data) => (this.recipeData = data));
  }
}
