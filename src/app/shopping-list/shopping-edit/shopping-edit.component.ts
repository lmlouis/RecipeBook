import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit,  ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputRef !: ElementRef
  @ViewChild('amountInput', { static: false }) amountInputRef !: ElementRef

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.shoppingListService.addedIngredient(newIngredient)

  }

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

}
