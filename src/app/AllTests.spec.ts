import { Ingredients } from './Ingredients.class';
import { Recipe } from './Recipe.class';
import { Fridge } from './Fridge.class';


describe("test cases", function(){
  //creating ingredients
  let mango : Ingredients = new Ingredients("Mango", 5);
  let bbqSauce : Ingredients = new Ingredients("bbqSauce", 1);
  let salt : Ingredients = new Ingredients("salt", 1);
  let lattice : Ingredients = new Ingredients("lattice", 2);
  let avacado : Ingredients = new Ingredients("avacado", 2);
  let orange : Ingredients = new Ingredients("orange", 3);
  let tomato : Ingredients = new Ingredients("tomato", 6);
  let cheese : Ingredients = new Ingredients("cheese", 9);
  let basil : Ingredients = new Ingredients("basil", 6);
  let citricVinegar: Ingredients = new Ingredients("Citric Vinegar Dressing", 1);

  //creating caprice Salad
  let capriceIng : Array<Ingredients> = [tomato, basil , cheese];
  let capriceInst : string = "take a bowl ,add sliced tomatoes ,add little basil ,add citric vinegar dressing , serve them in a plate with cheese on top.";

  let capriceImpInst : String = " Note: add minimum dressing!!";
  let capriceSalad : Recipe = new Recipe(capriceIng,capriceInst,10);

  //creating fridge
  let ingArray : Array<Ingredients> = [lattice, avacado, orange, salt, mango, bbqSauce,cheese,basil];
  let coolFridge : Fridge = new Fridge(ingArray);

  it("adding ingredients and instructions in recipe", function(){

    expect(mango.quantity).toBe(5);
                
    });
  it("Creating caprice salad and adding ingredients and recipe", function(){
    capriceSalad.addItem(citricVinegar);
    capriceSalad.addInstruction(capriceImpInst);
    
                
  });
  
  it("adding ingredients to the fridge", function(){
    coolFridge.addIng(tomato);
    coolFridge.addIng(mango); 
    expect(coolFridge.contents[4].quantity).toBe(10);

  });

  it("removing ingredients to the fridge", function(){
    coolFridge.removeIng(mango,3); 
    expect(coolFridge.contents[4].quantity).toBe(7);
    coolFridge.removeIng(tomato,6);
    //console.log(coolFridge.contents);
  
  });
  it("Checkingfridge for caprice salad", function(){
    coolFridge.addIng(tomato);
    console.log(coolFridge.checkRecipe(capriceSalad));
  
  });

})

