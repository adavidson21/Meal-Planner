import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'view', component: ViewRecipesComponent },
  { path: 'add', component: AddRecipeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
