import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes : Recipe[] = [
    new Recipe(
    'La meilleure recette de pâte à crêpes',`Dégustez de savoureuses crêpes avec cette recette de la meilleure pâte à crêpes du monde ! Servez ces crêpes à la bière aussi bien en version sucrée que salée, garnies comme vous le souhaitez.`,
    'https://bing.com/th?id=OSK.eb1e20daef9789ba7f07fadf28d9a0ec'),
    new Recipe(
      'Osso bucco de veau',`Découvrez notre recette facile et rapide de Osso bucco de veau sur Cuisine Actuelle ! Retrouvez les étapes de préparation, des astuces et conseils pour un plat réussi.`,
      'https://bing.com/th?id=OSK.f761873007390724688038ab1c71042a'),
  ]


  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
