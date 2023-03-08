import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  constructor(private shoppingListService : ShoppingListService){}
  private recipes : Recipe[] = [
    new Recipe(
    'La meilleure recette de pâte à crêpes',`Dégustez de savoureuses crêpes avec cette recette de la meilleure pâte à crêpes du monde ! Servez ces crêpes à la bière aussi bien en version sucrée que salée, garnies comme vous le souhaitez.`,
    'https://bing.com/th?id=OSK.eb1e20daef9789ba7f07fadf28d9a0ec',
    [
    new Ingredient("Farine(g)", 300),
    new Ingredient("Sucre(c.a.s)", 2),
    new Ingredient("Huile(c.a.s)", 2),
    new Ingredient("Beure(g)", 50),
    new Ingredient("Rhum(c.a.s)", 5),
    new Ingredient("Oeuf(entier)", 3),
    new Ingredient("Lait(c.a.s)", 60)]
    ),
    new Recipe(
      'Osso bucco de veau',`Découvrez notre recette facile et rapide de Osso bucco de veau sur Cuisine Actuelle ! Retrouvez les étapes de préparation, des astuces et conseils pour un plat réussi.`,
      'https://bing.com/th?id=OSK.f761873007390724688038ab1c71042a',
      [
      new Ingredient("Tranches Jarret de veau", 4),
      new Ingredient("Oignon", 1),
      new Ingredient("Gousses Ail", 3),
      new Ingredient("Carottes", 2),
      new Ingredient("Tomates", 3),
      new Ingredient("Orange", 1),
      new Ingredient("Cuil (a soupe Concentre de tomates)", 3),
      new Ingredient("Vin blanc sec (Cl)", 50),
      new Ingredient("Farine (g)", 30)]),
  ]

  getRecipes(){
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addedIngredients(ingredients)

  }
}
