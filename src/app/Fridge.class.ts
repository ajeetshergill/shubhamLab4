import { Ingredients } from './Ingredients.class';
import { Recipe } from './Recipe.class';

export class Fridge{
    contents : Array<Ingredients>;

    constructor(ing : Array<Ingredients>){
        this.contents = ing;
    }

    addIng(ing : Ingredients){

        let isContain = false;
        this.contents.forEach(element => {
            if (element.name.localeCompare(ing.name)==0){
                element.quantity = element.quantity + ing.quantity;
                isContain = true;
            }
          
        });
        if( isContain == false){
            this.contents.push(ing);
        }

    }

    removeIng(ing : Ingredients, quant: number){
        this.contents.forEach(element => {
            if (element.name.localeCompare(ing.name)==0){
                element.quantity = element.quantity - quant;
                if (element.quantity == 0){
                  //  console.log(this.contents.indexOf(element));
                    this.contents.splice(this.contents.indexOf(element),1);

                }

               
            }
        });

    }
    checkRecipe(currentRecipe : Recipe){
        let inTheFridge = Array<Ingredients>();
        let shoppingList = Array<Ingredients>();
        let isInside = false;
        currentRecipe.ingredientArray.forEach(ing => {
            isInside = false;
            this.contents.forEach(element => {
                if (ing.name.localeCompare(element.name)==0){
                    inTheFridge.push(ing);
                    isInside = true;
                }
                
            });
            if(isInside == false){
                shoppingList.push(ing);
            }

        });
        return[inTheFridge,shoppingList];

    }





}