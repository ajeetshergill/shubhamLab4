import { Injectable } from '@angular/core';
import { Ingredients } from './Ingredients.class';
import { Recipe } from './Recipe.class';
import { Fridge } from './Fridge.class';

@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {
public  tomato : Ingredients = new Ingredients("tomato", 6);
public  cheese : Ingredients = new Ingredients("cheese", 9);
public  basil : Ingredients = new Ingredients("basil", 6);
public mango : Ingredients = new Ingredients("Mango", 5);
public bbqSauce : Ingredients = new Ingredients("bbqSauce", 1);
public salt : Ingredients = new Ingredients("salt", 1);
public lattice : Ingredients = new Ingredients("lattice", 2);
public avacado : Ingredients = new Ingredients("avacado", 2);
public orange : Ingredients = new Ingredients("orange", 3);

public capriceIng : Array<Ingredients> = [this.tomato, this.basil , this.cheese];
//intstructions
public capriceInst : string = " in a plate with cheese on top.";

//recipe
public capriceSalad : Recipe = new Recipe(this.capriceIng,this.capriceInst,10);
//another array: no use rn
public ingArray : Array<Ingredients> = [this.lattice, this.avacado, this.orange, this.salt, this.mango, this.bbqSauce,this.cheese,this.basil];



//fridge
public coolFridge : Fridge = new Fridge(this.ingArray);
  constructor() { 
  

  }
}


