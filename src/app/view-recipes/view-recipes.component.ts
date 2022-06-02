import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/Recipe';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.scss'],
})
export class ViewRecipesComponent implements OnInit {
  recipeData: any;
  config: any;
  panelOpenState = false;
  shoppingList: Array<Recipe>;

  constructor(private httpClient: HttpClient) {
    // Initialize as an empty array
    this.shoppingList = Array<Recipe>();
  }

  ngOnInit() {
    this.httpClient
      .get<any>('assets/recipes.json')
      .subscribe((data) => (this.recipeData = data));
    this.httpClient
      .get<any>('assets/recipes.json')
      .subscribe((data) => (this.recipeData = data));
    this.httpClient
      .get<any>('assets/config.json')
      .subscribe((data) => (this.config = data));
  }

  // Add or remove selected recipes from shopping list
  ifChecked(recipe: Recipe) {
    if (this.shoppingList.includes(recipe)) {
      const index = this.shoppingList.indexOf(recipe, 0);
      if (index > -1) {
        this.shoppingList.splice(index, 1);
      }
    } else {
      this.shoppingList.push(recipe);
    }
  }
}
