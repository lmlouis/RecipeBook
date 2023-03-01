import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
    'La meilleure recette de pâte à crêpes',`Dégustez de savoureuses crêpes avec cette recette de la meilleure pâte à crêpes du monde ! Servez ces crêpes à la bière aussi bien en version sucrée que salée, garnies comme vous le souhaitez.`,
    'https://bing.com/th?id=OSK.eb1e20daef9789ba7f07fadf28d9a0ec')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
