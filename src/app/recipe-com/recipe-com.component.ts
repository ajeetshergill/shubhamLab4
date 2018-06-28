import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from '../angular-service.service';
import { Recipe } from '../Recipe.class';
import { Ingredients } from '../Ingredients.class';


@Component({
  selector: 'app-recipe-com',
  templateUrl: './recipe-com.component.html',
  styleUrls: ['./recipe-com.component.css']
})
export class RecipeComComponent implements OnInit {
  public angService = new AngularServiceService();
  public temp : Ingredients = new Ingredients("", 0);
  public temp2 : string;
  public temp3 : number;

  public tempRecipe: Recipe;
  public recipeArray: Array<Recipe>;

  constructor(angService:AngularServiceService) { }
 
   selector: Recipe = null;

  ngOnInit() {
  }
  addIngr(){
    this.angService.capriceSalad.addItem(new Ingredients(this.temp.name,this.temp.quantity));
 }
  addRec(){
   
    this.tempRecipe.addInstruction(this.temp2);
    this.tempRecipe.time = this.temp3;
    this.recipeArray.push(this.tempRecipe);
    this.tempRecipe = null;
    this.temp= null;
    this.temp2= null;
    this.temp3 = null;


  }

// add(){
//  this.angService.recArray.push(this.selector);

// }
// remove(){
//   this.temp= this.selector;
// }
  
// select(){

//   this.temp= this.selector;
// }

}
