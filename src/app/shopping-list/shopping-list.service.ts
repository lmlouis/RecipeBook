import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{


  ingredientChanged = new Subject<Ingredient[]>()
  ingredients:Ingredient[]=[
    new Ingredient("Eau(L)", 1),
    new Ingredient("Pain", 2),
  ]

  getIngredients(){return this.ingredients.slice()}

  addedIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice())
  }


  addedIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addedIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients)
    this.ingredientChanged.next(this.ingredients.slice())
  }




}
