import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test', 'Testing', 'https://assets3.thrillist.com/v1/image/2797371/size/tl-horizontal_main_2x.jpg'),
    new Recipe('Test 2', 'Testing', 'https://assets3.thrillist.com/v1/image/2797371/size/tl-horizontal_main_2x.jpg'),

  ];

  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
