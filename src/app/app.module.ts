import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [AppComponent, AddRecipeComponent, ViewRecipesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
