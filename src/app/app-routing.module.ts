import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { MealPlanningComponent } from './meal-planning/meal-planning.component';

const routes: Routes = [
  { path: '', redirectTo: '/meals', pathMatch: 'full' },
  { path: 'meals', component: ViewRecipesComponent },
  { path: 'add', component: AddRecipeComponent },
  { path: 'list', component: IngredientsListComponent },
  { path: 'planning', component: MealPlanningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
