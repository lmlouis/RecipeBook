import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient("Farine(g)", 300),
    new Ingredient("Sucre(c.a.s)", 2),
    new Ingredient("Huile(c.a.s)", 2),
    new Ingredient("Beure(g)", 50),
    new Ingredient("Rhum(c.a.s)", 5),
    new Ingredient("Oeuf(entier)", 3),
    new Ingredient("Lait(c.a.s)", 60),


  ]


  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
