import { ShoppingListService } from './shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients !: Ingredient[]
  igredientChangeSubscription !: Subscription


  constructor(private shoppingListService : ShoppingListService) { }


  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.igredientChangeSubscription = this.shoppingListService.ingredientChanged
                                           .subscribe((ingredients:Ingredient[])=>{this.ingredients = ingredients})
  }

  ngOnDestroy(): void {
    this.igredientChangeSubscription.unsubscribe()
  }

}
